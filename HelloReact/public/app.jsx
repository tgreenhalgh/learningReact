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
  render() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      // { expression } <-- whatevert inside { } evaluates
      // as a JavaScript expression
      <div>
        <h1>Hello { name }!</h1>
        <p>{ message + '!!' }</p>
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
