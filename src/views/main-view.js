var __ = erste.locale.__;

var ShowsView = require('./shows/shows-view');
var AboutView = require('./about/about-view');
var Sidebar = require('./sidebar/sidebar');
var SignUp = require('./sidebar/signup');
var Search = require('./search/search');

class MainView extends erste.TabBar {
    constructor(vm) {
        super();

        this.showsView = new ShowsView();
        this.aboutView = new AboutView();
        this.signUp = new SignUp();
        this.search = new Search();

        this.views = [this.showsView, this.search, this.aboutView];

        this.showsView.navBar.menuButtonHandler = () => vm.toggleSidebar();
        this.vm = vm;
        this.hasSidebar = true;

        //this.sidebar.on('switchView', e => this.activateItemByName(e.view));

    }

    onAfterRender() {
        super.onAfterRender();

        this.vm.setCurrentView(this.showsView);

        //this.activateItemByName('shows');
    };

    template_items() {
        return `
<tab-item class="active" data-view="showsView">Upcoming Events</tab-item><tab-item data-view="Search">Search by Genre</tab-item>


`;
    };

}


module.exports = MainView;
