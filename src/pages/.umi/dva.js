import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'counter', ...(require('C:/个人中心/学习/umi-learn/src/models/counter.js').default) });
app.model({ namespace: 'loginUser', ...(require('C:/个人中心/学习/umi-learn/src/models/loginUser.js').default) });
app.model({ namespace: 'students copy', ...(require('C:/个人中心/学习/umi-learn/src/models/students copy.js').default) });
app.model({ namespace: 'students', ...(require('C:/个人中心/学习/umi-learn/src/models/students.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
