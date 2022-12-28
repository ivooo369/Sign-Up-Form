const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const form = document.querySelector("#my-form");

form.addEventListener("submit", (e) => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
    }
});

function checkPasswords() {
    if (passwordInput.value === confirmPasswordInput.value) {
        confirmPasswordInput.style.borderColor = 'green';
        confirmPasswordInput.style.outline = 'none';
    } else {
        confirmPasswordInput.style.borderColor = 'red';
        confirmPasswordInput.style.outline = 'none';
    }
}

passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);