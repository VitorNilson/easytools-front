import React, { useState } from "react";


const DEFAULT_RESPONSE = {show: false, url: ""}

const OPTIONS= ["Encoder", "Decoder"]

const Base64EncoderDecoderContext = React.createContext({
    selected: OPTIONS[0],
    setSelected: (selected: typeof OPTIONS[0]) => {},
    input: "",
    setInput: (input: string) => {},
    output: "",
    setOutput: (output: string) => {},
    options: OPTIONS
});

export const Base64EncoderDecoderContextProvider = (props: any) => {
    const [selected, setSelected] = useState<string>(OPTIONS[0]);
    const [input,  setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    return <Base64EncoderDecoderContext.Provider
        value={{
            selected: selected,
            setSelected: setSelected,
            options: OPTIONS,
            input:input,
            setInput:setInput,
            output:output,
            setOutput:setOutput
        }}
    >{props.children}</Base64EncoderDecoderContext.Provider>;
}

export default Base64EncoderDecoderContext;