import React from 'react';

const FloorPrice = ({ floorPrice }) => {
    const formattedFloorPrice = (floorPrice / 1000000000).toFixed(2);
    const trimmedFloorPrice = formattedFloorPrice.replace(/\.?0+$/, '');
    return <p>Floor price: {trimmedFloorPrice} SOL</p>;
};

export default FloorPrice;
