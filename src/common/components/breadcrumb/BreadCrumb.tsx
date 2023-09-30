import styled from "styled-components";

export const BreadCrumb = styled.ul`
    display: flex;
    justify-content: flex-start;
    padding-inline-start: 0;
    font-size: .9em;

    margin-block-end: 1em;

    li+li:before {
        padding-inline-end: .3em;
        color: black;
        font-size: .8em;
        margin: auto 0;
        content: ">";
    }
`

