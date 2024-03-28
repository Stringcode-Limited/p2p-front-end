import './ManageCryptoBody.css'
import left from "../../../../../assets/images/left.png";
import AssetsSlider from '../../../../../components/AssetsSlider/AssetsSlider';
import tetherUSDT from '../../../../../assets/images/tether-usdt.svg'
import bitcoinBTC from '../../../../../assets/images/bitcoin-btc.svg'
import ethEthereum from '../../../../../assets/images/eth-ethereum.svg'
import matic from '../../../../../assets/images/matic-polygon.svg'
import bnb from '../../../../../assets/images/bnb.svg'
import ltc from '../../../../../assets/images/ltc-litecoin.svg'
import sol from '../../../../../assets/images/sol-solano.svg'
import xrp from '../../../../../assets/images/xrp.svg'
import doge from '../../../../../assets/images/doge-dogecoin.svg'
import usdc from '../../../../../assets/images/usdcc-usdCoin.svg'
import ada from '../../../../../assets/images/ada-cardano.svg'
import trx from '../../../../../assets/images/trx-tron.svg'
import dot from '../../../../../assets/images/dot-polkadot.svg'

function ManageCryptoBody() {
  return (
    <>
    <div className="manageCryptoBody">
    <div className="top">
          <img src={left} />
          <p className="orders">Manage crypto</p>
        </div>
        <div className="center">
            <div className="title">Crypto assets</div>
            <div className="body">
                <AssetsSlider image={tetherUSDT} name='USDT' fullName='Tether'/>
                <AssetsSlider image={bitcoinBTC} name='BTC' fullName='Bitcoin'/>
                <AssetsSlider image={ethEthereum} name='ETH' fullName='Ethereum'/>
                <AssetsSlider image={matic} name='MATIC' fullName='Polygon'/>
                <AssetsSlider image={bnb} name='BNB' fullName='BNB Smart Chain'/>
                <AssetsSlider image={ltc} name='LTC' fullName='Litecoin'/>
                <AssetsSlider image={sol} name='SOL' fullName='Solana'/>
                <AssetsSlider image={xrp} name='XRP' fullName='XRP'/>
                <AssetsSlider image={doge} name='DOGE' fullName='Dogecoin'/>
                <AssetsSlider image={usdc} name='USDC' fullName='USD Coin'/>
                <AssetsSlider image={ada} name='ADA' fullName='Cardano'/>
                <AssetsSlider image={trx} name='TRX' fullName='Tron'/>
                <AssetsSlider image={dot} name='DOT' fullName='Polkadot'/>
                <AssetsSlider image={ltc} name='LTC' fullName='Litecoin' color='R' percent='-0.84%'/>
                <AssetsSlider image={ltc} name='LTC' fullName='Litecoin' color='R' percent='-0.84%'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ManageCryptoBody