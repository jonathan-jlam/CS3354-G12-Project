// use for testing
const MASTER_USERNAME = "admin";
const MASTER_PASSWORD = "utd";

const user_name = document.querySelector('.fullname');
const submitBtn = document.querySelector('.submit-btn');
const errorMsg = document.querySelector('.error');

window.onload = () => {

}

// User object, new one for each new user - deleted upon new session
class User {
    constructor(user_name, email, password) {
        this.user_name = user_name;
        this.email = email;
        this.password = password;
    }
}

// user array for all the users of the current session
let userArr = [];

// populates the current users and their data on each logout
for (var i = 0; sessionStorage.getItem("addedEmail" + i) != null; i++) {
    let email = sessionStorage.getItem("addedEmail" + i);
    let user_name = sessionStorage.getItem("addedUsername" + i);
    let password = sessionStorage.getItem("addedPassword" + i);
    userArr.push(new User(user_name, email, password));
}

if (user_name == null) { // if no username field, this is the login page

    submitBtn.addEventListener('click', login);

    function login() {
        let email = document.querySelector('.email');
        let password = document.querySelector('.password');

        // some fields are null
        if (!email.value || !password.value) {
            errorMsg.innerHTML = "Please fill out all the fields!";
            return;
        }
        
        // check for admin login (FOR TESTING)
        if (email.value == MASTER_USERNAME && password.value == MASTER_PASSWORD) {
            sessionStorage.name = "GA12 Admin";
            window.location.href = 'index.html';
        } else {

            // no new users
            if (userArr.length == 0) {
                errorMsg.innerHTML = "Password or email is invalid!";
                return;
            }

            userArr.forEach(attemptLogin);

            // check for email and password pair match
            function attemptLogin(user) {

                if (user.email == email.value && user.password == password.value) {
                    sessionStorage.name = user.user_name;
                    window.location.href = 'index.html';
                    return;
                }
                
                errorMsg.innerHTML = "Password or email is invalid!";
            }
        }
    }
} else {
    submitBtn.addEventListener('click', registerUser);

    function registerUser() {
        let user_name = document.querySelector('.fullname');
        let email = document.querySelector('.email');
        let password = document.querySelector('.password');

        // some fields are empty
        if (!user_name.value || !email.value || !password.value) {
            errorMsg.innerHTML = "Please fill out all the fields!";
            return;
        }

        // check for a duplicate email
        for (var i=0; i < userArr.length;i++) {
            if (userArr[i].email == email.value) {
                errorMsg.innerHTML = "This email is already in use!";
                return;
            }
        }
        
        // store the new user in session storage to be added upon reload
        let numRegistered = userArr.length;
        sessionStorage.setItem("addedEmail" + numRegistered, email.value);
        sessionStorage.setItem("addedUsername" + numRegistered, user_name.value);
        sessionStorage.setItem("addedPassword" + numRegistered, password.value);

        window.location.href = 'login.html';
        
    }
}




