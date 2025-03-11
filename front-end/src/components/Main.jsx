import React from 'react'
import ItemList from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Main = ({ type }) => {
  return (
    <div className='main'>
      {type === 'artists' || type === undefined ? <ItemList title='Artistas' itens={8} itensArray={artistArray} path='/artists' idPath='/artist' /> : <></>}
      {type === 'songs' || type === undefined ? <ItemList title='Músicas' itens={16} itensArray={songsArray} path='/songs' idPath='/song' /> : <></>}
    </div>
  )
}

export default Main