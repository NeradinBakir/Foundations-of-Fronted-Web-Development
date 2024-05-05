function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
  }
  
  document.getElementById("myLink").click();

function zoomIn(element) {
  element.style.transform = "scale(1.1)";
}

function zoomOut(element) {
  element.style.transform = "scale(1)";
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Adress:") {
    x.innerHTML = "Restaurant adress:Garovci bb , Bakery adress: Hadželi 80, Hadžići";
  } else {
    x.innerHTML = "Restaurant adress:Garovci bb , Bakery adress: Hadželi 80, Hadžići";
  }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


  
  