import React from 'react';
import styled from 'styled-components';
import ProductItem from '../../components/Products';


const Main = styled.main`
width: 100vw;
height: 100vh;
background: #141414;
`;

function ProductPage(){
    return (
        <Main>
            <ProductItem />
        </Main>
    );
};

export default ProductPage;