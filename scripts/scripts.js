let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);


function startup() {
    colorPicker = document.querySelector("#color-picker");
    colorPicker.value = defaultColor;
    
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
  }


  function updateAll(event) {
    document.querySelectorAll(".custom").forEach((el) => {
    
      el.style.accentColor = event.target.value;
    });
  }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  
  