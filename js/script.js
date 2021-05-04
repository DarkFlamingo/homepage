document.addEventListener("DOMContentLoaded", function () {
  particlesJS.load(
    "particles-js",
    "assets/particles/config.json",
    function () {
      console.log("callback ");
    }
  );

  window.addEventListener("scroll", function () {
    let last_known_scroll_position = window.scrollY;
    let max_height = window.innerWidth;
    if (
      last_known_scroll_position >= 0 &&
      last_known_scroll_position < max_height * (1 / 4)
    ) {
      let el = document.getElementById("particles-js");
      el.className = "bg-color-f";
    } else if (
      last_known_scroll_position > max_height * (1 / 4) &&
      last_known_scroll_position < max_height * (1 / 2)
    ) {
      let el = document.getElementById("particles-js");
      el.className = "bg-color-f2";
    } else {
      let el = document.getElementById("particles-js");
      el.className = "bg-color-f3";
    }
  });
});
