import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { BrowserRouter, useHistory, Button } from 'react-router-dom';
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.querySelector("#root"))