document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Handle registration
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const data = new URLSearchParams(formData);

        try {
            const response = await fetch('auth.php', {
                method: 'POST',
                body: data,
            });
            const result = await response.text();
            alert(result); // Display the result of registration
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Handle login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const data = new URLSearchParams(formData);

        try {
            const response = await fetch('auth.php', {
                method: 'POST',
                body: data,
            });
            const result = await response.text();
            alert(result); // Display the result of login
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
