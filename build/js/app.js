function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<0?(e.classList.add("fijo"),t.classList.add("scrollBody")):(e.classList.remove("fijo"),t.classList.remove("scrollBody"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="/build/img/thumb/${n}.jpg" alt="Imagen galeria">\n        `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n        <source srcset="build/img/grande/${e}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="/build/img/grande/${e}.jpg" alt="Imagen galeria">\n        `;const t=document.createElement("DIV");t.classList.add("overlay"),t.appendChild(n);const c=document.createElement("P");c.textContent="X",c.classList.add("btn-cerrar"),c.onclick=function(){t.remove()},t.appendChild(c);const o=document.querySelector("body");c.classList.add("no-scroll"),o.appendChild(t)}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
