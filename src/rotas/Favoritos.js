import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLivrosFavoritos, deleteFavoritos } from '../servicos/favorito';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    margin: 0px;
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
    padding-bottom: 35px;
`


function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getLivrosFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletaFavorito(id) {
    await deleteFavoritos(id)
    await fetchFavoritos()
    alert(`Livro de id:${id} deletado!`)    
  }

  
  useEffect(() => {
    fetchFavoritos()
  }, [])
  return (
    <AppContainer>
     <div>
       <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoContainer>
         {
           favoritos.length !== 0 ? favoritos.map(favorito => (
             <Resultado onClick={() => deletaFavorito(favorito.id)}>
               <p>{favorito.title}</p>
               <img key={favorito.id} src={favorito.cover_image} alt={favorito.title}/>
             </Resultado>
           )) : null
         }
       </ResultadoContainer>
     </div>
   </AppContainer>
  );
}

export default Favoritos;
