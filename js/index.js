//images to load to create an infinite scroll
const imageData = [
  {
    id: "first",
    imageSrc: "../images/arctic-guesthouse-igloos-fEw9RsoDEq4-unsplash.jpg",
  },

  {
    id: "second",
    imageSrc: "../images/benigno-hoyuela-Z5PknsAvHkk-unsplash.jpg",
  },

  {
    id: "third",
    imageSrc: "../images/benjamin-massello-twX-cWl-8OM-unsplash.jpg",
  },

  {
    id: "fourth",
    imageSrc: "../images/chris-ainsworth-jUR9ZFNqL-w-unsplash.jpg",
  },

  { id: "fifth", imageSrc: "../images/siri-louis-Qxr_U0KpdpA-unsplash.jpg" },
  { id: "sixth", imageSrc: "../images/josh-rocklage-MM5-DtrFLn0-unsplash.jpg" },
];

//UI variables
let mainContainer = document.querySelector(".container");
let footerUI = document.querySelector(".loading");

//Random decision making function
function randomDecision(varaibleItem) {
  return Math.floor(Math.random() * varaibleItem);
}

function dynamicPostUpdate() {
  let contentHeight = mainContainer.offsetHeight;
  let verticalOffset = window.pageYOffset;
  let verticalDistance = verticalOffset + window.innerHeight;

  if (verticalDistance >= contentHeight) {
    footerUI.style.display = "block";
    setTimeout(function () {
      footerUI.style.display = "none";
      createMoreContents();
    }, 3000);
  } else {
    footerUI.style.display = "none";
  }
}

window.addEventListener("scroll", dynamicPostUpdate);

function createMoreContents() {
  let postsPerSeconds = randomDecision(5);

  for (let count = 0; count < postsPerSeconds; count++) {
    const generatedDIV = document.createElement("div");
    generatedDIV.id = imageData[randomDecision(imageData.length)].id;

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    imgContainer.innerHTML = `<img src="${
      imageData[randomDecision(imageData.length)].imageSrc
    }">`;

    generatedDIV.appendChild(imgContainer);
    mainContainer.appendChild(generatedDIV);
  }
}
