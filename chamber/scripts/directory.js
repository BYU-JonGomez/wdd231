const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
});


const url = "json/members.json";
const members = document.querySelector("#members");

// async function getProphetData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.table(data.prophets);
// }

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (membersData) => {
    membersData.forEach((member) => {
        const section = document.createElement('section');
        const name = document.createElement('h2');
        const description = document.createElement('h3');
        const image = document.createElement('img');
        const email = document.createElement('li');
        const phone = document.createElement('li');
        const website = document.createElement('li');

        name.textContent = `${member.name}`;
        description.textContent = `${member.description || ''}`;
        email.textContent = `EMAIL: ${member.email}`;
        phone.textContent = `PHONE: ${member.phone}`;
        website.textContent = `URL: ${member.website}`;

        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `Placilla Business`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '55px');
        image.setAttribute('height', '55px');
        image.setAttribute('display', 'flex');
        image.setAttribute('style', 'border-radius: 50%; margin-right: 10px;');
        
        section.setAttribute('class', 'member');
        section.setAttribute('style', 'display: grid; grid-template-columns: 30% 70%; grid-template-rows: 20% 20% 60%;; padding: 10px; border: 1px solid #ccc; border-radius: 10px;');

        email.setAttribute('style', 'margin-top:4.5rem')
        phone.setAttribute('style', 'margin-top:6.5rem')
        website.setAttribute('style', 'margin-top:8.5rem')



        section.appendChild(name);
        section.appendChild(description);
        section.appendChild(image);
        section.appendChild(email);
        section.appendChild(phone);
        section.appendChild(website);

        members.appendChild(section);
    });
};

getMemberData();



window.onload = function() {
    const temperature = 30; // Default temperature
    const weatherConditions = 'Clear'; // Default weather conditions
    const windSpeed = 8; // Default wind speed

    document.getElementById('temperature').innerText = temperature;
    document.getElementById('weatherConditions').innerText = weatherConditions;
    document.getElementById('windSpeed').innerText = windSpeed;

    let windChill = "N/A";

    if (temperature <= 50 && windSpeed > 3) {
        windChill = calculateWindChill(temperature, windSpeed, 'F').toFixed(2);
    }

    document.getElementById('windChill').innerText = `${windChill} °F`;
}

function calculateWindChill(temp, windSpeed, unit = 'F') {
    return unit === 'F' 
        ? 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))
        : 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
}