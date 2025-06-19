const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
});


const membersUrl = "json/members.json";
const members = document.querySelector("#members");

async function getMemberData() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    // const level3Members = data.members.filter(member => member.membershipLevel === 2);
    // displayMembers(level3Members);
}

const displayMembers = (membersData) => {
    membersData.forEach((member) => {
        const section = document.createElement('section');
        const name = document.createElement('h2');
        const description = document.createElement('h3');
        const image = document.createElement('img');
        const discounts = document.createElement('p')
        const membershipLevel = document.createElement('a');
        
        const email = document.createElement('li');
        const phone = document.createElement('li');
        const website = document.createElement('li');

        name.textContent = `${member.name}`;
        description.textContent = `${member.description || ''}`;
        email.textContent = `EMAIL: ${member.email}`;
        phone.textContent = `PHONE: ${member.phone}`;
        website.textContent = `URL: ${member.website}`;
        discounts.textContent = '50% discount this weekend'

        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', member.name || 'Placilla Business');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '90%');
        image.setAttribute('height', 'auto');
        image.setAttribute('display', 'flex');
        image.setAttribute('style', 'border-radius: 0.5rem; margin-right: 5px;');
        
        section.setAttribute('class', 'member');
        section.setAttribute('style', 'display: grid; grid-template-columns: 30% 70%; grid-template-rows: 15% 15% 40% 30%; padding: 10px; border: 1px solid #ccc; border-radius: 0.5rem;');
        
        email.setAttribute('style', 'display: block; margin-top: -33%; height:33%; grid-column-start: 2; grid-column-end: 3; grid-row-start: 3; grid-row-end: 5; align-items: start;');
        phone.setAttribute('style', 'display: block; margin-top:33%; height:33%; grid-column-start: 2; grid-column-end: 3; grid-row-start: 3; grid-row-end: 5;');
        website.setAttribute('style', 'display:block; margin-top:66%; height:33%; grid-column-start: 2; grid-column-end: 3; grid-row-start: 3; grid-row-end: 5;');
        discounts.setAttribute('style', 'margin-top: -2rem; color: red; font-style: italic; rotate: -10deg; font-weight: bold;font-stretch:50%');
        
        section.appendChild(name);
        section.appendChild(description);
        section.appendChild(image);
        section.appendChild(email);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(discounts);        
        section.appendChild(membershipLevel);

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
// Set timestamp on form load
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    document.querySelectorAll('.modal-link').forEach(link => {
        link.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).showModal();
        });
    });
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
        this.closest('dialog').close();
        });
    });

    // Animate membership cards on load
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.membership-card').forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px)';
        setTimeout(() => {
        card.style.transition = 'opacity 0.7s, transform 0.7s';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
        }, 200 + i * 200);
    });
});
  
        // ul.appendChild(email);
        // ul.appendChild(phone);
        // ul.appendChild(website);
        // members.appendChild(ul);

const url = "json/interests.json";
const interests = document.querySelector("#interests");

async function getInterestData() {
    const response = await fetch(url);
    const data = await response.json();
    displayInterests(data.interests.slice(0, 8)); // Only first 8
}

const displayInterests = (interestsData) => {
    interestsData.forEach((interest) => {
        const card = document.createElement('section');
        const title = document.createElement('h2');
        const img = document.createElement('img');
        img.alt = interest.alt || interest.name || 'Interest image';
        const address = document.createElement('address');
        const desc = document.createElement('p');
        const btn = document.createElement('button');
        
        card.className = 'interest-section';    
        title.textContent = interest.name || 'No Title';
        
        img.src = interest.imageurl;
        img.loading = 'auto';
        img.style.width = '33vw';
        img.style.height = 'auto';

        card.setAttribute('class', 'interest-section');

        address.textContent = interest.address || 'No address provided';
        address.setAttribute('class', 'interest-address');
        
        desc.textContent = interest.description || '';
        
        btn.textContent = 'Learn more';
        btn.type = 'button';

        // Assemble card
        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(desc);
        card.appendChild(btn);

        interests.appendChild(card);
    });
};

getInterestData();

    const messageArea = document.getElementById('visitor-message');
        const lastVisit = localStorage.getItem('lastVisit');
        const now = Date.now();

        if (!lastVisit) {
            messageArea.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const msInDay = 1000 * 60 * 60 * 24;
            const daysPassed = Math.floor((now - Number(lastVisit)) / msInDay);
            if (daysPassed < 1) {
                messageArea.textContent = "Back so soon! Awesome!";
            } else if (daysPassed === 1) {
                messageArea.textContent = "You last visited 1 day ago.";
            } else {
                messageArea.textContent = `You last visited ${daysPassed} days ago.`;
            }
        }
        localStorage.setItem('lastVisit', now);