import React from "react";
import ReactDOM from "react-dom";

import {setCard} from "./cats.js";

class App extends React.Component{
  constructor(props) {
    super(props);
    //this.selectImage = this.selectImage.bind(this);
    this.state = {...this.state,
      health: 2,
      images: setCard()
    }

  }

  componentDidMount() {
//<img src='dog.jpg' />
  }

  selectImage = (e,type,index) => {
    const newImages = this.state.images.slice()
    newImages[index][1] = type+'.jpg'
    this.setState({
      images: newImages,
    });
    if(this.state.health-1 < 1){
      alert("Canınız Kalmadı. Yeni Oyun Başlıyor.");
      this.setState({
        health: 2,
        images: setCard()
      })
    }else{
      if(type === "cat"){
        alert("Kazandınız ! Yeni Oyun Başlıyor.");
        this.setState({
          health: 2,
          images: setCard()
        })
      }else{
        this.setState({
          health: this.state.health-1
        });
      }
    }
  }

  render() {
    return(
      <>
        {
          this.state.images.map((image,index) => (<div key={index} onClick={() => this.selectImage(this,image[0],index)} className="card"><img src={image[1]} /></div>))
        }
      </>)
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
