import pocketbartender from "../resources/images/pocketbartender.png";

import sudoku from "../resources/images/react-01.png";
import phonebook from "../resources/images/react-02.png";
import social from "../resources/images/react-03.png";

import quiz from "../resources/images/react-05.png";

export const projects = [
  {
    title: "Social Media App",
    description:
      "A social app designed to share your mood with others. A random meme is shared alongside your message!",
    skills: [
      "Login system",
      "User authentication",
      "MongoDB",
      "HTTP requests (CRUD)",
      "Bootstrap",
      "Mobile-first design",
      "Heroku",
      "React-router-DOM",
    ],
    links: {
      demo: "https://max-social.herokuapp.com/",
      github: "https://github.com/boilerplatemax/social",
    },
    image: social,
  },
  {
    title: "Pocket Bartender",
    description: "A fun cocktail recipe application designed with UX in mind!",
    skills: [
      "Favourite system",
      "Local storage",
      "Filter/search system",
      "Responsive UI",
      "Netlify",
      "Router",
      "React-animations",
    ],
    links: {
      demo: "https://stupendous-brigadeiros-d5e197.netlify.app/",
      github: "https://boilerplatemax.github.io/pocketbartender/",
    },
    image: pocketbartender,
  },

  {
    title: "SUDOKU JS",
    description:
      "A responsive sudoku app that fetches board data from an API. This app was an introduction into typescript and create-react-app alternatives (vite)",
    skills: [
      "TypeScript",
      "React Hooks (useState,useEffect and useRef)",
      "API Calls",
      "AXIOS",
      "Vite.js",
      "Bootstrap",
    ],
    links: {
      demo: "https://sudoku-reactjs.netlify.app/",
      github: "https://github.com/boilerplatemax/Sudoku-React",
    },
    image: sudoku,
  },
  {
    title: "Cooperative Phonebook",
    description:
      "A backend-focused application for storing phone numbers of your friends!",
    skills: [
      "Backend",
      "HTTP requests(CRUD)",
      "MongoDB",
      "esLint",
      "User-focused design",
    ],
    links: {
      demo: "https://boilerplatemax-phonebook-part3.herokuapp.com/",
      github:
        "https://github.com/boilerplatemax/fullstack/tree/main/part3/phonebookbackend",
    },
    image: phonebook,
  },
  {
    title: "Survival Quiz",
    description:
      "Inspired by the quiz modules you get at any workplace but with a fun twist. Complete all 15 questions to see how well you scored!",
    skills: ["Bootstrap", "CSS", "Responsive-design", "React Forms", "Hooks"],
    links: {
      demo: "https://lively-flan-fff4f1.netlify.app/",
      github: "https://github.com/boilerplatemax/quiz",
    },
    image: quiz,
  },
];
