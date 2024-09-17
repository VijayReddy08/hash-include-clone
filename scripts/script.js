// Updating courses in popular courses
let navLinks = document.querySelectorAll(".popular-courses-navbar button");

function popCoursesHandler(event) {
  Array.from(event.target.parentElement.children).forEach((element) => {
    if (element === event.target) {
      element.classList.add("btn-primary");
      element.classList.remove("btn-outline-light");
    } else {
      element.classList.remove("btn-primary");
      element.classList.add("btn-outline-light");
    }
  });

  if (
    event.target.innerText === "Front-end development" ||
    event.target.value === "front-end"
  ) {
    document.querySelectorAll(".course-details-card").forEach((e) => {
      if (e.classList.contains("fe")) {
        e.classList.remove("d-none");
        e.classList.add("d-block");
      } else {
        e.classList.add("d-none");
        e.classList.remove("d-block");
      }
    });
  } else if (
    event.target.innerText === "Fullstack development" ||
    event.target.value === "full-stack"
  ) {
    document.querySelectorAll(".course-details-card").forEach((e) => {
      if (e.classList.contains("full")) {
        e.classList.remove("d-none");
        e.classList.add("d-block");
      } else {
        e.classList.add("d-none");
        e.classList.remove("d-block");
      }
    });
  } else if (
    event.target.innerText === "Testing" ||
    event.target.value === "testing"
  ) {
    document.querySelectorAll(".course-details-card").forEach((e) => {
      if (e.classList.contains("test")) {
        e.classList.remove("d-none");
        e.classList.add("d-block");
      } else {
        e.classList.add("d-none");
        e.classList.remove("d-block");
      }
    });
  } else if (
    event.target.innerText === "UI/UX designing" ||
    event.target.value === "ui/ux"
  ) {
    document.querySelectorAll(".course-details-card").forEach((e) => {
      if (e.classList.contains("ui")) {
        e.classList.remove("d-none");
        e.classList.add("d-block");
      } else {
        e.classList.add("d-none");
        e.classList.remove("d-block");
      }
    });
  } else {
    document.querySelectorAll(".course-details-card").forEach((e) => {
      e.classList.remove("d-none");
      e.classList.add("d-block");
    });
  }
}

navLinks.forEach((element) => {
  element.addEventListener("click", (event) => popCoursesHandler(event));
});

document
  .querySelector(".popular-courses-dropdown")
  .addEventListener("change", (event) => popCoursesHandler(event));

// Updating Offer Timer

// Seconds
setInterval(() => {
  let sec = Number(document.querySelector(".seconds").innerText);
  if (sec === 1) {
    document.querySelector(".seconds").innerText = 60;
    // Minutes
    let min = Number(document.querySelector(".minutes").innerText);
    if (min === 0) {
      document.querySelector(".minutes").innerText = 59;
      // Hours
      let hour = Number(document.querySelector(".hours").innerText);
      if (hour === 0) {
        document.querySelector(".hours").innerText = 8;
      } else {
        document.querySelector(".hours").innerText = --hour;
      }
    } else {
      document.querySelector(".minutes").innerText = --min;
    }
  } else {
    document.querySelector(".seconds").innerText = --sec;
  }
}, 1000);
