var __ = erste.locale.__;

class SignUp extends erste.View {
    constructor() {
        super();

        this.className = 'signup';

        this.navBar = new erste.NavBar({
            title: __('<img src="static/foto/logo3.png"/>'),
            hasMenuButton: true,
            hasBackButton: true
        });

    }

    onAfterRender() {
        this.vm = new erste.ViewManager(this.el);
        this.navBar.vm = this.vm;
    };

    template_content() {
        return `
        ${this.navBar}       
<h4>${__('Sign up')}<hr></h4>
<br>
<button type="button" class="button1"><img class="img3" src="static/foto/facebook.png"/></button><button type="button" class="button2"><img class="img4" src="static/foto/twitter.png"/></button>
<br><br><hr>
<p class="first">or sign up with e-mail</p><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Name <input type="text" class="box3" placeholder="Full Name" required>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class="img1" src="static/foto/Mail.png"/>  <input type="text" class="box1" placeholder="Email" required><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class="img2" src="static/foto/locker.png"/>  <input type="password" class="box2" placeholder="Password" required>
<br><br><br>
<button type="button" class="button3">Login</button><br>
<br><p class="last">You don't have account? Signup</p>
`
;
    }
}

module.exports = SignUp;
