window.onload = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyBoTA6lkrzac_imvVP9ppB-SmUOkYNsBkU",
        authDomain: "game-brickout.firebaseapp.com",
        databaseURL: "https://game-brickout.firebaseio.com",
        projectId: "game-brickout",
        storageBucket: "game-brickout.appspot.com",
        messagingSenderId: "36694821084",
        appId: "1:36694821084:web:b616722b7ffc682be34c19"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // requestAnimationFrame(loop);
    view.setActiveScreen('gameMenu')
    document.getElementById('guest-game').addEventListener('click', () => {
        view.setActiveScreen('gameState')
        requestAnimationFrame(loop)
    })
    document.getElementById('content').addEventListener('click', () => {
        view.setActiveScreen('loginState')
    })
    document.getElementById('register').addEventListener('click', () => {
        view.setActiveScreen('registerState')
    })

}