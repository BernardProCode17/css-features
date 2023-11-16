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
  
  