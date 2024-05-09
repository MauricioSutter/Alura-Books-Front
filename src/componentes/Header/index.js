import { Link } from 'react-router-dom';
import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`


const Header = () => {

    return(
        <HeaderContainer>
            <Link to="/"><Logo /></Link>            
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header