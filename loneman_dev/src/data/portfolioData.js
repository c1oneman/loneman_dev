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
      'Git'
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

module.exports = {
  portfolioData,
};
