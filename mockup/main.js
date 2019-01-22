// comment
const offline = document.querySelectorAll(".offline");
offline.forEach(element => {
  element.parentNode.classList.add("contact--offline");
});

const navLinks = document.querySelectorAll(".profile__nav__link");
const avatar = document.getElementById("profileAvatar");

function removeActiveLinks() {
  avatar.classList.remove("profile__active");
  navLinks.forEach(link2 =>
    link2.parentNode.classList.remove("profile__nav__container--active")
  );
}

navLinks.forEach(link => {
  link.addEventListener("click", ev => {
    ev.preventDefault();
    removeActiveLinks();
    link.parentNode.classList.add("profile__nav__container--active");
  });
});

avatar.addEventListener("click", ev => {
  ev.preventDefault();
  removeActiveLinks();
  avatar.classList.add("profile__active");
});
