import styled from "styled-components";

export const CardContainer = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    grid-gap: 1em;
    margin-block-start: 1em;

    // @media (min-width: 300px) and (max-width: 1024px){
    //     margin: 0.9em;
    // }

    // @media (min-width: 1024px){
    //     margin-inline-start: 1em;
    //     margin-inline-end: 1em;
    // }
`