const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.navul');
const main = document.querySelector('.main');
const works = document.getElementById('portifolio');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navul.classList.toggle('active');
  main.classList.toggle('active');
});

document.querySelectorAll('.navitem').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navul.classList.remove('active');
  main.classList.remove('active');
}));


let projects = [
  {
    id: 'proj1',
    title: 'Tonic',
    company: 'CANOPY',
    specialization: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: {
      tech1: 'html', 
      tech2: 'css',
      tech3: 'javaScript'
    },
    image: './images/over.png'
  },

  {
    id: 'proj2',
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    specialization: 'Full Stack Dev',
    year: 2015,
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: {
      tech1: 'html', 
      tech2: 'css',
      tech3: 'javaScript'
    },
    image: './images/newcard.png'
   },

   {
    id: 'proj3',
    title: 'Facebook 360',
    company: 'FACEBOOK',
    specialization: 'Full Stack Dev',
    year: 2015,
 
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    technologies: {
      tech1: 'html', 
      tech2: 'css',
      tech3: 'javaScript'
     },
    image: './images/backcard.png'
   },

   {
    id:'proj4',
    title: 'Uber Navigation',
    company: 'UBER',
    specialization: 'Lead Developer',
    year: 2018,
 
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: {
      tech1: 'html', 
      tech2: 'css',
      tech3: 'javaScript'
     },
    image: './images/last.png'}
];
let count =1;
projects.forEach((project) => {
  const newdiv = document.createElement('div');
  newdiv.innerHTML = `
  <div class="cards">
    <div class="image">
        <img src="${project.image}" alt="image">
    </div>
    <div class="desc">
        <h2 class="title">${project.title}</h2>
        <ul class="icons fav">
            <li class="cano">${project.company}</li>
            <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${project.specialization}</li>
            <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${project.year}</li>
        </ul>
        <p class="desctext">
        ${project.description}
        </p>
        <ul class="tech icons">
            <li class="techitems">${project.technologies.tech1}</li>
            <li class="techitems">${project.technologies.tech2}</li>
            <li class="techitems">${project.technologies.tech3}</li>
        </ul>
        <button type="button" id="${project.id}" class="see">See Project</button>
    </div>
  </div>`;
  works.append(newdiv);
});

const image = document.querySelectorAll('.image');
image.forEach((im) =>{
  if (count%2 === 0){
    im.classList.add('two');
  }
  count++;
});

const seeproject = document.querySelectorAll('.see');
const overlay = document.getElementById('overlay');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');

seeproject.forEach((p) => p.addEventListener('click', (p) => {
  let id = p.target.id;
  const pop = projects.find((p) => p.id === id);
  popup.innerHTML = `
  <div class="titles">
    <div class="tile">
      <h2 class="title">${pop.title}</h2>
      <button class="close">&times;</button>
    </div>
    <ul class="icons fav">
      <li class="cano">${pop.company}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${pop.specialization}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${pop.year}</li>
    </ul>
    </div>
    <img src="${pop.image}" alt="live">
    <div class="explain">
      <p class="desctext">
        ${pop.description}
      </p>
      <div class="smart">
          <ul class="tech icons">
            <li class="techitems">${pop.technologies.tech1}</li>
            <li class="techitems">${pop.technologies.tech2}</li>
            <li class="techitems">${pop.technologies.tech3}</li>
          </ul>
          <div class="btns">
            <button type="button" class="but">See live &nbsp; &nbsp;
              <img src="./images/live.png" alt="live">
            </button>
            <button type="button" class="but">See source &nbsp; &nbsp;
              <img src="./images/github.svg" alt="source">
            </button>
          </div>
      </div>
  </div>  `
  overlay.classList.toggle('active');
  popup.classList.toggle('active');
  over.classList.toggle('active')

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });
}));
