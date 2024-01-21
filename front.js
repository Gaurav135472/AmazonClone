let dropdown = document.querySelector(".signInMenu");
let signInButton = document.querySelector(".login");

signInButton.addEventListener("click", dropdownFun);

function dropdownFun(event) {
  event.stopPropagation(); // Prevent the event from reaching the window click handler
  dropdown.classList.toggle("show");
}

window.addEventListener("click", function(event) {
  if (!event.target.matches('.login')) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});

// Handle touch events on the dropdown content
dropdown.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent the event from propagating to the window click handler
});

// Handle touch events on the document to close the dropdown
document.addEventListener("click", function(event) {
  if (!event.target.matches('.login') && !event.target.matches('.signInMenu')) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});
