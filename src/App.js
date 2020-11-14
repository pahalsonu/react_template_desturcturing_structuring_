import react, { Fragment } from "react";
import Upper from "./component/Nav"
import Engine from "./component/Engine"
import About from "./component/About"

class App extends react.Component {
    render() {
        return (
            <Fragment>
            <Upper />
            <Engine />
            <About />
            </Fragment>
        )
    }
};

export default App;