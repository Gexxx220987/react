import React, { Component, Fragment } from "react";
import "../styles/App.css";

import Header from "./header";

class App extends Component {
    render() {
        return (
            <Fragment>
              <Header />
               <main>
            <div>
             <h1>Hello World</h1>
            </div>
            </main>
            </Fragment>
        );
    }
}

export default App;