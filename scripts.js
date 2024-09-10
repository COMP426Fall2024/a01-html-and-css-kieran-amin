function redirectToPage() {
  var select = document.getElementById("pages");
  var selectedValue = select.options[select.selectedIndex].value;
  if (selectedValue) {
    window.location.href = selectedValue.toLowerCase() + ".html";
  }
}

function loadDropdown() {
  fetch("dropdown.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("dropdown-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading dropdown: ", error);
    });
}

document.addEventListener("DOMContentLoaded", loadDropdown);
