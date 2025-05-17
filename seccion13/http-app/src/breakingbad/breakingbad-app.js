/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    console.log(data.results[0]);
    return data.results[0];
};

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';

    // const quote = await fetchQuote();
    // element.innerHTML = 'Tenemos data!!!';

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.status;
        authorLabel.innerHTML = data.name;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );
    }

    // Añadir listener
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote( quote );
    });

    fetchQuote()
        .then( renderQuote );

}