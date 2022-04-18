dropDown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = (event) => {
  if (!event.target.matches('.menu__item-link')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


burger = () => {
  document.getElementById ("burger").classList.toggle("active");
  document.getElementById ("menu").classList.toggle("menu--open");
}

// window.addEventListener ('resize', function () {
//   if (window.innerWidth < 1100) {
//     document.getElementById ("header").classList.add("header--small");
//     document.getElementById ("submenu").classList.add("submenu--small");
//   } 
//   else if (window.innerWidth > 1100) {
//       document.getElementById ("header").classList.remove ("header--small");
//       document.getElementById ("submenu").classList.remove("submenu--small");
//   }
// })



windowSize = () => {
  if ($(window).width() < 1100) {
    document.getElementById ("header").classList.add("header--small");
    document.getElementById ("submenu").classList.add("submenu--small")
  } else {
    document.getElementById ("header").classList.remove ("header--small");
    document.getElementById ("submenu").classList.remove("submenu--small");
  }
  }
  $(window).on('load resize',windowSize);
