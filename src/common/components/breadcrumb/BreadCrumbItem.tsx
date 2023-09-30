import styled from "styled-components";

const BreadCrumbItem = (props: {label: string, current?: boolean, link?: string, }) => {

    return (
        <BreadCrumbItemWrapper >
            <Anchor current={props.current ?? false} href={props.link}>{props.label}</Anchor>
        </BreadCrumbItemWrapper>
    )
}

const BreadCrumbItemWrapper = styled.li`
    display: flex;
    justify-content: space-between;
    margin-inline-end: .5em;
`

const Anchor = styled.a <{current: boolean}>`
    ${props => props.current ? " pointer-events: none;" : ""}
    ${props => props.current ? " color: black;" : "color: blue;"}
    ${props => props.current ? " text-decoration: none;" : ""}
`

export default BreadCrumbItem;