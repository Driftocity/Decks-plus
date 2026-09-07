/* Decks Plus — shared site behavior. No build step, no dependencies. */

document.addEventListener("DOMContentLoaded", function () {
  /* mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* before/after drag-to-reveal sliders
     Markup contract per instance:
     <div class="ba-slider">
       <img class="ba-img before" src="..." alt="...">
       <img class="ba-img after" src="..." alt="...">
       <span class="ba-label before">Before</span>
       <span class="ba-label after">After</span>
       <div class="ba-handle"><div class="ba-handle-grip">↔</div></div>
       <input type="range" class="ba-range" min="0" max="100" value="50" aria-label="Drag to compare before and after">
     </div>
  */
  var sliders = document.querySelectorAll(".ba-slider");
  sliders.forEach(function (slider) {
    var range = slider.querySelector(".ba-range");
    var after = slider.querySelector(".ba-img.after");
    var handle = slider.querySelector(".ba-handle");
    if (!range || !after || !handle) return;

    function update(val) {
      after.style.clipPath = "inset(0 0 0 " + val + "%)";
      handle.style.left = val + "%";
    }
    update(range.value);
    range.addEventListener("input", function () {
      update(range.value);
    });
  });

  /* subtle fade-in-on-scroll for a premium feel.
     Add class="fade-in" to any section/element to opt it in. */
  var fadeEls = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window && fadeEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }
});
