import React, { useState } from 'react';
const BigInversion = (props) => {
    const [state, setState] = useState({
        age: 0
    })
    const handleClick = () => {
        setState({
            age:state.age+1
        })
    }
    
    return(
        <div>
            
            <h2>{props.firstName}{props.lastName}</h2>
            <h5>Age:{state.age}</h5>
            <h5>HairColor:{props.hairColor}</h5>
            <button onClick={handleClick} className="btn btn-primary"> Click me</button>
        </div>
    )
}
export default BigInversion;