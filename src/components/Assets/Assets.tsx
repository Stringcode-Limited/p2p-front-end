import './Assets.css'

interface IAssets{
    image:string
    name:string
    rightPrice:string
    leftPrice:string
    percent:string
    quantity:number
    color: "G" | "R"
}

function Assets({image, name, rightPrice, leftPrice, percent, quantity, color}:IAssets) {
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
                        <p className="c1">${leftPrice}</p>
                        <p className={style}>{percent}%</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <p className="up">{quantity}</p>
                <p className="down">${rightPrice}</p>
            </div>
        </div>
    </>
  )
}

export default Assets