// Create new component produce some html component gets put in the DOM

import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Searchbar from './components/Searchbar'
const API_KEY = 'AIzaSyBTB--WSUyuwsavQLD4D37FE6wPXCAyh30';

class App extends Component {
  state = {
    someKey: 'someValue'
  };
  render = () => {
    return <div>
      <Searchbar/>
    </div>;
  }
  componentDidMount() {}
}

export default App;

ReactDOM.render(
  <App/>, document.querySelector('.container'));
