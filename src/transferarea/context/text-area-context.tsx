import React, { useState } from "react";
import TextTransfer from "../model/TextTransfer";

const DEFAULT_RESPONSE = {show: false, url: ""}

const TextAreaContext = React.createContext({
    textTransfer: new TextTransfer(false, '', '', null,  null, null),
    setTextTransfer: (textTransfer: TextTransfer) => {},
    loading: false,
    setLoading: (loading: boolean) => {},
    response: DEFAULT_RESPONSE,
    setResponse: (responseUrl: typeof DEFAULT_RESPONSE) => {},
    search: "",
    setSearch: (search: string) => {}
});

export const TextAreaContextProvider = (props: any) => {
    const [textTransfer, setTextTransfer ] = useState<TextTransfer>(new TextTransfer(false, '', '',  null,  null, null));
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<typeof DEFAULT_RESPONSE>(DEFAULT_RESPONSE);
    const [search, setSearch] = useState<string>("");

    return <TextAreaContext.Provider
        value={{
            textTransfer: textTransfer,
            setTextTransfer: setTextTransfer,
            loading: loading,
            setLoading: setLoading,
            response:response,
            setResponse:setResponse,
            search:search,
            setSearch:setSearch
        }}
    >{props.children}</TextAreaContext.Provider>;
}

export default TextAreaContext;