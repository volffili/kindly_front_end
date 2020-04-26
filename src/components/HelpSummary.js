import React from 'react'
import {Button} from 'reactstrap'

export default (props)=>{
    return(
        <tr>
            <td>{props.topic}</td>
            <td>{props.address}</td>
            <td><Button color="success" size="sm">View</Button></td>
        </tr>
    )
}
