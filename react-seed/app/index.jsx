import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {IndexRoute, Route, Router} from "react-router";
import store, {history} from "common/Store";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from 'App'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

/*
<IndexRoute component={Home} onEnter={requireAuth} />

*/
const AppContainer = () => {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={App}/>
          </Route>
        </Router>
    </Provider>
  )
}
ReactDOM.render(<AppContainer/>, document.getElementById('container'))
