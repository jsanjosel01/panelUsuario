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
        const match = document.cookie.match(new RegExp('(^| )'+name+'=([^;]+)'));
        return match ? match[2] : null;
    }

    // Mostrar banner sí no se ha aceptado
    if (!getCookie('cookiesAccepted')) {
        cookieBanner.style.display = 'flex';
    }

    // Sí acepta las cookies, se guarda durante 1año
    acceptBtn.addEventListener('click', () => {
        setCookie('cookiesAccepted','true',365); // 1 año
        cookieBanner.style.display = 'none';
    });

});