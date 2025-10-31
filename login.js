//  Inicio de Sesión
export function initLogin(showScene) {
  const loginSection = document.getElementById('login');

  loginSection.innerHTML = `
    <h1>Iniciar sesión</h1>
    <input type="text" id="loginUser" placeholder="Usuario/a">
    <input type="password" id="loginPass" placeholder="Contraseña">
    <button id="btnLogin">Entrar</button>
    <p><a href="#" id="goRegistro">¿No tienes cuenta? Regístrate</a></p>
    <p class="mensaje" id="msgLogin"></p>
  `;

  const user = document.getElementById('loginUser');
  const pass = document.getElementById('loginPass');
  const btn = document.getElementById('btnLogin');
  const msg = document.getElementById('msgLogin');
  const goRegistro = document.getElementById('goRegistro');

  //esto nuevo para ver si lo pinta!! MIRAR ESTOOO
  console.log('loginUser input:', user);
  console.log('btnLogin button:', btn);


  // Ir a registro
  goRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    showScene('registro');
  });

  // Iniciar sesión
  btn.addEventListener('click', () => {
    const username = user.value.trim();
    const password = pass.value.trim();

    const data = localStorage.getItem(username);
    if (!data) {
      msg.style.color = 'red';
      msg.textContent = 'Usuario/a no encontrado.';
      return;
    }

    const userData = JSON.parse(data);
    if (userData.password !== password) {
      msg.style.color = 'red';
      msg.textContent = 'Contraseña incorrecta.';
      return;
    }

    // Guardar sesión y pasar al panel
    localStorage.setItem('usuarioActivo', username);
    msg.style.color = 'green';
    msg.textContent = 'Inicio de sesión correcto.';
    setTimeout(() => showScene('panel'), 1000);
  });
}