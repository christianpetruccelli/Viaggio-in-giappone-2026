document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  var jump = document.querySelector('.day-jump');
  if (jump) {
    jump.addEventListener('change', function () {
      if (jump.value) window.location.href = jump.value;
    });
  }
});
