import React from "react"
import {setCard} from "./cats";
import {Link} from "react-router-dom";

export class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {...this.state,
      health: 2,
      images: setCard(),
      gameStatus: null,
    }
  }


  selectImage = (e,type,index) => {
    const newImages = this.state.images.slice()
    newImages[index][1] = type+'.jpg'
    this.setState({
      images: newImages,
    });
    if(this.state.health-1 < 1){
      this.setState({
        gameStatus: false
      })
    }else{
      if(type === "cat"){
        this.setState({
          gameStatus: true
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
      <div>
        { this.state.gameStatus === false &&
            <div className="m-auto">
              <div className="my">Kaybettin :( Kediyi Seçmen Gerekiyordu</div>
              <Link className="btn" to="/">Yeni Oyun</Link>
            </div>
        }
        { this.state.gameStatus === true &&
        <div className="m-auto">
          <div>Kazandın</div>
          <div className="card my">
            <img src="cat.jpg" />
          </div>
          <Link className="btn" to="/">Yeni Oyun</Link>
        </div>
        }

        { this.state.gameStatus === null &&
        <div>
          <div className="m-auto">{this.state.health} Hakkınız Kaldı</div>
          <div className="game-area">
            {
              this.state.images.map((image, index) => (
                <div key={index} onClick={() => this.selectImage(this, image[0], index)} className="card"><img
                  src={image[1]}/></div>))
            }
          </div>
        </div>
        }
      </div>
      
    )
  }
}
