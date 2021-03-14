import "./App.css";
import Main from './Task/Main'
// connect to store
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from './redux/actions'


function mapStatesToProps(state) {
    console.log("App: ", state);
    return {
        products: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const App = connect(mapStatesToProps, mapDispatchToProps)(Main);

export default App;