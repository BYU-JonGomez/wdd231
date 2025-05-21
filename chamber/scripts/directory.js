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
        const description = document.createElement('h4');
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
        image.setAttribute('width', '50px');
        image.setAttribute('height', '50px');
        image.setAttribute('display', 'flex');
        image.setAttribute('style', 'border-radius: 50%; margin-right: 10px;');
        
        section.setAttribute('class', 'member');
        section.setAttribute('style', 'display: flex; align-items: center; margin-bottom: 10px; padding : 10px; border: 1px solid #ccc; border-radius: 10px;');

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