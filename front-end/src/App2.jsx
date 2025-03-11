import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

// rafce

// Arrow Function
// const App2 = () => <h1>Olá mundo!</h1>

// Nomeação de Componente
// PascalCase

// Nomeação de Variável, Função...
// camelCase

// Noneação de Classes
// kebab-case

// export default, posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chave e com o nome exportado

// Self closing tag
// <Header></Header>
// <Header/>

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento-modificador
// header
// header__link
// header__link-small
// Nomes compostos são separados por -
// item-list__header

//Tag vazia em React se chama Fragment ou Fragmento

// Componentes recebem "props"

{/* {itens === 4 ? 
    (<>
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
    </>):(<>
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
    </>)
    } */}

// {Array(itens).fill().map((currentValue, index) => (<SingleItem key={`${title}-${index}`} />))}

// Spread Operator
// ...

// {artist === undefined ? "Artista" : artist} == {artist ?? 'Artista'}

// Quando componentes se re-renderizam?
// Uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada

// Hook - useState