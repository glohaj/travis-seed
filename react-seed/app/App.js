import React from "react";
import {connect} from "react-redux";

const styles = {
}

/**
* The app container
*/
class App extends React.Component {
  /**
  * propTypes
  * @type {object}
  * @property {object[]} baseFilters - available filters
  * @property {object} activeFilters - active filters
  * @property {object} theme - the current theme
  * @property {object} language - the current selected language
  * @property {function} setEditing - set the filter on edit mode, handled by {@link EditingContainer}
  * @property {function} removeFilter - removes the filter from the active filters
  */
  static get propTypes () {
    return {
    }
  }

  componentDidMount () {
  }

  /**
  * render
  * @returns {ReactElement} markup
  */
  render () {
    return (
      <div>
        Hello World! I'm a React APP
      </div>
    )
  }
}

let mapStateToProps = function (state) {
  return {
  }
}

let mapDispatchToProps = {
}
App = connect(mapStateToProps, mapDispatchToProps)(App)
module.exports = App
