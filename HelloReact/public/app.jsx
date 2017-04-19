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
      name: props.name,
      message: props.message
    };
    // this gives us 'this'
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    var updates = {};
    var name = this.refs.nameFromInput.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.nameFromInput.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);  // calls the function
  }

  render() {
    return (
      <div>
        <form onSubmit= { this.onFormSubmit }>
          <div>
            <input type="text" placeholder="Enter Name" ref="nameFromInput"/>
          </div>
          <div>
            <textarea placeholder="Enter Message" ref="message"></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

class Greeter extends React.Component {
  // this gives us 'this'
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      message: props.message
    };
    this.handleNewData = this.handleNewData.bind(this);
  }

  handleNewData(updates) {
      this.setState(updates);
  }

  render() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      // { expression } <-- whatevert inside { } evaluates
      // as a JavaScript expression
      //
      // ref is for React to get the form
      <div>
        <GreeterMessage name = { name } message = { message }/>
        <GreeterForm onNewData = { this.handleNewData }/>
      </div>
    ); // when have a parent component handling an event from a child
       // usually call the parent 'handle...' and the child 'on...'
       // e.g. handleNewData and onNewData
  }
}

Greeter.defaultProps = {
  name: 'Thomas',
  message: 'This is the default message'
};

ReactDOM.render(
    <Greeter/>, // { } is an expression
    document.getElementById('app')
);

/* jshint ignore:end */
