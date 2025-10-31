// Cambiar de pantallas
import { initLogin } from './login.js'; //INICIAR SESION
import { initRegistro } from './registro.js'; //REGISTRO DE USUARIO
import { initPanel } from './panel.js'; //PANEL DE USUARIO

// Función para mostrar una pantalla
export function showScene(id) {
  document.querySelectorAll('.scene').forEach(el => el.classList.remove('active'));
  const scene = document.getElementById(id);
  scene.classList.add('active');
}

// Inicializar escenas
window.addEventListener('DOMContentLoaded', () => {
initRegistro(showScene);
initLogin(showScene);
initPanel(showScene);


// Mostrar primero la pantalla inicio/login
if (localStorage.getItem('usuarioActivo')) {
  showScene('panel');  
} else {
  showScene('login');
}
});

