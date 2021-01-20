import  React, { Component } from "react";


class Welcome extends Component {
    render() {
        const {name, superHero} = this.props
        return(
            <h1> Welcome {name} a.k.a {superHero} </h1>
        )
    }        
}
export default Welcome;