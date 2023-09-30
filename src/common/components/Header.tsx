import styled from "styled-components";
import Title from "./Title";

const Header = () => {
    return (
        <HeadBackground>
            <HeadContent>
                <Title onClick={() => window.location.href = "/"}>Easy Tools</Title>
            </HeadContent>
        </HeadBackground>
    )
}

const HeadBackground = styled.div`
    background: #256D85;
    margin-block-end: auto;
    margin-block-start: auto;
    margin-block-end: 1em;

`

const HeadContent = styled.div`
    margin-inline-start: 1em;
    margin-inline-end: 1em;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;


    padding-block-start: .7em;
    padding-block-end: .7em;
    
    a {
        font-family: 'Hind Siliguri', sans-serif;
        color: white;
    }

    @media (min-width: 200px) and (max-width: 700px) {
        // h2 {
        // font-size: 1em;
        // }

        * {
            font-size:calc(10vw * .5);
        }
    }
    
`

export default Header;