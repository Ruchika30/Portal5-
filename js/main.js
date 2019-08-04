function toggle(selector, classname) {
  selector.classList.toggle(classname);
}

function elementselector(selector) {
  var element = document.querySelector(selector);
  return element;
}

var hamburger = elementselector("#hamburger");
// var menuItem = elementselector(".menuitems");
console.log(hamburger);

hamburger.addEventListener("click", function(e) {
  toggle(this, "open");
  //   toggle(menuItem, "hamburgeropen");
});
