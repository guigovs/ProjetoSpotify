import React from 'react'
import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router-dom'

const ItemList = ({ title, itens, itensArray, path, idPath }) => {

    const { pathname } = useLocation()
    const isHome = pathname === '/'
    const finalItens = isHome ? itens : Infinity

    return (
        <div className='item-list'>
            <div className='item-list__header'>
                <h2>{title} populares</h2>
                {isHome ? <Link className='item-list__link' to={path}>Mostrar tudo</Link> : <></>}
            </div>

            <div className='item-list__container'>
                {itensArray.filter((currentValue, index) => index < finalItens).map((currentObj, index) => (<SingleItem {...currentObj} idPath={idPath} key={`${title}-${index}`} />))}
            </div>
        </div>
    )
}

export default ItemList