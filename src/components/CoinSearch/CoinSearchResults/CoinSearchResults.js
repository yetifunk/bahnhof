import btcicon from '../CoinIcons/btc.png'
import caricon from '../CoinIcons/car.png'
import dogicon from '../CoinIcons/dog.png'
import ethicon from '../CoinIcons/eth.png'
import pokicon from '../CoinIcons/pok.png'
import xmricon from '../CoinIcons/xmr.png'

export default function CoinSearchResults ({ coinPrice }) {
    if (coinPrice.length === 0) {
        return (
            <h1>No Results</h1>
        )
    } else {
        return (
            <div className="coin-prices">
                <div className="btc">
                    <img src={btcicon} className='coinicon' alt='bitcoin icon' /><h3 className='coinmain'>BTC --- Bitcoin: ${coinPrice.bitcoin.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.bitcoin.usd_24h_change.toFixed(3) < 0) ? 'red' : 'green'}>{coinPrice.bitcoin.usd_24h_change.toFixed(3)}</h4>
                </div>
                <div className="eth">
                    <img src={ethicon} className='coinicon' alt='ethereum icon' /><h3 className='coinmain'>ETH --- Ethereum: ${coinPrice.ethereum.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.ethereum.usd_24h_change.toFixed(3) < 0) ? 'red' : 'green'}>{coinPrice.ethereum.usd_24h_change.toFixed(3)}</h4>
                </div>
                <div className="xmr">
                    <img src={xmricon} className='coinicon' alt='xmr icon' /><h3 className='coinmain'>XMR --- Monero: ${coinPrice.monero.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.monero.usd_24h_change.toFixed(3) < 0) ? 'red' : 'green'}>{coinPrice.monero.usd_24h_change.toFixed(3)}</h4>
                </div>
                <div className="doge">
                    <img src={dogicon} className='coinicon' alt='doge icon' /><h3 className='coinmain'>DOGE --- Dogecoin: ${coinPrice.dogecoin.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.dogecoin.usd_24h_change.toFixed(3) < 0) ? 'red' : 'green'}>{coinPrice.dogecoin.usd_24h_change.toFixed(3)}</h4>
                </div>
                <div className="cardano">
                    <img src={caricon} className='coinicon' alt='cardano icon' /><h3 className='coinmain'>ADA --- Cardano: ${coinPrice.cardano.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.cardano.usd_24h_change.toFixed(3) < 0) ? 'red' : 'green'}>{coinPrice.cardano.usd_24h_change.toFixed(3)}</h4>
                </div>
                <div className="polkadot">
                    <img src={pokicon} className='coinicon' alt='polkadot icon' /><h3 className='coinmain'>DOT --- Polkadot: ${coinPrice.polkadot.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.polkadot.usd_24h_change.toFixed(3) < 0) ? 'red' : 'green'}>{coinPrice.polkadot.usd_24h_change.toFixed(3)}</h4>
                </div>
            </div>
        )
    }
}


