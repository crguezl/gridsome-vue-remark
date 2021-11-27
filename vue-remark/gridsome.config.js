// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

let config = {
  siteName: 'Casiano\'s Blog with Gridsome',
  siteUrl: 'https://crguezl.github.io',
  pathPrefix: 'gridsome-vue-remark',
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

module.exports = config;
