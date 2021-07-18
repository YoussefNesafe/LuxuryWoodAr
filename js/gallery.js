//Selecting all required elements For Gallery
const filterBtn = document.querySelector(".items");
const filterCard = document.querySelectorAll(".card-item");

//Once window loaded
window.onload = () => {
  //when user clicked on filterBtn Li
  filterBtn.onclick = (selectedBtn) => {
    //if user click element has .item class
    if (selectedBtn.target.classList.contains("item")) {
      //remove the active class which is in the first element
      filterBtn.querySelector(".active").classList.remove("active");
      //add active class on the user selected element or item
      selectedBtn.target.classList.add("active");

      //getting data-name value of the user selected Btn and storing in a filtername variable
      let filterName = selectedBtn.target.getAttribute("data-name");

      //getting card data-name value
      filterCard.forEach((card) => {
        let filterCards = card.getAttribute("data-name");
        //if user selected item data-name value is equal to card data-name value
        //or user selected item data-name value is equal to all
        if (filterCards == filterName || filterName == "all") {
          card.classList.remove("hide");
          card.classList.add("show");
        } else {
          card.classList.add("hide");
          card.classList.remove("show");
        }
      });
    }
  };
  for (let i = 0; i < filterCard.length; i++) {
    //Adding onclick attribute in all avaibale card
    filterCard[i].setAttribute("onclick", "preview(this)");
  }
};

//Selecting all required elements For View Card
const previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  categoryName = previewBox.querySelector(".title p"),
  closeIcon = previewBox.querySelector(".icon"),
  description = previewBox.querySelector(".content .description"),
  overlay = document.querySelector(".overlay");

//Fullscreen preview image function
function preview(element) {
  //once user click on any card then remove the scroolbar of the body , so user cant scroll up or down
  document.querySelector("body").overflow = "hidden";

  //getting user clicked description
  let selectedDetalisCard = element.querySelector("p").textContent;

  //Passing the description in the card to the description in previewbox
  description.textContent = selectedDetalisCard;

  //Getting user clicked image source link and stor in a variable
  let selectPrevCardImg = element.querySelector("img").src;

  //Getting user Clicked data-name value
  let selectedImgCategory = element.getAttribute("data-name");

  //Passing the data-name value to category name variable
  categoryName.textContent = selectedImgCategory;

  //Passing The user clicked image source in the preview image source
  previewImg.src = selectPrevCardImg;

  //Show the preview Box
  previewBox.classList.add("show");

  //Show the light grey background
  overlay.classList.add("show");

  //If user click on the close Button
  closeIcon.onclick = () => {
    //Remove the preview Box
    previewBox.classList.remove("show");

    //Remove the light grey background
    overlay.classList.remove("show");

    //show the scroll bar of body
    document.querySelector("body").overflow = "scroll";
  };
}

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 2500,
    easing: "easeOutExpo",
    delay: 1000,
  });

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
