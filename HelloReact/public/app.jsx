/* jshint ignore:start */
var firstName = "Thomas";

class GreeterMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>H1 tag</h1>
        <p>Paragraph</p>
      </div>
    );
  }
}

class GreeterForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" ref="nameFromInput"/>
        <button>Set Name</button>
      </form>
    );
  }
}

class Greeter extends React.Component {
  // this gives us 'this'
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.preventDefault();

    var nameRef = this.refs.nameFromInput;
    var name = nameRef.value;

    // clears the input box
    nameRef.value = '';

    if (typeof name === "string" && name.length > 0) {
      this.setState({
        name: name
      });
    }
  }

  render() {
    // var name = this.props.name;
    var name = this.state.name;
    var message = this.props.message;

    return (
      // { expression } <-- whatevert inside { } evaluates
      // as a JavaScript expression
      //
      // ref is for React to get the form
      <div>
        <h1>Hello { name }!</h1>
        <p>{ message + '!!' }</p>

        <GreeterMessage/>

        <form onSubmit={ this.onButtonClick }>
          <input type="text" ref="nameFromInput"/>
          <button>Set Name</button>
        </form>

        <GreeterForm/>
      </div>
    );
  }
}

Greeter.defaultProps = {
  name: 'React',
  message: 'This is from a component'
};

ReactDOM.render(
    // <Greeter/>, // tests defaults
    <Greeter name={ firstName } message="yolo!"/>, // { } is an expression
    document.getElementById('app')
);

/* jshint ignore:end */
