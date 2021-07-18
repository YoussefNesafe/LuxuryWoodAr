// just add thise in the html file
// requeried ( font-awesome library)
//     <span id="toTopButton">
//         <i class="fa fa-arrow-up"></i>
//     </span>

//     and add this in the css style

//     #toTopButton {
//         position: fixed;
//         bottom: 30px;
//         right: 30px;
//         color: #fff;
//         display: inline-block;
//         width: 40px;
//         height: 40px;
//         border-radius: 50%;
//         background-color: #006ba6;
//         z-index: 1000;
//         text-align: center;
//         line-height: 40px;
//         font-size: 20px;
//         cursor: pointer;
//         -webkit-transition: 0.5s;
//         transition: 0.5s;
//         -webkit-transform: scale(0);
//                 transform: scale(0);
//         -webkit-transition: 0.7s;
//         transition: 0.7s;
//     }
//     #toTopButton:hover {
//         background-color: #399dce;
//         color: #363636;
//     }

let backToTop = document.getElementById("toTopButton");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    //Show Back To Top button
    backToTop.style.transform = "scale(1)";
  } else {
    // Hide Back To Top button
    backToTop.style.transform = "scale(0)";
  }
}

backToTop.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
