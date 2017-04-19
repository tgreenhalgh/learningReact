/* jshint ignore:start */
class GreeterMessage extends React.Component {
  render() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello { name }!</h1>
        <p>{ message }</p>
      </div>
    );
  }
}

class GreeterForm extends React.Component {
  // grab our props
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
    // this gives us 'this'
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    var name = this.refs.nameFromInput.value;

    if (name.length > 0) {
      this.refs.nameFromInput.value = '';
      this.props.onNewName(name);
    }
  }

  render() {
    return (
      <form onSubmit= { this.onFormSubmit }>
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
    this.handleNewName = this.handleNewName.bind(this);
  }

  handleNewName(name) {
      this.setState({
        name: name
      });
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
        <GreeterMessage name = { name } message = { message }/>
        <GreeterForm onNewName = { this.handleNewName }/>
      </div>
    ); // when have a parent component handling an event from a child
       // usually call the parent 'handle...' and the child 'on...'
       // e.g. handleNewName and onNewName
  }
}

Greeter.defaultProps = {
  name: 'Thomas',
  message: 'This is the default message'
};

ReactDOM.render(
    // <Greeter/>, // tests defaults
    <Greeter/>, // { } is an expression
    document.getElementById('app')
);

/* jshint ignore:end */
