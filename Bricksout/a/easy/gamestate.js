const gamestate = {};
gamestate.login = ` <div class="login-container">
<form id="login-form">
    <h1>Login</h1>
    <div class="input-wrapper">
        <input type="email" placeholder="Email" name="email">
        <div id="email-error" class="err"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Password" name="password">
        <div id="password-error" class="err"></div>
    </div>
    <div class="login-form-action">
        <div>
            Don't have account?<span id="redirect-register" class="cursor-pointer">Register</span>
        </div>
        <button class="btn" type="submit">Login</button>
    </div>
</form>
</div>`
gamestate.register = `<div class="register-container">
<div class="form-wrapper">
    <div class="register-header">Register form</div>
    <form id="register-form">
        <div class="input-wrapper">
            <input type="text" placeholder="First name" name="firstName">
            <div id="first-name-error" class="err"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Last name" name="lastName">
            <div id="last-name-error" class="err"></div>
        </div>
        <div class="input-wrapper">
            <input type="email" placeholder="Email" name="email">
            <div id="email-error" class="err"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" placeholder="Password" name="password">
            <div id="password-error" class="err"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" placeholder="Confirm password" name="confirmPassword">
            <div id="confirm-password-error" class="err"></div>
        </div>
        <div class="register-form-action">
            <div>
                Already have an account?<span class="cursor-pointer" id="redirect-login">Login</span>
            </div>
            <button class="btn" type="submit">Register</button>
        </div>
    </form>
</div>
</div>`
gamestate.gameover = `
<div class="box">
<div class="gameover">
    <h1>Game Over</h1>
    <span>Press space to play again</span>
</div>
<button class="btn" id="btn-menu">Return Menu</button>
</div>`
gamestate.game = ``
gamestate.gamemenu = ` <div class="smartphoneSize">
<div class="navInfoPlayer"></div>
<figure id="clouds" class="backgroundCloudsMenu">
    <img class="animated fadeOutLeft slower infinite delay-5s" src="https://svgshare.com/i/7qu.svg">
</figure>
<div class="logoMenu animated fadeIn">
    <img src="https://svgshare.com/i/7rt.svg">
    <p class="titleMenu">Menu Game Breakout</p>
</div>
<div class="navMenu animated fadeIn">
    <div class="buttomLogin">
        <p class="buttomContent" id="content">play</p>
    </div>
    <div class="buttomRegister">
        <p class="buttomContent" id="register">register</p>
    </div>
    <div class="buttomGuest">
        <p class="buttomContent" id="guest-game">Guest play</p>
    </div>
</div>
<figure id="castle" class="backgroundCastleMenu">
    <img class="animated fadeInUp slow" src="https://svgshare.com/i/7sv.svg">
</figure>
<div class="navFooter"></div>
</div>`