"use strict";
console.log("Hello world!");

const myName = "Author- The Official Josh";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });
// hide preloader on page load
// const preloader = document.querySelector(".preloader");
// window.addEventListener("load", () => {
//     preloader.classList.add("remove");
// });

const header = document.querySelector(".header"),
    navBtn = document.querySelector(".nav-toggler"),
    nav = document.querySelector("#nav-list"),
    navItems = document.querySelectorAll(".nav-item");
///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // To fix external links, move into the two if blocks
        // e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#") e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) e.preventDefault(); {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav__link"))
            headerEl.classList.toggle("nav-open");
    });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    }, {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);

////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// back to top
const topBtn = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

//////////////////////////////////////////
////// Dark Mode
const toggleBtn = document.querySelector(".dark-mode"); //set the dark mode button to a variable
const articlesContainer = document.querySelector("html");

let logoImage = document.getElementById("logo");
let iconImage = document.getElementById("icon");
let logosImage = document.getElementById("logos");
toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    let initialMode = localStorage.getItem("colorMode");
    if (initialMode && initialMode === "dark") {
        localStorage.setItem("colorMode", "light");
        logoImage.setAttribute("src", "images/logo.png");
        logosImage.setAttribute("src", "images/logo.png");
        iconImage.setAttribute("class", "ph-moon-stars-fill");
    } else {
        localStorage.setItem("colorMode", "dark");
        logoImage.setAttribute("src", "images/logo-black.png");
        logosImage.setAttribute("src", "images/logo-black.png");
        iconImage.setAttribute("class", "ph-sun-fill");
    }
});
///////////////////////////////
// use  default theme

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("colorMode", "dark");
    logoImage.setAttribute("src", "images/logo-black.png");
    iconImage.setAttribute("class", "ph-sun-fill");
    logosImage.setAttribute("src", "images/logo-black.png");
}
// toggleBtn.addEventListener("toggle", () => {
//     document.documentElement.classList.toggle("light");
// });
// } else {
//     document.body.classList.remove("dark");
// }

// Select the button
// const toggleBtn = document.querySelector(".dark-mode");
// // Check for dark mode preference at the OS level
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// // Get the user's theme preference from local storage, if it's available
// const currentTheme = localStorage.getItem("theme");
// // If the user's preference in localStorage is dark...
// if (currentTheme == "dark") {
//     // ...let's toggle the .dark-theme class on the body
//     document.documentElement.classList.toggle("dark");
//     // Otherwise, if the user's preference in localStorage is light...
// } else if (currentTheme == "light") {
//     // ...let's toggle the .light-theme class on the body
//     document.documentElement.classList.toggle("light");
// }

// // Listen for a click on the button
// toggleBtn.addEventListener("click", function() {
//     // If the user's OS setting is dark and matches our .dark class...
//     if (prefersDarkScheme.matches) {
//         // ...then toggle the light mode class
//         document.documentElement.classList.toggle("dark");
//         // ...but use .dark if the .light class is already on the body,
//         var theme = document.documentElement.classList.contains("light") ?
//             "light" :
//             "dark";
//     } else {
//         // Otherwise, let's do the same thing, but for .dark
//         document.documentElement.classList.toggle("dark");
//         var theme = document.documentElement.classList.contains("dark") ?
//             "dark" :
//             "light";
//     }
//     // Finally, let's save the current preference to localStorage to keep using it
//     localStorage.setItem("theme", theme);
// });

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 4.8rem;
    }

    .no-flexbox-gap .list-item:not(:last-child) {
      margin-bottom: 1.6rem;
    }

    .no-flexbox-gap .list-icon:not(:last-child) {
      margin-right: 1.6rem;
    }

    .no-flexbox-gap .delivered-faces {
      margin-right: 1.6rem;
    }

    .no-flexbox-gap .meal-attribute:not(:last-child) {
      margin-bottom: 2rem;
    }

    .no-flexbox-gap .meal-icon {
      margin-right: 1.6rem;
    }

    .no-flexbox-gap .footer-row div:not(:last-child) {
      margin-right: 6.4rem;
    }

    .no-flexbox-gap .social-links li:not(:last-child) {
      margin-right: 2.4rem;
    }

    .no-flexbox-gap .footer-nav li:not(:last-child) {
      margin-bottom: 2.4rem;
    }

    @media (max-width: 75em) {
      .no-flexbox-gap .main-nav-list li:not(:last-child) {
        margin-right: 3.2rem;
      }
    }

    @media (max-width: 59em) {
      .no-flexbox-gap .main-nav-list li:not(:last-child) {
        margin-right: 0;
        margin-bottom: 4.8rem;
      }
    }
    */