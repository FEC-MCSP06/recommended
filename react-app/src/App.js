
import './App.css';
import React, {Component}  from 'react';
import List from './List'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
<div>
  <List />
</div>
    )
  }
}

export default App;
