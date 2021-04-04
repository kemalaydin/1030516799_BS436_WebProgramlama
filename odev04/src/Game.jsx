import React from "react"
import {setCard} from "./cats";

export class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {...this.state,
      health: 2,
      images: setCard()
    }
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
