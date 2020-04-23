import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        Routes: [require('../../router/PrivateRouter').default],
        _title: true,
        _title_default: true,
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/student/add',
        exact: true,
        component: require('../student/add.js').default,
        Routes: [require('../../router/PrivateRouter').default],
        _title: true,
        _title_default: true,
      },
      {
        path: '/student',
        exact: true,
        component: require('../student/index.js').default,
        Routes: [require('../../router/PrivateRouter').default],
        _title: true,
        _title_default: true,
      },
      {
        path: '/student/:id',
        exact: true,
        component: require('../student/$id.js').default,
        Routes: [require('../../router/PrivateRouter').default],
        _title: true,
        _title_default: true,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/17987/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: true,
        _title_default: true,
      },
    ],
    _title: true,
    _title_default: true,
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/17987/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: true,
    _title_default: true,
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
