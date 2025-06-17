const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
});

const spotlightsUrl = "json/spotlights.json";
const spotlights = document.querySelector("#spotlights");

async function getSpotlightData() {
    const response = await fetch(spotlightsUrl);
    const data = await response.json();
    const level3Spotlights = data.spotlights.filter(spotlight => spotlight.membershipLevel === 2);
    displaySpotlights(level3Spotlights);
}

const displaySpotlights = (spotlightsData) => {
    spotlightsData.forEach((spotlight) => {
        const section = document.createElement('section');
        const name = document.createElement('h2');
        const description = document.createElement('h3');
        const image = document.createElement('img');
        const discounts = document.createElement('p');

        // Create a list for contact info
        const contactList = document.createElement('ul');
        const email = document.createElement('li');
        const phone = document.createElement('li');
        const website = document.createElement('li');

        name.textContent = `${spotlight.name}`;
        description.textContent = `${spotlight.description || ''}`;
        email.textContent = `EMAIL: ${spotlight.email}`;
        phone.textContent = `PHONE: ${spotlight.phone}`;
        website.textContent = `URL: ${spotlight.website}`;
        discounts.textContent = '50% discount this weekend';

        image.setAttribute('src', spotlight.imageurl);
        image.setAttribute('alt', `Placilla Business`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('style', 'border-radius: 0.5rem; margin-right: 5px; width: 90%; height: auto; display: flex;');

        section.setAttribute('class', 'spotlight');
        section.setAttribute('style', 'display: grid; grid-template-columns: 30% 70%; grid-template-rows: 1fr 1fr 2fr 2fr; padding: 10px; border: 1px solid #ccc; border-radius: 0.5rem;');

        email.setAttribute('style', 'display: ; grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3; align-items: start;');
        phone.setAttribute('style', 'display: ; grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3;');
        website.setAttribute('style', 'display:block; grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3;');
        discounts.setAttribute('style', 'margin-top: -2rem; color: red; font-style: italic; rotate: -10deg; font-weight: bold;font-stretch:50%');

        contactList.appendChild(email);
        contactList.appendChild(phone);
        contactList.appendChild(website);

        section.appendChild(name);
        section.appendChild(description);
        section.appendChild(image);
        section.appendChild(contactList);
        section.appendChild(discounts);

        spotlights.appendChild(section);
    });
};

getSpotlightData();
