/* eslint-disable no-undef */
// Adapted from code by Matt Walters https://www.mattwalters.net/posts/2018-03-28-hugo-and-lunr/

/**
 * Translations for UI text based on the current language
 */
const translations = {
  fr: {
    searchResults: 'Résultats de recherche',
    noResults: 'Aucun résultat trouvé pour la requête'
  },
  de: {
    searchResults: 'Suchergebnisse',
    noResults: 'Keine Ergebnisse gefunden für die Suche'
  },
  it: {
    searchResults: 'Risultati della ricerca',
    noResults: 'Nessun risultato trovato per la ricerca'
  }
};

/**
 * Function to get the current language from the URL
 * @returns the language code
 */
function getCurrentLang() {
  const path = window.location.pathname;
  const regex = /\/(fr|de|it)\//;
  const match = regex.exec(path);
  return match ? match[1] : 'de';  // German by default if not found
}

/**
 * Get the translated text based on the current language
 * @param {string} key - The key of the text to translate
 * @returns {string} - The translated text
 */
function translate(key) {
  const lang = getCurrentLang();
  return translations[lang]?.[key] || translations.de[key]; // Fallback to German if not found
}

/**
 * Function to get the language code from the URL
 * @param url
 * @returns the language code from the URL
 */
function extractLangFromURL(url) {
  const match = url.match(/\/(fr|de|it)\//);
  return match ? match[1] : 'de';  // German by default if not found
}

/**
 * Extracts a substring around a search term with n characters before and after.
 * @param {string} text - The input string to search in.
 * @param {string} term - The term to search for.
 * @param {number} n - The number of characters to include before and after the term.
 * @returns {string|null} - The extracted substring or null if the term is not found.
 */
function extractSurroundingText(text, term, n) {
  const sanitizedTerm = term.replace(/[*?]/g, '');
  const lowerText = text.toLowerCase();
  const lowerTerm = sanitizedTerm.toLowerCase();
  const index = lowerText.indexOf(lowerTerm);
  if (index === -1) {
    return null; // Return null if the term is not found
  }

  const start = Math.max(0, index - n);
  const end = Math.min(text.length, index + sanitizedTerm.length + n);

  return text.substring(start, end);
}

(function ($) {
  'use strict';

  $(document).ready(function () {
    const $searchInput = $('.td-search input');

    //
    // Register handler
    //

    $searchInput.on('change', (event) => {
      render($(event.target));

      // Hide keyboard on mobile browser
      $searchInput.blur();
    });

    // Prevent reloading page by enter key on sidebar search.
    $searchInput.closest('form').on('submit', () => {
      return false;
    });

    //
    // Lunr
    //

    let idx = null; // Lunr index
    const resultDetails = new Map(); // Will hold the data for the search results (titles and summaries)

    // Set up for an Ajax call to request the JSON data file that is created by Hugo's build process
    $.ajax($searchInput.data('offline-search-index-json-src')).then(handleAjaxResponse);

    /**
     * Handles Ajax response
     * @param data
     */
    function handleAjaxResponse(data) {
      const currentLang = getCurrentLang();
      const filteredData = filterDataByLang(data, currentLang);
      createLunrIndex(filteredData);
      $searchInput.trigger('change');
    }

    /**
     * Filters data by lang
     * @param data
     * @param lang
     * @returns true if the doc lang is equal to the given lang, otherwise false
     */
    function filterDataByLang(data, lang) {
      return data.filter(doc => {
        const docLang = extractLangFromURL(doc.ref);
        return docLang === lang;
      });
    }

    /**
     * Creates Lunr index
     * @param filteredData
     */
    function createLunrIndex(filteredData) {
      idx = lunr(function () {
        this.ref('ref');
        this.field('title', { boost: 5 });
        this.field('categories', { boost: 3 });
        this.field('tags', { boost: 3 });
        this.field('description', { boost: 2 });
        this.field('body');

        filteredData.forEach(addDocumentToIndex, this);
      });
    }

    /**
     * Add the given documentation to the index.
     * @param doc
     */
    function addDocumentToIndex(doc) {
      this.add(doc);
      resultDetails.set(doc.ref, {
        title: doc.title,
        excerpt: doc.excerpt,
        body: doc.body
      });
    }

    /**
     * Adds terms to the Lunr query based on the token.
     * @param token
     * @param query
     */
    function addTermsToQuery(token, query) {
      const queryString = token.toString();
      if (queryString.includes('*')) {
        query.term(queryString, {
          wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
          boost: 10,
          usePipeline: false
        });
      } else {
        query.term(queryString, {
          boost: 100,
          usePipeline: false
        });
      }
    }

    /**
     * Adds search terms to query
     * @param query
     * @param searchQuery
     */
    function addSearchTermsToQuery(query, searchQuery){
      const tokens = lunr.tokenizer(searchQuery.toLowerCase());
      tokens.forEach(token => addTermsToQuery(token, query));
    }

    /**
     * Renders the search results popover
     * @param $targetSearchInput
     */
    function renderSearchResultsPopover($targetSearchInput){

      //
      // Dispose existing popover
      //

      {
        const popover = bootstrap.Popover.getInstance($targetSearchInput[0]);
        if (popover !== null) {
          popover.dispose();
        }
      }

      //
      // Search
      //

      if (idx === null) {
        return;
      }

      const searchQuery = $targetSearchInput.val();
      if (searchQuery === '') {
        return;
      }

      const results = idx
        .query(query => addSearchTermsToQuery(query, searchQuery))
        .slice(0, $targetSearchInput.data('offline-search-max-results'));

      //
      // Make result html
      //

      const $html = $('<div>');

      $html.append(
        $('<div>')
          .css({
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1em',
          })
          .append(
            $('<span>').text(translate('searchResults')).css({ fontWeight: 'bold' })
          )
          .append(
            $('<span>').addClass('td-offline-search-results__close-button')
          )
      );

      const $searchResultBody = $('<div>').css({
        maxHeight: `calc(100vh - ${
          $targetSearchInput.offset().top - $(window).scrollTop() + 180
        }px)`,
        overflowY: 'auto',
      });
      $html.append($searchResultBody);

      if (results.length === 0) {
        $searchResultBody.append(
          $('<p>').text(`${translate('noResults')} "${searchQuery}"`)
        );
      } else {
        results.forEach((r) => {
          const doc = resultDetails.get(r.ref);
          const href =
              $searchInput.data('offline-search-base-href') +
              r.ref.replace(/^\//, '');

          const $entry = $('<div>').addClass('mt-4');

          $entry.append(
            $('<small>').addClass('d-block text-body-secondary').text(r.ref)
          );

          $entry.append(
            $('<a>')
              .addClass('d-block')
              .css({
                fontSize: '1.2rem',
              })
              .attr('href', href)
              .text(doc.title)
          );
          if(doc.body){
            const excerpt = extractSurroundingText(doc.body, searchQuery, 100);
            if(excerpt){
              $entry.append($('<p>').text(excerpt));
            }
          }

          $searchResultBody.append($entry);
        });
      }

      /**
       * Changes target search input on click
       */
      function changeTargetSearchInputOnClick(){
        $targetSearchInput.val('');
        $targetSearchInput.trigger('change');
      }

      $targetSearchInput.one('shown.bs.popover', () => {
        $('.td-offline-search-results__close-button').on('click', changeTargetSearchInputOnClick);
      });

      const popover = new bootstrap.Popover($targetSearchInput, {
        content: $html[0],
        html: true,
        customClass: 'td-offline-search-results',
        placement: 'bottom',
      });
      popover.show();
    }

    const render = renderSearchResultsPopover;
  });
})(jQuery);