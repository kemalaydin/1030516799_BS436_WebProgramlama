import React from "react"
import { Link} from "react-router-dom";

export class Home extends React.Component{
  render(){
    return(
      <div className="m-auto">
        <Link to="game" className="btn">Oyna</Link>
      </div>
    )
  }
}