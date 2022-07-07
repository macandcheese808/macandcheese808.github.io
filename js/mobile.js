const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".mainoverlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("mainoverlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("mainoverlay--active");
});


