// var Greeter = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>Hello React!</h1>
//         <p>This is from the component</p>
//       </div>
//       );
//   }
// });

/* jshint ignore:start */
var firstName = "Thomas";

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.input.value);
  //   event.preventDefault();
  // }

  onButtonClick(e) {
    e.preventDefault();
    var name = this.refs.nameFromInput.value;
    alert(name);
  }

  render() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      // { expression } <-- whatevert inside { } evaluates
      // as a JavaScript expression
      //
      // ref is for React to get the form
      <div>
        <h1>Hello { name }!</h1>
        <p>{ message + '!!' }</p>

        <form onSubmit={ this.onButtonClick }>
          <input type="text" ref="nameFromInput"/>
          <button>Set Name</button>
        </form>
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
