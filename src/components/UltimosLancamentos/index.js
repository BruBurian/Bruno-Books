import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from "../../images/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-position: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return(
    <UltimosLancamentosContainer>
        <Titulo 
        cor="#EB9B00" 
        tamanhoFonte="36px" 
        >Ultimos Lançamentos</Titulo>
        <NovosLivrosContainer>
            {livros.map( livro => (
                <img  src = {livro.src}/>
            ))}
        </NovosLivrosContainer>
        <CardRecomenda
            titulo="Talvez você se interesse por..."
            subtitulo="A chuva que não molhava"
            descricao="Era uma vez..."
            img={imagemLivro}
            />
    </UltimosLancamentosContainer> 
    )
}

export default UltimosLancamentos