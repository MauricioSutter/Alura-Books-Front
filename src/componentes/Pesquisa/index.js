import styled from "styled-components";
import Input from "../Input";
import { useState, useEffect } from "react";
import { getLivros } from "../../servicos/livros";
import { postFavoritos } from "../../servicos/favorito";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;



const Pesquisa = () => {

  const [livroPesquisado, setLivroPesquisado] = useState([]);
  const [livro, setLivro] = useState([]);

  useEffect(() => {    
    fetchLivros()
  }, [])

  async function fetchLivros() {

    const livrosDaAPI = await getLivros()
    setLivro(livrosDaAPI)
  }

  async function insertFavorito(id) {
    await postFavoritos(id)
    alert(`Livro de id:${id} inserido`)
  }

  const procuralivrosbase = (resultadoPesquisa) => {
    let pesquisa = resultadoPesquisa.target.value;
    
    if (pesquisa !== "") {
            const volumes = livro.filter(item => item.title.toLowerCase().includes(pesquisa.toLowerCase()))
            setLivroPesquisado(volumes)
          }    
  };

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva seua próxima leitura"
        onChange={procuralivrosbase}
      />
      {livroPesquisado.length > 0 ? (
        livroPesquisado.map((livropesquisado) => (
          <Resultado onClick={() => insertFavorito(livropesquisado.id)}>
            <img src={livropesquisado.cover_image} alt={livropesquisado.title} />
            <p>{livropesquisado.title}</p>
          </Resultado>
        ))
      ) : (
        <div></div>
      )}
    </PesquisaContainer>
  );
};

export default Pesquisa;
