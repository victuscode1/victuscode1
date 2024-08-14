document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Login attempted with username: ${username} and password: ${password}`);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const email = document.getElementById('signupEmail').value;
    alert(`Sign up attempted with username: ${username}, email: ${email}, and password: ${password}`);
});
