import React from 'react'
import Item from './Item'
import {Link} from 'react-router-dom'
import './Edit.css'

class Edit extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            
            <div>
                {this.props.match && this.props.match.params.id? <div>true</div>:
                <div>false</div>
            }
            </div>
        )
    }
}

export default Edit