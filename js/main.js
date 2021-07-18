let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.pageYOffset > 500) {
    navbar.classList.add("bg-black");
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("bg-black");
    navbar.classList.remove("fixed-top");
  }
};
