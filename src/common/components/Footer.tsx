import styled from "styled-components";
import {ReactComponent as LinkedInIcon} from "../assets/linkedin-icon.svg"

const Footer = () => {

    return (
        <FooterWrapper>  
            Created By&nbsp;  <LinkedInIcon style={{width:'1em'}}/>&nbsp; <a target="_blank" href='https://www.linkedin.com/in/vitornilson/'>Vitor N.</a>
        </FooterWrapper>
    )

}

const FooterWrapper = styled.div`
    margin-block-start: 1em;
    margin-block-end: 1em;
    display: flex;
    justify-content: center;
`

export default Footer;