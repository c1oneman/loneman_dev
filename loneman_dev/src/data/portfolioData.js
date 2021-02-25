const portfolioData = [
  {
    name: "loneman.dev",
    id: 1,
    url: "https://loneman.dev",
    description: "My personal website for my development.",
    technologies: ["JS", "React", "UI/UX", "Gitflow", "Rest API"],
    img: "/images/loneman_dev.png",
  },
  {
    name: "Sailboard",
    url: "https://apps.apple.com/us/app/sailboard/id1503958464",
    id: 2,
    description: "Sales tracking app for businesses.",
    technologies: ["Swift", "UIKit", "Firebase", "Rest API"],
    img: "/images/sailboard.jpg",
  },
  {
    name: "Weather Against Humans",
    url:
      "https://apps.apple.com/us/app/weather-against-humans/id1448120627#:~:text=Weather%20Against%20Humans%20is%20a,the%20weather%20forecast%20for%20today.&text=Requires%20one%2Dtime%20local%20location%20access%20to%20retrieve%20weather.",
    id: 3,
    description: "An honest iOS weather app.",
    technologies: ["Swift", "UIKit", "Firebase", "Rest API"],
    img: "/images/weather.png",
  },
  {
    name: "itsAlmo.st Clone",
    url: "https://almostcl.one",
    id: 4,
    description:
      "Clone of the popular universal timer app, with short sharable links.",
    technologies: [
      "MongoDB",
      "React",
      "ContextAPI",
      "SCSS",
      "Lambda Functions",
    ],
    img: "/images/almostclone.jpg",
  },
];
const skills = [
  {
    name: "React",
    color: "#4af9ff",
    url: "/",
    icon: "fab fa-react",
    time: "> 1y",
  },
  {
    name: "JavaScript",
    color: "#dbce16",
    url: "/",
    icon: "fab fa-js",
    time: "> 1y",
  },
  {
    name: "Full Stack",
    color: "#000",
    url: "/",
    icon: "fas fa-code",
    time: "> 1y",
  },
  {
    name: "HTML",
    color: "#ff5729",
    url: "/",
    icon: "fab fa-html5 ",
    time: "3y",
  },
  {
    name: "Node.js",
    color: "#359c59",
    url: "/",
    icon: "fab fa-node-js ",
    time: "< 1y",
  },
  {
    name: "Vue.js",
    color: "#3d3f85",
    url: "/",
    icon: "fab fa-vuejs ",
    time: "< 1y",
  },
  {
    name: "Testing",
    color: "#3d3f85",
    url: "/",
    icon: "fas fa-bug",
    time: "< 1y",
  },
];

module.exports = {
  portfolioData,
  skills,
};
