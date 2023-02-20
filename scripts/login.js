const register = document.getElementById('register')
const login = document.getElementById('login')
const registerButton = document.getElementById('registerButton')
const loginButton = document.getElementById('loginButton')
const bannerInfo = document.getElementById('banner_info')
const documentName = document.querySelector('title')

registerButton.addEventListener('click', ()=>{
    login.classList.toggle('hide')
    register.classList.toggle('hide')
    bannerInfo.innerHTML = `<h1>Register <br> on Inhopper</h1>`
    documentName.innerText = `Register`
})
loginButton.addEventListener('click', () => {
    login.classList.toggle('hide')
    register.classList.toggle('hide')
    bannerInfo.innerHTML = `<h1>Log In <br> on Inhopper</h1>`
    documentName.innerText = `Log In`
})