module.exports = {
  scaffold: {
    template: 'templates/scaffold',
    prompt: [
      {
        type: 'input',
        name: 'name',
        message: 'Scaffold Name?',
        default: 'user'
      },
    ],
    inserts: [
      {
        path: 'routes/index.js',
        pattern: 'register:new:routes',
        echo: 'router.use(\'/\', <%= name %>Routes)'
      },
      {
        path: 'routes/index.js',
        pattern: 'import:new:routes',
        echo: 'const <%= name %>Routes = require(\'./<%= name %>Route\')'
      },
    ]
  },
}
