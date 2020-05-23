// Provide arrow key navigation on a page (when possible and applicable)
document.onkeydown = function(e) {
  var selector;
  switch (e.keyCode) {
    case 37:
      selector = ".nav-left .chevron";
      break;
    case 38:
      selector = ".nav-up .chevron";
      break;
    case 39:
      selector = ".nav-right .chevron";
      break;
    case 40:
      selector = ".nav-bottom .chevron";
      break;
  }

  var target = document.querySelector(selector);
  if (target) {
    window.location = target.getAttribute("href");
  } else {
    return;
  }
};

// Provide larger tap/click surface area on navigation chevrons
document.querySelector(".nav-right").onclick = function() {
  window.location = document.querySelector(".nav-right a").getAttribute("href");
}