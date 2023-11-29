import React, { Component, Fragment } from "react";
import "../styles/App.css";

import Header from "./header";
import Main from "./main";

class App extends Component {
    render() {
        return (
            <Fragment>
              <Header />
               <Main />
            </Fragment>
        );
    }
}

export default App;