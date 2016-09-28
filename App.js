import React from 'react';

// stateful function: can have state!
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: "Enter your search term."}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
    <div>
      <Widget txt={this.state.txt} update={this.update} />
      <Widget txt={this.state.txt} update={this.update} />
      <Widget txt={this.state.txt} update={this.update} />
      <Widget txt={this.state.txt} update={this.update} />
      <Widget txt={this.state.txt} update={this.update} />
    </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
        <h1>{props.txt}</h1>
    </div>
  );
}

export default App
