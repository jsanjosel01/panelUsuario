// registro
export function initRegistro(showScene) {
  const registroSection = document.getElementById('registro');

  registroSection.innerHTML = `
    <h2>Registro</h2>

    <div class="form-group">
      <label>Nombre de usuario/a: </label>
      <input type="text" id="username">
      <div class="error" id="usernameError"></div>
    </div>

    <div class="form-group">
      <label>Contraseña: </label>
      <input type="password" id="password">
      <div class="error" id="passwordError"></div>
    </div>

    <div class="form-group">
      <label>Teléfono: </label>
      <input type="text" id="telefono">
      <div class="error" id="telefonoError"></div>
    </div>

    <div class="form-group">
      <label>Código postal: </label>
      <input type="text" id="codigoPostal">
      <div class="error" id="codigoPostalError"></div>
    </div>

    <div class="form-group">
      <input type="checkbox" id="mayorEdad">
      <label for="mayorEdad">Soy mayor de edad</label>
    </div>

    <div class="form-group" id="edadGroup" style="display:none;">
      <label>Edad: </label>
      <input type="number" id="edad" min="18" max="99">
      <div class="error" id="edadError"></div>
    </div>

    <button id="botonRegistrar" disabled>Registrar</button>
    <p><a href="#" id="goLogin">¿Ya tienes cuenta? Inicia sesión</a></p>
    <p class="mensaje" id="mensajeRegistro"></p>
  `;

  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const telefono = document.getElementById('telefono');
  const cPostal = document.getElementById('codigoPostal');
  const mayorEdad = document.getElementById('mayorEdad');
  const edadGroup = document.getElementById('edadGroup');
  const edad = document.getElementById('edad');
  const botonRegistrar = document.getElementById('botonRegistrar');
  const mensajeRegistro = document.getElementById('mensajeRegistro');
  const goLogin = document.getElementById('goLogin');

  // Mostrar input de edad si se marca checkbox, false para que se active.
  mayorEdad.addEventListener('change', () => {
    if (!mayorEdad.checked) {
      edadGroup.style.display = 'block';
      botonRegistrar.disabled = false;
    } else {
      edadGroup.style.display = 'none';
      botonRegistrar.disabled = false;
    }
  });

  // Ir a login
  goLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showScene('login');
  });

  // Registrar usuario
  botonRegistrar.addEventListener('click', () => {
    const user = username.value.trim();
    const pass = password.value.trim();
    const tel = telefono.value.trim();
    const cp = codigoPostal.value.trim();
    const userEdad = edad.value.trim();

    // Validaciones básicas
    if (!user || !pass || !tel || !cp || (!mayorEdad.checked && !userEdad)) {
      mensajeRegistro.style.color = 'red';
      mensajeRegistro.textContent = 'Completa todos los campos.'; 
      return;
    }

    if (localStorage.getItem(user)) {
      mensajeRegistro.style.color = 'red';
      mensajeRegistro.textContent = 'El usuario/a ya existe.';
      return;
    }

    // Guardar usuario en localStorage
    const userData = {
      password: pass,
      telefono: tel,
      codigoPostal: cp,
      edad: mayorEdad.checked ? null : userEdad
    };

    localStorage.setItem(user, JSON.stringify(userData));

    mensajeRegistro.style.color = 'green';
    mensajeRegistro.textContent = '¡Te has registrado correctamente!';

    setTimeout(() => {
      showScene('login');
    }, 1000);
  });
}