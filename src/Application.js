var Sidebar = require('./views/sidebar/sidebar');
var MainView = require('./views/main-view');
var locale = require('./lib/locale');
var SignIn = require('./views/sidebar/signin');


class Application {
    constructor() {
        this.vm = new erste.ViewManager();

        var mainView = new MainView(this.vm);
        var signInView = new SignIn(this.vm);

        this.sidebar = new Sidebar();
        this.sidebar.render(document.body);

        this.sidebar.on('switchView', e => {
            var view;

            switch (e.view) {
                case 'Sign up':
                    view = mainView;
                    break;
                case 'Sign in':
                    view = signInView;
                    break;
                case 'About':
                    view = this.aboutView;
                    break;
                default:
                    view = this.showsView;
            }

            this.vm.setCurrentView(view, true);
        });

        mainView.render(document.body);

        this.vm.setCurrentView(mainView);
    }
}

module.exports = new Application();
