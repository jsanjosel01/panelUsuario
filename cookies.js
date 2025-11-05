// Cookies

document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');

    // Funciones 
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
    }

    function getCookie(name) {
       return document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];
}

    // Mostrar cookie sí no se ha aceptado
   if (!getCookie('cookiesAccepted')) {
    cookieBanner.style.display = 'flex';
    } else {
    cookieBanner.style.display = 'none';
    }

    // Sí acepta las cookies, se guarda durante 1año
    acceptBtn.addEventListener('click', () => {
        setCookie('cookiesAccepted','true',365); // 1 año
        cookieBanner.style.display = 'none';
    });

});