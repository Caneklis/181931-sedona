var link = document.querySelector(".booking-button");
var popup = document.querySelector(".booking-form");
link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("booking-form-show");
});