import { useContext } from "react";
import TextBox from "./TextBox";
import TextAreaContext from "../context/text-area-context";

const TransferArea = (props: {onKeyDown?: any}) => {
    const textAreaContext = useContext(TextAreaContext);
    const transfer = textAreaContext.textTransfer;

    return (

        <TextBox onKeyDown={(event) => props.onKeyDown(event)} disabled={transfer.locked} value={transfer.text} onChange={(event) => textAreaContext.setTextTransfer({ ...transfer, text: event.target.value })} />

    )
}

export default TransferArea;