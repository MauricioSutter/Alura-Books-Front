import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const Logotipo = styled.div
`
  display: flex;
  font-size: 30px;
`
const Logoimg = styled.img
`
  margin-right: 10px;
`

const Logo = () => {
    return(
        <Logotipo>
          <Logoimg key="logo-img" src={logo} alt='logo do site' />
          <p><strong>Alura</strong> Books</p>
        </Logotipo>
    )
}

export default Logo