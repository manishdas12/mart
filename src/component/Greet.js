import React from "react";

const Greet = props => { 
    const { name, superHero } = props
    return(
    <div>
        <h1>Helllo {name} a.k.a {superHero} </h1>
        {/* {props.children}    */}
    </div> 
    )
}

export default Greet;