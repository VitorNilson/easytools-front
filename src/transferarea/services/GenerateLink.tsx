import { useContext } from "react";
import { post, put } from "../../common/network/Network";
import TextAreaContext from "../context/text-area-context";
import TextTransfer from "../model/TextTransfer";


export const generateLink = async (transferAreaId: string | undefined, textTransfer: TextTransfer, setLoading: Function, handleSuccess: Function, handleError: Function) => {
    if(transferAreaId)
        put(`/transfer-area/${transferAreaId}`, textTransfer, handleSuccess, handleError)
    else
        post('/transfer-area', textTransfer, handleSuccess, handleError)
}