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
    </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <div className="jumbotron">
        <h1>NY Times Article Search</h1>
        <p>Search articles of interest</p>
      </div>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Search</h3>
      </div>
      <h1>{props.txt}</h1>
      <div className="panel-body">
        <p>Topic</p>
        <input type="text"
        onChange={props.update} />
        <p>Start Year</p>
        <input type="text"
        onChange={props.update} />
        <p>End Year</p>
        <input type="text"
        onChange={props.update} />
      </div>
    </div>
    </div>
  );
}

export default App
