# AURALIA — Portafolio de María Galicia

Sitio web estático de portafolio profesional enfocado en presentación, periodismo, locución y comunicación digital multimedia. Está preparado para editarse en Adobe Dreamweaver y publicarse en GitHub Pages.

## Estructura del repositorio

```text
auralia-portafolio/
├── index.html
├── sobre-mi.html
├── experiencia.html
├── trabajos.html
├── contacto.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   ├── foto-portada.svg
│   ├── foto-perfil.svg
│   ├── proyecto-presentacion.svg
│   ├── proyecto-periodismo.svg
│   ├── proyecto-locucion.svg
│   └── proyecto-audiovisual.svg
├── videos/
│   └── README.md
└── README.md
```

## Cómo abrirlo en Dreamweaver

1. Descargá y extraé el ZIP.
2. En Dreamweaver, elegí **Sitio > Nuevo sitio**.
3. Poné como nombre `AURALIA` y seleccioná la carpeta raíz extraída como carpeta local del sitio.
4. Abrí `index.html`.
5. Para ver el resultado, usá la vista **En vivo** o abrí `index.html` directamente en tu navegador.

## Personalización antes de publicar

- **Fotografías:** sustituí `img/foto-portada.svg` y `img/foto-perfil.svg` por tus imágenes. Si usás JPG o PNG, actualizá el atributo `src` correspondiente en los HTML.
- **Trabajos:** editá los textos de `trabajos.html` y reemplazá las imágenes de muestra por miniaturas reales.
- **Videos:** añadí tus archivos a `videos/` y usá los nombres `presentacion.mp4`, `reportaje.mp4` y `locucion.mp4`, o modificá los enlaces en `trabajos.html`.
- **Experiencia:** revisá los textos de `experiencia.html` para que las descripciones y fechas reflejen exactamente tu trayectoria.
- **Redes sociales:** cambiá los destinos de ejemplo en `js/main.js` por tus perfiles reales.
- **Correo:** en `js/main.js`, cambiá `TU_CORREO@ejemplo.com` por tu dirección real. Hacé lo mismo en `contacto.html`.

### Importante sobre el formulario

El sitio es estático. La versión incluida usa `mailto:`: al enviar, intenta abrir la aplicación de correo de la persona que visita la página, con el mensaje preparado. La persona todavía debe presionar **Enviar** en su aplicación. No envía automáticamente desde el servidor y puede no funcionar si la persona no tiene una aplicación de correo configurada.

Si necesitás que los mensajes lleguen directamente a tu bandeja sin que el visitante abra su aplicación de correo, conectá un servicio de formularios como EmailJS o Formspree y seguí sus instrucciones oficiales. No publiques contraseñas ni claves privadas en el repositorio.

## Publicar en GitHub Pages

1. Iniciá sesión en GitHub y creá un repositorio nuevo, por ejemplo `auralia-portafolio`.
2. Subí el contenido de esta carpeta al repositorio. `index.html` debe quedar en la raíz, no dentro de otra subcarpeta.
3. En el repositorio, abrí **Settings > Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**.
5. Seleccioná la rama `main` y la carpeta `/(root)`, y guardá.
6. Esperá a que GitHub Pages publique el sitio y abrí la URL que te muestre.

Cada vez que hagás cambios, guardalos y subilos al repositorio para actualizar el sitio.

## Tecnologías

- HTML5
- CSS3 responsive
- JavaScript sin dependencias
- Google Fonts (requiere conexión a internet para cargar las tipografías)

## Licencia y contenido

Personalizá el sitio y verificá que tenés permiso para publicar todas las fotografías, videos, logotipos y demás recursos que añadás.
