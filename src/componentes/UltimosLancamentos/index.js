import styled from "styled-components";
import { useState, useEffect } from "react";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`

    margin-top: 30px;
    flex-direction: row;
    display: flex;
    justify-items: space-between;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    width: 100%;
`

const Livro = styled.div`
    width: 140px;
    cursor: pointer;
    margin: 40px;

    img{
        width: 186px;
        height: 248px;        
    }
`

const UltimosLancamentos = () => {

    const [lancamentos, setLancamentos] = useState([]);

    useEffect(() => {
        ultimoslancamentos();
    }, []);


    const ultimoslancamentos = () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=new+books`;
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            if (result.items) {
                const volumes = result.items.map((item) => item.volumeInfo);
                setLancamentos(volumes);
            }
        })
        .catch((error) => console.error("Erro ao buscar livros:", error));
    }

    return(
        <UltimosLancamentosContainer>
            <Titulo>ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {
                    lancamentos.map(livros => (
                        <Livro key={livros.id}>
                            <img key={Livro.title} src={livros.imageLinks && livros.imageLinks.smallThumbnail} alt={livros.title} />
                            <h3>{livros.title}</h3>
                        </Livro>
                    ))
                };
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
       
    )
}

export default UltimosLancamentos