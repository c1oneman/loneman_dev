const portfolioData = [
  {
    name: "loneman.dev",
    id: 1,
    url:'/',
    description: "My personal website for my development.",
    technologies: [
      'JS',
      'React',
      'UI/UX',
      'Gitflow',
      'Rest API'
    ],
    img: "/images/lonemandev.png",
  },
  {
    name: "Sailboard",
    url:'#',
    id: 2,
    description: "iOS Sales Tracking App for local business.",
    technologies: [
      'Swift',
      'UIKit',
      'Firebase',
      'Rest API'
    ],
    img:"/images/sailboard.jpg",
  },
  {
    name: "Weather Against Humans",
    url:'#',
    id: 2,
    description: "iOS Weather App",
    technologies: [
      'Swift',
      'UIKit',
      'Firebase',
      'Rest API'
    ],
    img:"/images/weather.png",
  }
];
const skills = [
  {
    name: "React",
    color: '#4af9ff',
    url:'/',
    icon: 'fab fa-react',
    time: '> 1y',
  },
  {
    name: "JavaScript",
    color: '#dbce16',
    url:'/',
    icon: 'fab fa-js',
    time: '> 1y',
  },
  {
    name: "Full Stack",
    color: '#000',
    url:'/',
    icon: 'fas fa-code',
    time: '> 1y',
  },
  {
    name: "HTML",
    color: '#ff5729',
    url:'/',
    icon: 'fab fa-html5 ',
    time: '3y',
  },
  {
    name: "Node.js",
    color: '#359c59',
    url:'/',
    icon: 'fab fa-node-js ',
    time: '< 1y',
  },
  {
    name: "Vue.js",
    color: "#3d3f85",
    url:'/',
    icon: 'fab fa-vuejs ',
    time: '< 1y',
  },
  {
    name: "Testing",
    color: "#3d3f85",
    url:'/',
    icon: 'fas fa-bug',
    time: '< 1y',
  }
];

module.exports = {
  portfolioData, skills
};
