var __ = erste.locale.__;

class Sidebar extends erste.Sidebar {
constructor() {
    super();
    console.log('sidebar instantiated')
}
    template_items() {
        return `
<sidebar-item data-view="Sign up"><i class="icon-signup"></i>Sign up</sidebar-item>
<sidebar-item data-view="Sign in"><i class="icon-signin"></i>Sign in</sidebar-item>
<sidebar-item data-view="sidebar/about-view"><i class="icon-about"></i>About</sidebar-item>
<sidebar-item data-view="sidebar/signup"><i class="icon-exit"></i>Exit</sidebar-item>
`;
    };
}

module.exports = Sidebar;
