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
  document.getElementById ("burger").classList.toggle("shadow");
}