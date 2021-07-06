import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { SiXcode } from 'react-icons/si';

export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight:700;
`;

export const NavLink = styled(Link)`
color: #1AF8F3 ;
font-size: 3rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
margin-top: 10px;


@media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
    
    
}
@media screen and (max-width: 740px) {
    font-size: 1.5rem;
}

`;

export const NavIcon = styled.div`
margin-top: -10px;
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #1AF8F3 ;
p{
    transform: translate(-175%, 100%);
    font-weight: bold;
    font-size:1.5rem;

    @media screen and (max-width: 550px) {
        display: none;
     }

}
&:hover{
    color: white;
}
@media screen and (max-width: 660px) {
    margin-top: 20px
 }

`;
export const Bars = styled(SiXcode)`
font-size: 2.5rem;
transform: translate(-50%,-15%);
`