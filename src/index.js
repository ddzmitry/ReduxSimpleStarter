// Create new component produce some html component gets put in the DOM

import React, {Component} from 'react'
import ReactDOM from 'react-dom';

class Index extends Component {

  state = {
    someKey: 'someValue'
  };

  render = () => {
    return <p> Hello {this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({someKey: '💩'});
  }
}

export default Index;

ReactDOM.render(
  <Index/>, document.querySelector('.container'));
