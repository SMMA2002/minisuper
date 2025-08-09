// This file handles user authentication and role-based access control.
// It exports functions such as login, logout, and checkUserRole.

const users = []; // This will be populated with user data from users.json

// Function to load users from the JSON file
async function loadUsers() {
    const response = await fetch('/data/users.json');
    const data = await response.json();
    users.push(...data);
}

// Function to login a user
function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    return false;
}

// Function to logout a user
function logout() {
    localStorage.removeItem('currentUser');
}

// Function to check the user's role
function checkUserRole() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser ? currentUser.role : null;
}

// Load users when the script is executed
loadUsers();