var offer = document.getElementById("offer");

if (offer) {
    offer.addEventListener("click", function () {
        offer.style.display = "none";
    });
}

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
    sidenav.style.left = "0";
});

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%";
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
//search functionality
var productcontainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {

    var enteredvalue = event.target.value.toUpperCase();

    for (let count = 0; count < productlist.length; count++) {

        var productname = productlist[count]
            .querySelector("h1")
            .textContent;

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
//choices in collections
const products = document.querySelectorAll("#product-container > div");

const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(box => {
    box.addEventListener("change", filterProducts);
});

function filterProducts() {

    const selectedOccasions = [];
    const selectedColors = [];

    document.querySelectorAll("input[name='occasion']:checked").forEach(item => {
        selectedOccasions.push(item.value);
    });

    document.querySelectorAll("input[name='Colors']:checked").forEach(item => {
        selectedColors.push(item.value);
    });

    products.forEach(product => {

        const occasion = product.dataset.occasion;
        const color = product.dataset.color;

        const occasionMatch =
            selectedOccasions.length === 0 ||
            selectedOccasions.includes(occasion);

        const colorMatch =
            selectedColors.length === 0 ||
            selectedColors.includes(color);

        if (occasionMatch && colorMatch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}