document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });
  }

  var whatsapp = document.createElement("a");
  whatsapp.className = "whatsapp-float";
  whatsapp.href = "https://wa.me/595961840205";
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener noreferrer";
  whatsapp.setAttribute("aria-label", "Contactar por WhatsApp");
  whatsapp.title = "Contactar por WhatsApp";
  whatsapp.innerHTML = '<i class="fa fa-whatsapp" aria-hidden="true"></i>';
  document.body.appendChild(whatsapp);
});
