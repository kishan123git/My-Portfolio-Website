const buttons = document.getElementById("butttton");
const dropdown_menu = document.querySelector('.dropdown-menu');

document.getElementById("butttton").addEventListener("click", function () {
    if (dropdown_menu.classList.contains("open")) {
        console.log("Class 'open' found. Removing...");
        dropdown_menu.classList.remove("open");
      } else {
        console.log("Class 'open' NOT found. Running else block...");
        dropdown_menu.classList.add("open");
      }
  });

