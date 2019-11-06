import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {getItems} from '../dux/reducer'

class Dash extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          name: "down blanket",
          price: "350.00",
          img:
            "https://images.unsplash.com/photo-1542728929-2b5d9a0c8d48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 2,
          name: "Down Pillows",
          price: "29.99",
          img:
            "https://www.coyuchi.com/media/catalog/product/d/o/down_pillow_insert_p.jpg?width=700&height=560&canvas=700:560&quality=90&fit=bounds"
        },
        {
          id: 3,
          name: " king size Purple Bed",
          price: "499.99",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/31R1d34bdtL.jpg"
        }
      ]
    };
  }

componentDidMount(){
  this.props.getItems()
}

  render() {
    console.log(this.props)
    let { items } = this.state;
    return (
      <div>
        <Link to="/add"><button>Add Item</button></Link>
        {this.props.items.map(item => (
          <Item 
          key={item.id}
          it={item} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    items: state.items, 
    loading: state.loading, 
    error: state.error
  }
}

export default connect(mapStateToProps, {getItems})(Dash);
