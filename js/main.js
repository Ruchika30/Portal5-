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

/* -------Visible if scrolled to 300px  -----------*/

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

//  scroll to the top of the document when clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
