const model = {}
model.register = async({ firstName, lastName, email, password }) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            // update profile
        firebase.auth().currentUser.updateProfile({
                displayName: firstName + ' ' + lastName
            })
            // gui email verify
        firebase.auth().currentUser.sendEmailVerification()
        alert('Register success! Please confirm your email')
        view.setActiveScreen('loginState')
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
}
model.login = async({ email, password }) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        if (response.user) {
            view.setActiveScreen('gameState')
            requestAnimationFrame(loop)
        } else {
            alert('Please verify email')
        }
    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}