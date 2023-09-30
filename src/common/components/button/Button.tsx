import styled from "styled-components";

const ButtonStyle = styled.button<{variant?: 'default' | 'alert' , label?: string | null, tooltip?: string | null}>`
    margin-inline-end:0.5em;
    background: white;
    border-radius: ${props => props.theme.palette.sizes.borderRadius};
    border: 1px solid ${props => props.theme.palette.colors.border};
    padding-inline-start: 0.5em;
    padding-inline-end: 0.5em;
    padding-block-start: 0.3em;
    padding-block-end: 0.3em;
    outline: none;

    &:active {
        background-color: ${props => props.theme.palette.colors.hover};
        transform: translateY(1px);

        &:after{
            visibility: hidden;
        }
    }

    position: relative;

    &:hover {
        background-color:${props => props.theme.palette.colors.hover};
        
        &:after {

            visibility: ${props => props.tooltip ? "visible" : "hidden"};
            position: absolute;
            margin-block-end: 3em;
            background: black;
            color: white;
            padding: 1em;
            margin-left: -1.5vw;

            @media (max-width: 699px) {
                visibility: hidden;
            }

            bottom: -7.5em;
            width: 15em; 
            height: fit-content;

            border-radius: ${props => props.theme.palette.sizes.borderRadius};
            content: ${props => `"${props.tooltip}"`};
            overflow: none;
        }
       
    }   

    &:disabled {
        background-color: ${props => props.theme.palette.colors.disabled};
        transform: none;

        p {
            color: gray;
        }

        @media (max-width: 700px) {
            display: none;
        }
    }
    
`

const Button = (props: {variant?: 'default' | 'alert' ,tooltip?:string | null, disabled?: any, onClick?: any, label?: string | null}) => {
    return (
        <ButtonStyle variant={props.variant} tooltip={props.tooltip} disabled={props.disabled} onClick={props.onClick}>
            <p>{props.label}</p>
        </ButtonStyle>
    )
}

export default Button;