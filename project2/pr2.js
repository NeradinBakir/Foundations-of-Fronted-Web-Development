function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}

function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageUrl;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function Fuunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Adress:") {
    x.innerHTML = "Restaurant adress: Garovci bb, Bakery adress: Hadželi 80, Hadžići";
  } else {
    x.innerHTML = "Adress:";
  }
}

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
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

function toggleText() {
  var additionalInfo = document.getElementById("additional-info");
  var btn = document.getElementById("load-more-btn");
  if (additionalInfo.style.display === "none") {
    additionalInfo.style.display = "block";
    btn.textContent = "Show Less";
  } else {
    additionalInfo.style.display = "none";
    btn.textContent = "Load More";
  }
}

//const themeSwitch = document.getElementById('theme-switch');

//themeSwitch.addEventListener('change', () => {
 // if (themeSwitch.checked) {
 //   document.body.classList.add('dark-theme');
  //  document.body.classList.remove('light-theme');
 // } else {
 //   document.body.classList.remove('dark-theme');
 //   document.body.classList.add('light-theme');
 // }
//});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

$(document).ready(function() {
  $('#saveChangesButton').click(function() {
    var reviewerName = $('#reviewerName').val();
    var reviewText = $('#reviewText').val();

    console.log('Reviewer Name:', reviewerName);
    console.log('Review Text:', reviewText);

    // Ovdje možete dodati logiku za slanje podataka na server ili daljnju obradu

   $('#exampleModal').modal('hide'); // Zatvori modal nakon što se podaci ispišu
  });

  $("#deleteButton").click(function () {
    console.clear();
  })

});
