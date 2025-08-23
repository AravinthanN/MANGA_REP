(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    5079: (e, t, a) => {
      (Promise.resolve().then(a.t.bind(a, 225, 23)),
        Promise.resolve().then(a.t.bind(a, 8060, 23)),
        Promise.resolve().then(a.t.bind(a, 6433, 23)),
        Promise.resolve().then(a.bind(a, 9500)),
        Promise.resolve().then(a.bind(a, 1758)));
    },
    9500: (e, t, a) => {
      'use strict';
      a.d(t, { AuthContextProvider: () => o });
      var s = a(7993),
        r = a(8333);
      let l = (0, r.createContext)(void 0),
        o = (e) => {
          let { children: t } = e,
            [a, o] = (0, r.useState)(null),
            [i, n] = (0, r.useState)(!0);
          (0, r.useEffect)(() => {
            let e = localStorage.getItem('user');
            (e && o(JSON.parse(e)), n(!1));
          }, []);
          let c = async (e, t) => {
            let a = { id: '1', name: 'John Doe', email: e };
            (localStorage.setItem('user', JSON.stringify(a)), o(a));
          };
          return (0, s.jsx)(l.Provider, {
            value: {
              user: a,
              login: c,
              logout: () => {
                (localStorage.removeItem('user'), o(null));
              },
              loading: i,
            },
            children: !i && t,
          });
        };
    },
    1758: (e, t, a) => {
      'use strict';
      a.d(t, { FrameVisibilityProvider: () => o });
      var s = a(7993),
        r = a(8333);
      let l = (0, r.createContext)(void 0),
        o = (e) => {
          let { children: t } = e,
            [a, o] = (0, r.useState)(!1);
          return (0, s.jsx)(l.Provider, {
            value: { visible: a, setVisible: o },
            children: t,
          });
        };
    },
    6433: () => {},
    8060: (e) => {
      e.exports = {
        style: { fontFamily: "'geistMono', 'geistMono Fallback'" },
        className: '__className_c3aa02',
        variable: '__variable_c3aa02',
      };
    },
    225: (e) => {
      e.exports = {
        style: { fontFamily: "'geistSans', 'geistSans Fallback'" },
        className: '__className_1e4310',
        variable: '__variable_1e4310',
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [253, 70, 299, 358], () => t(5079)), (_N_E = e.O()));
  },
]);
