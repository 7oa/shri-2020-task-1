function toggleClickAccordion(target) {
  const accordionMore = target.querySelector(".e-accordion__more");
  const win = accordionMore.ownerDocument.defaultView;
  const accordionMoreDisplay = win.getComputedStyle(accordionMore, null)
    .display;
  if (accordionMoreDisplay === "none") accordionMore.style.display = "block";
  else accordionMore.style.display = "none";
}

function onoffSwitch(target) {
  target.classList.toggle("onoffswitch_checked");
  const themeDefault = document.querySelectorAll(
    ".theme_color_project-default"
  );
  const themeInverse = document.querySelectorAll(
    ".theme_color_project-inverse"
  );

  themeDefault.forEach(item => {
    item.classList.add("theme_color_project-inverse");
    item.classList.remove("theme_color_project-default");
  });

  themeInverse.forEach(item => {
    item.classList.add("theme_color_project-default");
    item.classList.remove("theme_color_project-inverse");
  });
}

document.body.addEventListener("click", function(event) {
  let target = event.target;

  while (target !== this) {
    if (target.classList.contains("e-accordion")) {
      toggleClickAccordion(target);
      return;
    }
    if (target.classList.contains("onoffswitch")) {
      onoffSwitch(target);
      return;
    }
    target = target.parentNode;
  }
});
