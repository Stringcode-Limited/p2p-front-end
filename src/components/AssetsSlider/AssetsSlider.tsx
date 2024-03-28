import ToggleSlider from '../ToggleSlider/ToggleSlider'
import './AssetsSlider.css'

interface IAssetsSlider{
  image:string
  name:string
  fullName:string
  percent?:string
  color?: "G" | "R"
}

function AssetsSlider({image, name, fullName, percent, color}:IAssetsSlider) {
  const style = `c2 ${color}`
  return (
    <>
       <div className="assets">
            <div className="left">
                <div className="box1">
                    <img src={image}/>
                </div>
                <div className="box2">
                    <div className="up">{name}</div>
                    <div className="down">
                        <p className="c1">{fullName}</p>
                        <p className={style}>{percent}</p>
                    </div>
                </div>
            </div>
            <div className="right">
               <ToggleSlider/>
            </div>
        </div> 
    </>
  )
}

export default AssetsSlider