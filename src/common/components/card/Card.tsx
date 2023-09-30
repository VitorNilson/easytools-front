import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = (props: { image: any, description: string, link: any, disabled?: boolean}) => {
    const navigate = useNavigate();
    return (
        <CardWrapper disabled={props.disabled} onClick={() => navigate(props.link)}>
            <CardHead disabled={props.disabled} image={props.image} />
            <CardBody>
                <Content disabled={props.disabled} >
                    <p>{props.description}</p>
                </Content>
            </CardBody>
        </CardWrapper>
    )
}

const Content = styled.div<{disabled?: boolean}>`
    margin-inline-start: 1em;
    margin-inline-end: 1em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    // ${props => props.disabled ? "p {color: gray;}":""}
`

const CardHead = styled.div <{ image: any, disabled?: boolean }>`
    background-origin: content-box;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    background: ${props => props.disabled ? "#F8F8F8;" : "#F1F1F1;"}
    background-image: url(${props => props.image});
    border-top-left-radius: ${props => props.theme.palette.sizes.borderRadius};
    border-top-right-radius: ${props => props.theme.palette.sizes.borderRadius};
`

const CardBody = styled.div`
    margin-inline-end: 20em;
    position: absolute;
    top: 50;
    width: 100%;
    height: 30%;
    background-color: white;
`

const CardFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 19%;
`

const CardWrapper = styled.div<{disabled?: boolean}>`
    position: relative;
    padding: 6em 0em;
    border: 1px solid ${props => props.disabled ? "#F3EFE0" : props.theme.palette.colors.border};
    border-radius: ${props => props.theme.palette.sizes.borderRadius};
    width: 100%;

    ${props => props.disabled ? " * {color: gray;}":""}

    &:hover{
        // background: ${props => !props.disabled ? "#F3F4F6;" :"" }
        box-shadow: ${props => !props.disabled ? "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;" :"" }
    }

    
`

export default Card;