window.onload=function(){    

  const sideNav = document.querySelector(".sideNav")
  const overlay = document.querySelector(".overlay")
  const ham = document.querySelector(".ham")
  const close_icon = document.querySelector(".close_icon")
  const menuItems = document.querySelectorAll(".menuLink")
  
  menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleHamburger)
  })
  
  ham.addEventListener("click", toggleHamburger)
  close_icon.addEventListener("click", toggleHamburger)
  overlay.addEventListener("click", toggleHamburger)
  
  function toggleHamburger() {
    overlay.classList.toggle("showOverlay")
    sideNav.classList.toggle("showNav")
  }

}
