let themeOn = false;
const cambiarTema = () => {
  if (!themeOn) {
    document.querySelector(":root").style.setProperty("--primario2", "#444");
    document.querySelector(":root").style.setProperty("--colorA", "#fdbb2e");
    document.querySelector(":root").style.setProperty("--colorAA", "#eee");
    document.querySelector(":root").style.setProperty("--colorAAA", "#ddd");
    document.querySelector(":root").style.setProperty("--colorAAAA", "#aaa");
    document.querySelector(":root").style.setProperty("--colorB", "#333");
    document.querySelector(":root").style.setProperty("--colorBB", "#555");
    document.querySelector(":root").style.setProperty("--colorBBB", "#666");

    themeOn = true;
  } else {
    document.querySelector(":root").style.setProperty("--primario2", "#fdbb2e");
    document.querySelector(":root").style.setProperty("--colorA", "#333");
    document.querySelector(":root").style.setProperty("--colorAA", "#555");
    document.querySelector(":root").style.setProperty("--colorAAA", "#666");
    document.querySelector(":root").style.setProperty("--colorAAAA", "#999");
    document.querySelector(":root").style.setProperty("--colorB", "#fff");
    document.querySelector(":root").style.setProperty("--colorBB", "#eee");
    document.querySelector(":root").style.setProperty("--colorBBB", "#ddd");
    themeOn = false;
  }
  theme.classList.toggle("fa-sun");
  theme.classList.toggle("fa-moon");
};

const theme = document.querySelector(".theme");
theme.addEventListener("click", cambiarTema);

const hambur = document.querySelector(".fa-bars");
const navUl2 = document.querySelector(".navUl2");

hambur.addEventListener("click", () => {
  navUl2.classList.toggle("displayOn");
});

window.addEventListener("resize", () => {
  navUl2.classList.remove("displayOn");
});
