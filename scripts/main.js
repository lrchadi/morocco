import { CITIES } from "./cities.js";
import { 
  menuIcon, 
  closeMenuIcon, 
  navBar, 
  header, 
  links, 
  citiesContainer,
  searchInput,
  msg
} from "./elements.js";

menuIcon.addEventListener("click", () => {
  navBar.classList.add("show-menu");
  document.body.style.overflow = "hidden"
  menuIcon.style.display = "none";
})

closeMenuIcon.addEventListener("click", () => {
  navBar.classList.remove("show-menu");
  document.body.style.overflow = "auto"
  menuIcon.style.display = "block";
})

window.onresize = () => {
  menuIcon.style.display =  window.innerWidth <= 550 ?  "block" : "none";
}

window.addEventListener("scroll", () => {
  if (window.scrollY < 400) {
    header.classList.remove("update-header");
    if (window.innerWidth > 550) {
      links.forEach(link => {
        link.classList.remove("update-links-color")
      })
    }
    menuIcon.classList.remove("update-icons")
    return
  }
  header.classList.add("update-header");
  if (window.innerWidth > 550) {
    links.forEach(link => {
      link.classList.add("update-links-color")
    })
  }
  menuIcon.classList.add("update-icons")
})

// =====================================
// FILE THE CITIES IN cities.html PAGE:

CITIES.map(citie => {
  citiesContainer.innerHTML += `
    <a href="./villes/${citie.citiePage}.html">
      <div class="citie-box">
        <img src=${citie.citieIMage} alt="rabat" class="citie-image">
        <p class="citie-name">${citie.citiName}</p>
      </div>
    </a>
  `
})

searchInput.addEventListener("input", (e) => {
  msg.style.display = "none"
  citiesContainer.innerHTML = "";

  const searchedCities = CITIES.filter(citie => citie.citiName.toLowerCase().includes(e.target.value.toLowerCase()))

  if (searchedCities.length === 0) {
    return msg.style.display = "block"
  }

  searchedCities.map(citie => {
    citiesContainer.innerHTML += `
      <a href="./villes/${citie.citiePage}.html">
        <div class="citie-box">
          <img src=${citie.citieIMage} alt=${citie.citiName} class="citie-image">
          <p class="citie-name">${citie.citiName}</p>
        </div>
      </a>
    `
  })
})

