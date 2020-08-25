import React from 'react';
import styled from 'styled-components';

import './styles.css';
import { useState } from 'react';

const Card = styled.div`
width: 30rem;
height: 38rem;
margin-right: 3.6rem;
padding:0 10px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 1.9rem;
background: #fafafa;
font-size: 3rem ;
color: #000;
@media(min-width: 1100px){
    width: 30rem;
    height: 40rem;
    margin-right: 15rem;
    padding:0 20px;
}
`


function ProductItem() {
    const StorageFavorites = JSON.parse(localStorage.getItem('favorite-kika´s')) || []
    const [favorites, setFavorites] = useState(StorageFavorites);

    function handleSaveFavorite(){
        localStorage.setItem('favorite-kika´s', JSON.stringify(favorites));
    }
    return (
        <Card>
            <span className="img-container">
                <img src="https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/116874628_2711902729094747_5760585771853528550_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=xZMYwuLVEfUAX_HeoMD&oh=1e53e0e98a9250d85fb20b2b2276071b&oe=5F65688A"
                    alt="Foto do lanche"
                />
            </span>
            <h2>X-SALADA</h2>

            <p id="description">Pão de brioche, tomate, alface, queijo, cebola roxa, 18g de carne e molho opicional</p>

            <p id="price">R$ 13,00</p>

            <form onSubmit={
                function handleSubmit(e){
                    e.preventDefault();
                    const input = document.getElementById('product');
                    setFavorites([
                        ...favorites,
                        input.value
                    ]);
                    console.log(favorites)
                    handleSaveFavorite();
                }
                
            }>
                <input id="product" type="hidden" value="001" />
                <button type="submit">ADCIONAR</button>
            </form>
        </Card>
    );
};


export default ProductItem;