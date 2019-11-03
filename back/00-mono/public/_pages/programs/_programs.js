//import { useState } from 'react';
//import React, { useState } from 'react';
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {count: 1}
      this.increase = this.increase.bind(this)
      this.decrease = this.decrease.bind(this)
    }

    increase() {
      this.setState({'count': this.state.count+1})
    }

    decrease() {
      this.setState({'count': this.state.count-1})
    }

    render() {
      return (
        <div class="react">
          <h1>The React Counter: { this.state.count }</h1>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <Example></Example>
        </div>
      )
    }
  }

  function Example({initialCount}) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0); 
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => { setCount(count + 1); }}>
          Click me
        </button>
      </div>
    );
  }

  //ReactDOM.render(<App />, document.querySelector('#root'));
