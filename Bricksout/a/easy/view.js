const view = {}
view.setActiveScreen = (gameState) => {
    switch (gameState) {
        case 'registerState':
            document.getElementById('game').innerHTML = gamestate.register;
            document.getElementById('redirect-login').addEventListener('click', () => {
                view.setActiveScreen('loginState')
            })
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault()
                const dataRegister = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(dataRegister)
            })
            break;
        case 'loginState':
            document.getElementById('game').innerHTML = gamestate.login;
            document.getElementById('redirect-register')
                .addEventListener('click', () => {
                    view.setActiveScreen('registerState')
                })
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const dataToLogin = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(dataToLogin)
            })
            break;
        case 'gameoverState':
            document.getElementById('game').innerHTML = gamestate.gameover;
            document.getElementById('canvas').style = 'display:none'
            break;
        case 'gameMenu':

            document.getElementById('game').innerHTML = gamestate.gamemenu;
            document.getElementById('canvas').style = 'display:none';

            break;
        case 'gameState':
            document.getElementById('game').innerHTML = gamestate.game;
            document.getElementById('canvas').style = 'display:block'
            break;
    }

}
view.setErrorMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message
}