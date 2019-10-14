var { h } = require('presang')

module.exports = {
  title: 'About',
  render: async function () {
    return [
      h('h1', 'About'),
      h('p', 'We are making apps.')
    ]
  }
}
