import React from 'react';

//styles
import styles from './Coin.module.css';

const Coin = ({name,image,symbol,pric,marketCap,priceChang}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.pric}>$ {pric.toLocaleString()}</span>
            <span className={priceChang > 0 ? styles.grrenChang : styles.redChang}>{priceChang.toFixed(2)}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
            
        </div>
    );
};

export default Coin;