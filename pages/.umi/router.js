import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';


let Router = DefaultRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Switch>
    <Route path="/" component={() => React.createElement(require('/Users/quanzhan/work/code/umi-ts/node_modules/_umi-build-dev@0.12.1@umi-build-dev/lib/Compiling.js').default, { route: '/' })} />
    <Route path="/list" component={() => React.createElement(require('/Users/quanzhan/work/code/umi-ts/node_modules/_umi-build-dev@0.12.1@umi-build-dev/lib/Compiling.js').default, { route: '/list' })} />
  </Switch>
</Router>
  );
}
