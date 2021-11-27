// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

let config = {
  siteName: 'Casiano\'s Blog with Gridsome',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './posts',
        template: 'src/templates/Post.vue',
        pathPrefix: '/blog'
      },
    }
  ]
}

if (process.env['DEPLOY'] === 'github') {
  config.siteUrl = 'https://crguezl.github.io';
  config.pathPrefix = 'gridsome-vue-remark';
}

module.exports = config;
