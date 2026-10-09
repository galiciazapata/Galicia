/* AURALIA — interacciones del portafolio */
document.addEventListener("DOMContentLoaded", () => {
  // Año automático en el pie de página
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Menú adaptable para teléfonos
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Filtros de la galería de trabajos
  const filterButtons = document.querySelectorAll("[data-filter]");
  const portfolioItems = document.querySelectorAll(".portfolio-item[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      portfolioItems.forEach((item) => {
        item.hidden = !(filter === "all" || item.dataset.category === filter);
      });
    });
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  });

  // Formulario: prepara un correo en la aplicación de correo de quien visita la página.
  // Cambiá CONTACT_EMAIL por tu dirección real antes de publicar.
  const CONTACT_EMAIL = "TU_CORREO@ejemplo.com";
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (CONTACT_EMAIL === "TU_CORREO@ejemplo.com") {
        status.textContent = "Antes de publicar, reemplazá TU_CORREO@ejemplo.com en js/main.js y en contacto.html por tu correo real.";
        return;
      }
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();
      const body = `Nombre: ${name}\nCorreo de contacto: ${email}\n\nMensaje:\n${message}`;
      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = "Se abrirá tu aplicación de correo. Revisá el mensaje y presioná Enviar para completar el envío.";
      window.location.href = mailto;
    });
  }

  // Enlaces sociales: reemplazá los destinos de muestra con tus perfiles reales.
  const socialLinks = {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/"
  };
  document.querySelectorAll("[data-social]").forEach((link) => {
    const platform = link.dataset.social;
    if (socialLinks[platform]) link.href = socialLinks[platform];
  });

  // Evita navegar a archivos de video que todavía no se han añadido.
  document.querySelectorAll("[data-media-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = link.getAttribute("href");
      if (!url) return;
      fetch(url, { method: "HEAD" }).then((response) => {
        if (!response.ok) {
          event.preventDefault();
          alert("Este es un espacio de muestra. Añadí tu archivo de video a la carpeta videos y conservá el nombre indicado, o actualizá el enlace en trabajos.html.");
        }
      }).catch(() => {
        // La navegación normal se conserva si fetch no está disponible.
      });
    });
  });
});
