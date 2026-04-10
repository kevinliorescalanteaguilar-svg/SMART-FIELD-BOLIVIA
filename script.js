document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const btn = document.querySelector('.btn-primary');
        
        // Estado visual de carga
        const originalText = btn.innerText;
        btn.innerText = 'Iniciando...';
        btn.style.opacity = '0.8';
        btn.disabled = true;
        
        // Simulación de llamada a una API
        setTimeout(() => {
            if (email && password) {
                console.log('Intento de inicio de sesión:', { email });
                
                // Mostrar éxito
                btn.innerText = '¡Bienvenido!';
                btn.style.backgroundColor = '#10b981'; // Verde éxito
                
                // Restablecer después de un segundo para demostración
                setTimeout(() => {
                    alert('Simulación de inicio de sesión exitosa para: ' + email);
                    btn.innerText = originalText;
                    btn.style.backgroundColor = ''; 
                    btn.style.opacity = '1';
                    btn.disabled = false;
                    
                    // Aquí es donde normalmente redirigirías al dashboard:
                    // window.location.href = '/dashboard.html';
                }, 1000);
            }
        }, 1500);
    });
});
