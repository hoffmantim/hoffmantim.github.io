/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    const navBar = document.getElementById("myTopnav");
    const title = document.getElementById("title-text");

    if (navBar.className === "topnav") {
      navBar.className += " responsive";
      title.className += " hidden"
    } else {
      navBar.className = "topnav";
      title.className = "title-text"
    }
  };