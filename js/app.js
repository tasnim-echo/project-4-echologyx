function saveState() {
  const state = {
    view: currentView,
    stack: currentStack,
    index,
    skills,
  };

  localStorage.setItem("echologyx_state", JSON.stringify(state));
}

function loadState() {
  const data = localStorage.getItem("echologyx_state");
  if (!data) return;

  const state = JSON.parse(data);

  currentView = state.view;
  currentStack = state.stack;
  index = state.index;

  if (currentStack && skillsData[currentStack]) {
    skills = skillsData[currentStack];
  }

  if (state.skills?.data) {
    state.skills.data.forEach((saved, i) => {
      if (skills.data?.[i]) skills.data[i].answer = saved.answer;
    });
  }

  const viewMap = {
    home: "home-view",
    skill: currentStack,
    end: "endpage",
  };

  document.querySelector(".main-container").dataset.main =
    viewMap[currentView] ?? "home-view";

  const onRestoreMap = {
    skill: loadSkill,
    end: showEndPage,
  };

  onRestoreMap[currentView]?.();
}

// DATA
const skillsData = {
  frontend: {
    data: [
      {
        logo: "/assets/frontend/1.png",
        title: "HTML5",
        desc: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
        question: "Do you have knowledge about HTML5?",
        answer: null,
      },
      {
        logo: "/assets/frontend/2.png",
        title: "CSS3",
        desc: "CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts",
        question: "Do you have knowledge about CSS3?",
        answer: null,
      },
      {
        logo: "/assets/frontend/3.png",
        title: "Bootstrap",
        desc: "Bootstrap utilizes Sass for a modular and customizable architecture. ",
        question: "Do you have knowledge about Bootstrap?",
        answer: null,
      },
      {
        logo: "/assets/frontend/4.png",
        title: "Javascript       ",
        desc: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. ",
        question: "Do you have knowledge about javascript?",
        answer: null,
      },
      {
        logo: "/assets/frontend/5.png",
        title: "jQuery",
        desc: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation",
        question: "Do you have knowledge about jQuery?",
        answer: null,
      },
      {
        logo: "/assets/frontend/6.png",
        title: "ES6",
        desc: "JavaScript ES6 is the newer version of JavaScript that was introduced in 2015. ",
        question: "Do you have knowledge about ES6?",
        answer: null,
      },
      {
        logo: "/assets/frontend/7.png",
        title: "npm Script",
        desc: "An npm script is a convenient way to bundle common shell commands for your project.",
        question: "Do you have knowledge about npm script?",
        answer: null,
      },
      {
        logo: "/assets/frontend/8.png",
        title: "TypeScript",
        desc: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. k",
        question: "Do you have knowledge about Typescript?",
        answer: null,
      },
      {
        logo: "/assets/frontend/9.png",
        title: "React.js",
        desc: "React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com.",
        question: "Do you have knowledge about React.js?",
        answer: null,
      },
      {
        logo: "/assets/frontend/10.png",
        title: "Angular.js",
        desc: "AngularJS extends HTML with new attributes. AngularJS is perfect for Single Page Applications (SPAs).",
        question: "Do you have knowledge about Angular.js?",
        answer: null,
      },
      {
        logo: "/assets/frontend/11.png",
        title: "Vue.js",
        desc: "Vue.js is an open-source front end JavaScript framework for building user interfaces and single-page applications.",
        question: "Do you have knowledge about Vue.js?",
        answer: null,
      },
    ],
    progressLabel: "frontend development",
    endSkillTitle: "frontend development skill",
  },
  backend: {
    data: [
      {
        logo: "/assets/backend/1.png",
        title: "PHP",
        desc: "PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. ",
        question: "Do you have knowledge about php?",
      },
      {
        logo: "/assets/backend/2.png",
        title: "Laravel",
        desc: "Laravel is a PHP web application framework with expressive, elegant syntax. ",
        question: "Do you have knowledge about Laravel?",
        answer: null,
      },
      {
        logo: "/assets/backend/3.png",
        title: "REST APIs",
        desc: "JavaScript ES6 is the newer version of JavaScript that was introduced in 2015. ",
        question: "Do you have knowledge about REST APIs",
        answer: null,
      },
      {
        logo: "/assets/backend/4.png",
        title: "SQL database",
        desc: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system",
        question: "Do you have knowledge about sql database?",
        answer: null,
      },
      {
        logo: "/assets/backend/5.png",
        title: "C#",
        desc: "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, functional, generic, object-oriented.",
        question: "Do you have knowledge about C#?",
        answer: null,
      },
      {
        logo: "/assets/backend/6.png",
        title: "Ruby on rails",
        desc: "Ruby on Rails is a server-side web application, model–view–controller framework, for a database, a web service.",
        question: "Do you have knowledge about ruby on rails?",
        answer: null,
      },
      {
        logo: "/assets/backend/7.png",
        title: "Node.js",
        desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine.",
        question: "Do you have knowledge about Node.js?",
        answer: null,
      },
      {
        logo: "/assets/backend/8.png",
        title: "Python",
        desc: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
        question: "Do you have knowledge about Python?",
        answer: null,
      },
    ],
    progressLabel: "Backend development",
    endSkillTitle: "Backend development skill",
  },
  fullstack: {
    data: [
      {
        logo: "/assets/frontend/1.png",
        title: "HTML5",
        desc: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
        question: "Do you have knowledge about HTML5?",
        answer: null,
      },
      {
        logo: "/assets/frontend/3.png",
        title: "Bootstrap",
        desc: "Bootstrap utilizes Sass for a modular and customizable architecture. ",
        question: "Do you have knowledge about Bootstrap?",
        answer: null,
      },
      {
        logo: "/assets/frontend/4.png",
        title: "Javascript       ",
        desc: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. ",
        question: "Do you have knowledge about javascript?",
        answer: null,
      },
      {
        logo: "/assets/frontend/7.png",
        title: "npm Script",
        desc: "An npm script is a convenient way to bundle common shell commands for your project.",
        question: "Do you have knowledge about npm script?",
        answer: null,
      },
      {
        logo: "/assets/frontend/9.png",
        title: "React.js",
        desc: "React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com.",
        question: "Do you have knowledge about React.js?",
        answer: null,
      },
      {
        logo: "/assets/frontend/11.png",
        title: "Vue.js",
        desc: "Vue.js is an open-source front end JavaScript framework for building user interfaces and single-page applications.",
        question: "Do you have knowledge about Vue.js?",
        answer: null,
      },
      {
        logo: "/assets/backend/1.png",
        title: "PHP",
        desc: "PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. ",
        question: "Do you have knowledge about php?",
        answer: null,
      },
      {
        logo: "/assets/backend/3.png",
        title: "REST APIs",
        desc: "JavaScript ES6 is the newer version of JavaScript that was introduced in 2015. ",
        question: "Do you have knowledge about REST APIs",
        answer: null,
      },
      {
        logo: "/assets/backend/5.png",
        title: "C#",
        desc: "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, functional, generic, object-oriented.",
        question: "Do you have knowledge about C#?",
        answer: null,
      },
      {
        logo: "/assets/backend/6.png",
        title: "Ruby on rails",
        desc: "Ruby on Rails is a server-side web application, model–view–controller framework, for a database, a web service.",
        question: "Do you have knowledge about ruby on rails?",
        answer: null,
      },
      {
        logo: "/assets/backend/7.png",
        title: "Node.js",
        desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine.",
        question: "Do you have knowledge about Node.js?",
        answer: null,
      },
      {
        logo: "/assets/backend/8.png",
        title: "Python",
        desc: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
        question: "Do you have knowledge about Python?",
        answer: null,
      },
    ],
    progressLabel: "Fullstack development",
    endSkillTitle: "Fullstack development skill",
  },
};

// console.log(frontend[0].logo);

const homeView = document.getElementById("homeView");
const skillView = document.getElementById("skillView");
const endPage = document.getElementById("endpage");

// ELEMENTS
const logo = document.getElementById("skill-logo");

console.log(logo);
const title = document.getElementById("skillTitle");
const desc = document.getElementById("skillDesc");
const question = document.getElementById("skillQuestion");

const progressLabel = document.getElementById("progressLabel");
const progress = document.querySelector(".progress-fill");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const endPageSkillLists = document.getElementById("endPage-skillLists");
const endPageSkillTitle = document.getElementById("endPage-skillTitle");

const backToHome = document.getElementById("back-to-home");

// stack buttons
const stackButtons = document.querySelectorAll(
  "#homeView .left-content .buttons button",
);

let skills = [];
let currentView = "home";
let currentStack = null;
let index = 0;

// function setStack(stack) {
//   currentStack = stack;

//   if (stack === "frontend") {
//     skills = frontend;

//     progressLabel.textContent = "Front-end Development";
//     endPageSkillTitle.textContent = "Front end Development skill";
//   }
//   if (stack === "backend") {
//     skills = backend;

//     progressLabel.textContent = "Back-end Development";
//     endPageSkillTitle.textContent = "Back end Development skill";
//   }
//   if (stack === "fullstack") {
//     skills = fullstack;

//     progressLabel.textContent = "Full-Stack Development Development";
//     endPageSkillTitle.textContent = "Full   Stack DevelopmentDevelopment skill";
//   }
// }

stackButtons.forEach((stackBtn) => {
  //   console.log(stackBtn);

  stackBtn.addEventListener("click", function () {
    const btns = this.dataset.skill;
    const mainContainer = document.querySelector(".main-container");
    mainContainer.dataset.main = btns;
    console.log(mainContainer.dataset.main);

    skills = skillsData[btns];
    currentStack = btns;
    currentView = "skill";
    index = 0;

    // if (stackBtn.textContent === "Front-end development") {
    //   setStack("frontend");
    // }

    // if (stackBtn.textContent === "Back-end development") {
    //   setStack("backend");
    // }

    // if (stackBtn.textContent === "Full stack development") {
    //   setStack("fullstack");
    // }

    // currentView = "skill";

    // homeView.style.display = "none";
    // skillView.style.display = "block";
    // endPage.style.display = "none";

    saveState();
    loadSkill();
  });
});

const loadSkill = () => {
  const skill = skills.data[index];
  // console.log(skill);

  logo.src = skill.logo;
  logo.alt = skill.title;
  title.textContent = skill.title;
  desc.textContent = skill.desc;
  question.textContent = skill.question;
  progressLabel.textContent = skills.progressLabel;

  const percent = ((index + 1) / skills.data.length) * 100;
  progress.style.width = percent + "%";
};

function showEndPage() {
  endPageSkillTitle.textContent = skills.endSkillTitle;
  endPageSkillLists.innerHTML = "";
  skills.data.forEach((skill) => {
    const div = document.createElement("div");
    div.classList.add("skill-row");

    const nameOfSkill = document.createElement("span");
    nameOfSkill.textContent = skill.title;

    const icon = document.createElement("img");
    icon.classList.add("result-icon");

    if (skill.answer === "yes") {
      icon.src = "/assets/tic.png";
    } else {
      icon.src = "/assets/cross.png";
    }

    div.append(icon, nameOfSkill);
    endPageSkillLists.append(div);
  });
}

function next() {
  if (index < skills.data.length - 1) {
    index++;
    saveState();
    loadSkill();
  } else {
    currentView = "end";

    document.querySelector(".main-container").dataset.main = "endpage";

    saveState();
    showEndPage();
  }
}

backToHome.addEventListener("click", function () {
  localStorage.removeItem("echologyx_state");

  currentView = "home";
  currentStack = null;
  skills = [];
  index = 0;

  document.querySelector(".main-container").dataset.main = "home-view";
});

function handleAnswer(answer) {
  skills.data[index].answer = answer;
  saveState();
  console.log(skills.data[index].answer);

  next();
}

yesBtn.addEventListener("click", function () {
  handleAnswer("yes");
});
noBtn.addEventListener("click", function () {
  handleAnswer("no");
});
loadState();
