const title = document.querySelector('.user-title-name')

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else {
        title.innerHTML = `Welcome Back, ${sessionStorage.name}!`;
    }
}

const logOut = document.querySelector('.logout');

// back to login, note that sessionStorage is maintained
logOut.onclick = () => {
    location.href = '/login';
}