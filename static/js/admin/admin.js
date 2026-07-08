const loginInput = document.getElementById('userLogin');
const passwordInput = document.getElementById('userPassword');
const submitBtn = document.getElementById('submitBtn');

const admin = document.getElementById('admin');
const sign = document.getElementById('sing-in');

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault(); // Stop page reload

    const credentials = {
        login: loginInput.value,
        password: passwordInput.value
    };

    try {
        // Send data to Python backend route
        const response = await fetch('http://127.0.0.1:5000/admin-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const result = await response.json();

        if (result.success) {
            alert("Login successful!");
            admin.style.display = 'flex';
            sign.style.display = 'none';
        } else {
            alert("Error: " + result.message);
        }
    } catch (error) {
        console.error("Error communicating with server:", error);
    }
});