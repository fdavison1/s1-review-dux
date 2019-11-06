import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

 function Item(props) { 
        let {name, price, img, id} = props.it
        return (
            <div className='single-item-container'>
                <h3>{name}</h3>
                <p>${price}</p>
                <img src={img} alt=''/>
                <div className='button-container'>
                    <Link to='/cart' onClick={()=> console.log(props.it)}><button>Add To Cart</button></Link>
                    <Link to={`/edit/${id}`} onClick={()=> console.log(props.it)}><button>Edit</button></Link>
                    <button onClick={()=> console.log(props.it)}>X</button>
                </div>
            </div>
        )
    }


export default Item