import styled from "styled-components";

const TextInput = styled.input`
    padding-block-start: .5em;
    padding-block-end: .5em;
    width: 7em;
    border-radius: ${props => props.theme.palette.sizes.borderRadius};
    border: 1px solid ${props => props.theme.palette.colors.border};
    outline: none;  

    @media(min-width: 300px) and (max-width: 420px){
        width: 6em;
    }

    @media(min-width: 421px) and (max-width: 699px){
        &:not(&:placeholder-shown) {
            width: 12em;
        }
    }

    @media(min-width: 700px){
        &:not(&:placeholder-shown) {
            width: 20em;
        }
    }
    
    &:focus {
        
        @media(min-width: 421px) and (max-width: 699px){
            width: 12em;
        }

        @media (min-width: 700px){
            width: 20em;
           
          
        }

    }

`

export default TextInput;