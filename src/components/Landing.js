import React,{ useState,useEffect } from 'react';
//api
import {getCoin} from "../servises/api";
//components
import Loder from "./Loder";
import Coin from "./Coin";

//styls
import styls from "./Landing.module.css";

const Landing = () => {

    const[coins,setCoins] = useState([]);
    const[search,setSearch] = useState("");

    useEffect(() =>{
            const fetchApi = async () =>{
                const data = await getCoin();
                console.log(data);
                setCoins(data)
            }
            fetchApi()
    },[])

    const serchHandeler = event =>{
        setSearch(event.target.value);

    }

    const searchCoins = coins.filter(coin =>coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
        
        <input className={styls.input} type="text" placeholder="Serch" value={search} onChange={serchHandeler} /> 
        {
            coins.length ?
            <div className={styls.conContainer}>
            {
               searchCoins.map(coin =><Coin 
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    pric={coin.current_price}
                    marketCap={coin.market_cap}
                    priceChang={coin.price_change_percentage_24h}
                />)
            }
        </div> : <Loder /> 
        }
        
        </>
    );
};

export default Landing;