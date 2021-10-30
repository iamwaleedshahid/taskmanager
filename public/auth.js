const fetchUser = async () => {
    const res = await fetch('/api/v1/auth/me', {
        method: "GET"
    })
    if (res.status === 200) {
        window.location.replace('/')
    }
  }
  
  
fetchUser()



const loginForm = document.querySelector('form#login')
const registerForm = document.querySelector('form#register')

let toggle_login = document.querySelector('#toggle-login').addEventListener('click', () => {
    loginForm.classList.remove('hidden')
    registerForm.classList.add('hidden')
})

let toggle_register = document.querySelector('#toggle-register').addEventListener('click', () => {
    loginForm.classList.add('hidden')
    registerForm.classList.remove('hidden')
})


loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    try {
        let reqHeaders = new Headers();
        reqHeaders.append("Content-Type", "application/json");

        let email = document.querySelector('#l-email').value
        let password = document.querySelector('#l-password').value


        let raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: reqHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/v1/auth/login", requestOptions)
            .then((res) => {
                if (res.status === 200) {
                    window.location.href = '/'
                }
            })
            .catch(error => console.log('error', error));
    } catch (error) {
        console.log(error)
    }
})



registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    try {
        let reqHeaders = new Headers();
        reqHeaders.append("Content-Type", "application/json");

        let username = document.querySelector('#r-username').value
        let email = document.querySelector('#r-email').value
        let password = document.querySelector('#r-password').value


        let raw = JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: reqHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/v1/auth/register", requestOptions)
            .then((res) => {
                if (res.status === 200) {
                    window.location.href = '/'
                }
            })
            .catch(error => console.log('error', error));
    } catch (error) {
        console.log(error)
    }
})