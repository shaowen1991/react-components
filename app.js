// App --groceryItems-->  GroceryList --map each item in array--> GroceryItem --render--> return <li>
var App = () => (
  <div>
    <h2>My grocery list</h2>
    <GroceryList items = {groceryItems}/>
  </div>
);

var GroceryList = (props) => (
    <ul>
      {props.items.map((item, index) => 
        <GroceryItem key={index} name={item}/>
      )}
    </ul>
);

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crossedOut: false,
      bold: false
    };
  }

  onListItemClick(event) {
    this.setState({
      crossedOut: !this.state.crossedOut
    });
  }

  onMouseEnterHandler(event) {
    this.setState({
      bold: true
    });
  }

  onMouseLeaveHandler(event) {
    this.setState({
      bold: false
    });
  }

  render() {
    var style = {
      'textDecoration': this.state.crossedOut ? 'line-through' : 'none',
      'fontWeight': this.state.bold ? 'bold' : 'normal'
    };
    return (
      <li style={style} 
        onClick={this.onListItemClick.bind(this)}
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)} >
        {this.props.name}
      </li>
    );
  }
};

var groceryItems = ['Suger','Meat','Fun','haha','Orange'];

ReactDOM.render(
  <App />,
  document.getElementById('app')
);