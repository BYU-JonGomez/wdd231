async function fetchNews() {
    const apiKey = 'pub_60e986020d58430996c6ad75a6890088';
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=coffee&language=en`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const newsContainer = document.querySelector('.news');
        newsContainer.innerHTML = ""; // Clear previous news
        if (data.results && data.results.length > 0) {
            const newsList = document.createElement('ul');
            data.results.slice(0, 3).forEach(article => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${article.link}" target="_blank" rel="noopener">${article.title}</a>`;
                newsList.appendChild(li);
            });
            newsContainer.appendChild(newsList);
        } else {
            newsContainer.innerHTML = "<p>No recent news found.</p>";
        }
    } catch (error) {
        document.querySelector('.news').innerHTML = "<p>Unable to load news at this time.</p>";
    }
}

fetchNews();