const toDoList = [
  {
    id: 1,
    FirstName: "Mamun",
    LastName: "Hasan",
    accOpen: "3-17",
    toDo: [
      {
        time: "3-5",
        category: "office job",
        priorities: "urgent",
        work: "i have to finish my job",
      },
      {
        time: "11-12",
        category: "creative job",
        priorities: "high",
        work: "I have to complete the final draft of the script for the movie",
      },
      {
        time: "2-4",
        category: "medical job",
        priorities: "medium",
        work: "I have to attend to patients in the emergency room",
      },
      {
        time: "10-11",
        category: "education",
        priorities: "low",
        work: "I need to prepare a lesson plan for tomorrow’s class",
      },
      {
        time: "1-3",
        category: "marketing job",
        priorities: "urgent",
        work: "I have to finalize the advertising campaign for the new product launch",
      },
      {
        time: "9-12",
        category: "construction work",
        priorities: "high",
        work: "I need to complete the building foundation",
      },
    ],
  },
  {
    id: 2,
    FirstName: "John",
    LastName: "Doe",
    accOpen: "3-17",
    toDo: [
      {
        time: "9-11",
        category: "office job",
        priorities: "medium",
        work: "I have to attend a meeting with the team",
      },
      {
        time: "2-4",
        category: "creative job",
        priorities: "high",
        work: "I have to complete the final draft of the script for the play",
      },
      {
        time: "1-3",
        category: "medical job",
        priorities: "urgent",
        work: "I have to attend to patients in the emergency room",
      },
      {
        time: "10-11",
        category: "education",
        priorities: "low",
        work: "I need to prepare a lesson plan for tomorrow’s class",
      },
      {
        time: "3-5",
        category: "marketing job",
        priorities: "medium",
        work: "I have to attend a meeting with the marketing team",
      },
      {
        time: "9-12",
        category: "construction work",
        priorities: "high",
        work: "I need to complete the roofing work",
      },
    ],
  },
];
// console.log(toDoList);

// variable
const container = document.querySelector(".slider");
const sliders = document.querySelectorAll(".slide");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const navMenuIcon = document.querySelector(".show--nav--menu");
const navMenuContainer = document.querySelector(".navbar--container");
const navContainer = document.querySelector(".nav-container");
const navClose = document.querySelector(".close");

//nav bar making responsive
const responsiveNavFuntion = function () {
  navMenuIcon.addEventListener("click", function (e) {
    console.log("44");
    navMenuContainer.classList.remove("hidden");
    navContainer.classList.add("min-h-screen");
    navContainer.classList.remove("grid");
    e.target.classList.add("hidden");
  });
  navClose.addEventListener("click", function (e) {
    console.log("44");
    navMenuIcon.classList.remove("hidden");
    navMenuContainer.classList.add("hidden");
    navContainer.classList.remove("min-h-screen");
    navContainer.classList.add("grid");
  });
};
responsiveNavFuntion();

//slide function
const heroSlider = function () {
  let currentSlide = 0;
  let maxSlide = sliders.length - 1;

  sliders.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
  });

  right.addEventListener("click", function () {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    sliders.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  });

  left.addEventListener("click", function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }
    sliders.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  });

  //

  const moveSlider = function () {
    {
      if (currentSlide === maxSlide) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      sliders.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
      });
    }
  };
  // setInterval(moveSlider, 3000);
};
heroSlider();
