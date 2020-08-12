import React from 'react'
import { CardsListContainer } from './style'


const CardsList = ({ children }) => {
    return <CardsListContainer>
        {children}
    </CardsListContainer>
}

export default CardsList
