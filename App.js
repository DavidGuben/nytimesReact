import React from 'react';

// stateful function: can have state!
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: "Enter your search term."}
  }
  update(e){
    this.setState({
      txt: e.target.value
    })
  }
  render(){
    let txt = this.props.txt;
    return (
    <div>
    <div className="panel panel-default">
  <div className="panel-body">
    Basic panel example
  </div>
</div>
    <input type="text"
      onChange={this.update.bind(this)} />
     <h1>Hello world</h1>
     <p>{txt}</p>
     <h1>{this.state.txt}</h1>
    </div>
    )
  }
}
// property types expected
// renders a default property value to the App component
App.defaultProps = {
  txt: 'unable to connect'
}
// stateless function: cannot have state!

export default App
