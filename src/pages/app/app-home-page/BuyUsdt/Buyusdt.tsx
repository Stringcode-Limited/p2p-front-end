import React from 'react';
import "./Buyusdt.css"
import P2Papp from '../../../../components/P2Papp/P2Papp';
import opposite from "../../assets/images.opposite.png;





function Buyusdt() {
  return (
    <div className='usdt-info'>
        <div className="info-section">
            <div className="sidebar">
                <div className="log">
                    <P2Papp />
                </div>
                <div className="icons-unit">
                    <div className="opposite-face">
                        <img src={opposite} alt="" />
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  );
}

export default Buyusdt;
