;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    275(t, n, e) {
      'use strict'
      e.r(n)
      const o = e(276)
      const r = e.n(o)
      for (const f in o)
        !['default'].includes(f) &&
          (function (t) {
            e.d(n, t, function () {
              return o[t]
            })
          })(f)
      n.default = r.a
    },
    276(t, n) {},
    279(t, n, e) {
      let content = e(283)
      content.__esModule && (content = content.default),
        typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, e(133).default)('67427b47', content, !0, { sourceMap: !1 })
    },
    281(t, n, e) {
      'use strict'
      e.r(n)
      const o = e(287)
      const r = e(275)
      for (const f in r)
        !['default'].includes(f) &&
          (function (t) {
            e.d(n, t, function () {
              return r[t]
            })
          })(f)
      e(282)
      const c = e(46)
      const component = Object(c.a)(
        r.default,
        o.a,
        o.b,
        !1,
        null,
        '99cffe8a',
        null
      )
      n.default = component.exports
    },
    282(t, n, e) {
      'use strict'
      e(279)
    },
    283(t, n, e) {
      const o = e(132)(!1)
      o.push([
        t.i,
        '.img-container[data-v-99cffe8a]{display:inline-block;width:80%;text-align:center;margin-bottom:20px}.img-container .neko-img[data-v-99cffe8a]{position:relative;height:50vw;top:50px;left:10vw;z-index:10}.feed-btn-container[data-v-99cffe8a]{display:inline-block;width:18%}.feed-btn-container .feed-btn[data-v-99cffe8a]{position:relative;width:12vw;height:12vw;border:.5vw solid #212121;border-radius:50%;background-color:#fcf300;font-size:2vw;font-weight:700;cursor:pointer}.feed-btn-container .feed-btn[data-v-99cffe8a]:hover{background-color:#fff}',
        '',
      ]),
        (t.exports = o)
    },
    287(t, n, e) {
      'use strict'
      e.d(n, 'a', function () {
        return o
      }),
        e.d(n, 'b', function () {
          return r
        })
      var o = function () {
        const t = this
        t._self._c, t._self._setupProxy
        return t._m(0)
      }
      var r = [
        function () {
          const t = this
          const n = t._self._c
          t._self._setupProxy
          return n('div', { attrs: { id: 'neko-page-main-container' } }, [
            n('div', { staticClass: 'img-container' }, [
              n('img', {
                staticClass: 'neko-img',
                attrs: { src: '/neko.png', alt: '' },
              }),
            ]),
            t._v(' '),
            n('div', { staticClass: 'feed-btn-container' }, [
              n('button', { staticClass: 'feed-btn' }, [
                t._v('餌やり'),
                n('br'),
                t._v('ボタン'),
              ]),
            ]),
          ])
        },
      ]
    },
  },
])
