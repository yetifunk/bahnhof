import { useState, useEffect } from "react";
import CoinSearchResults from "./CoinSearchResults/CoinSearchResults";

export default function CoinSearch() {
    
    const [coinPrice, setCoinPrice] = useState([]);

    useEffect(() => {
        getCoinPrices();
    }, []);

    async function getCoinPrices() {
        const COIN_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum%2Cmonero%2Ccardano%2Cpolkadot&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true"

        await fetch(COIN_URL)
        .then(res => res.json())
        .then(result => {
            setCoinPrice(result)
        })
        .catch(console.error);
    }

    return (
        <div className="coin-container">
            <div className="coin-header">
                <h1>CryptoHub</h1>
            </div>
            
            <div className="coin-results">
                <CoinSearchResults coinPrice={coinPrice} />
            </div>
        </div>
    )
}