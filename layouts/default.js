var { h } = require('presang')
var client = require('waveorb-client')

module.exports = async function (page) {
  return [
    h('!doctype', null, { html: true }),
    h('html', '', {}, [
      h('head', '', {}, [
        h('meta', null, { 'http-equiv': 'content-type', content: 'text/html; charset=utf-8' }),
        h('title', page.title),
        h('link', null, { rel: 'stylesheet', href: '/app.css', type: 'text/css' }),
        h('script', 'window.q=function q(s){return document.querySelector(s)}'),
        h('script', `!function(){var t=function(t){t=(t||"").trim().toLowerCase();var n=[],i=[];return{setAttribute:function(t,i){n.push(!0===i?t:t+'="'+i+'"')},appendChild:function(t){i.push(t)},toString:function(){return"<"+t+(n.length?" "+n.join(" "):"")+">"+(this.textContent||"")+i.join("")+(null===this.textContent?"":"</"+t+">")}}};window.h=function(n,i,e,o){var r=t(n);for(var u in void 0!==i&&(r.textContent=i),e){e[u]&&r.setAttribute(u,e[u])}if(o)for(var f=0;f<o.length;f++)r.appendChild(o[f]);return r.toString()}}()`),
        h('script', '', { src: '/waveorb.js' }),
        h('script', 'window.api = waveorb("http://localhost:4000")')
      ]),
      h('body', '', {}, [
        h('nav', '', {}, [
          h('a', 'Home', { href: '/' }),
          h('a', 'About', { href: '/about' })
        ]),
        h('div', '', {}, await page.render())
      ])
    ])
  ].join('')
}
