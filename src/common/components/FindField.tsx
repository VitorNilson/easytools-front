import { ChangeEventHandler } from "react"
import styled from "styled-components"
import TextInput from "./TextInput"
import {ReactComponent as SearchIcon} from "../assets/search-icon.svg"

const FindField = (props: {onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> ,  placeholder?: string, value?: any, onChange?: ChangeEventHandler<HTMLInputElement> }) => {

    return (
        <FindWrapper >
            <TextInput onKeyDown={props.onKeyDown} value={props.value} onChange={props.onChange} placeholder={props.placeholder} style={{ border: 'none' }} />
            <SearchIcon style={{ color: "#0A2647", width:"1em", height: "1em" }} />
        </FindWrapper>
    )
}

const FindWrapper = styled.div`
    border: 1px solid ${props => props.theme.palette.colors.border};
    border-radius: ${props => props.theme.palette.sizes.borderRadius};
    width: fit-content;
    padding-inline-end: .5em;
    display: flex;
    align-items: center;
  
`

export default FindField;