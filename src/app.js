export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: './users',        nav: true, title: 'Github Users' },
      { route: 'login',  name: 'sign-in', moduleId: './modules/login/index', nav: true, title: 'Sign-In' },
      { route: 'users',  name: 'users', moduleId: './modules/user/index', nav: true, title: 'Users' },
      { route: 'samples',  name: 'samples', moduleId: './modules/sample/index', nav: true, title: 'Samples' },
      { route: 'projects',  name: 'projects', moduleId: './modules/project/index', nav: true, title: 'Project' }
    ]);

    this.router = router;
  }
}
