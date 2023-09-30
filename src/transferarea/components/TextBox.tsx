import styled from "styled-components";

const TextBox = styled.textarea`

    height: 50em;
    width: 100%;
    border-radius: ${props => props.theme.palette.sizes.borderRadius};
    border: 1px solid gray;
    outline: none;

    &:disabled {
        background-color: ${props => props.theme.palette.colors.disabled};
     
    }
`

export default TextBox;