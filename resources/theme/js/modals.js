// MODALS MODULE - contains modal template and modal information for dynamic insertion into html
// modal template and content
export function getModal(modalName){
    return  `<div class="window-floating">
                <div id="modal-buttons" class="align-right">
                    <button id="button-close-modal">Close</button>
                </div>
                    ${modals[modalName]}
            </div>
            <span id="modal-background-close"></span>`;
}

const modals = {
    "signinSignup":
    `<div class="row">
        <section class="sec-signin">
            <header>
                <h1>Sign up to CreateHub</h1>
                <p>to make your talent visible to the world.</p>
            </header>
            <div class="sec-signin-inner column">
                <form>
                    <label for="username">Username</label>
                    <input id="username" type="text" name="username" autocomplete="username">
                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" autocomplete="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" name="password">
                    <label for="confirmPassword">Confirm Password</label>
                    <input id="confirmPassword" type="password" name="confirmPassword">
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </section>
        <section class="sec-signin">
            <header>
                <h1>Already have an account?</h1>
                <p>Log in here</p>
            </header>
            <div class="sec-signin-inner column">
                <form>
                    <label for="username-login">Username</label>
                    <input id="username-login" type="text" name="username" autocomplete="username">
                    <label for="password-login">Password</label>
                    <input id="password-login" type="password" name="password">
                    <button type="submit">Log in</button>
                </form>
            </div>
        </section>
    </div>`
};