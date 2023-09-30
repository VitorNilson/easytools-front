import { useContext, useEffect, useState } from "react";
import BreadCrumbItem from "../common/components/breadcrumb/BreadCrumbItem";
import Button from "../common/components/button/Button";
import Container from "../common/components/Container";
import TransferArea from "./components/TransferArea";
import TextAreaContext from "./context/text-area-context";
import { generateLink } from "./services/GenerateLink";
import { BreadCrumb } from "../common/components/breadcrumb/BreadCrumb";
import Header from "../common/components/Header";
import ButtonArea from "../common/components/button/ButtonArea";
import Spinner from "../common/components/Spinner";
import Footer from "../common/components/Footer";
import FindField from "../common/components/FindField";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../common/network/Network";
import TextTransfer from "./model/TextTransfer";

const ONE_SECOND = 1000;

const TransferAreaScreen = () => {

  const { transferAreaId } = useParams();
  const navigate = useNavigate();
  const textAreaContext = useContext(TextAreaContext);

  useEffect(() => {
    if (transferAreaId) {
      doGet(transferAreaId);
    }
  }, [])

  const doGet = (id: string) => {
    get(`/transfer-area/${id}`, handleGetSuccess, handleGetError)

  }
  useEffect(() => { }, [textAreaContext.textTransfer])

  useEffect(() => {
    let timerId = setTimeout(() => {
      if (textAreaContext.search.length > 1 && textAreaContext.search != transferAreaId)
        window.location.href = `/copy-paste/${textAreaContext.search.trim()}`;
    }, ONE_SECOND)

    return () => clearTimeout(timerId);
  }, [textAreaContext.search])

  const handleGetSuccess = async (response: Promise<Response>) => {
    let json: any = await (await response).json();
    textAreaContext.setTextTransfer(new TextTransfer(json.locked, json.text, "", json.createdAt, json.updatedAt, json.lockedAt))
  }

  const handleGetError = async (response: Promise<Response>) => {
    
  }

  const handleGenerateLinkClick = async () => {
    textAreaContext.setLoading(true);
    generateLink(transferAreaId, textAreaContext.textTransfer, textAreaContext.setLoading, handleCreationSuccess, handleCreationError)
  }

  const handleCreationSuccess = async (response: Promise<Response>) => {
    textAreaContext.setLoading(false);
    if (transferAreaId) {
      window.location.href = `/copy-paste/${transferAreaId}`;
    }else{
      let location: string = (await response).headers.get("Location") ?? ""
      let id: string = location.substring(location.lastIndexOf("/") + 1);
      textAreaContext.setResponse({show: true, url:id});
      textAreaContext.setSearch(id);
      navigate(`/copy-paste/${id}`)
    }
  }

  const handleCreationError = async (response: Promise<Response>) => {

  }

  const handleFindFieldKeyDown = (event: React.KeyboardEvent<HTMLInputElement> ) => {
     if(event.key === 'Enter'){
      doGet(textAreaContext.search);
     }
  }

  const handleLockUnlockClick = () => {
    if(!transferAreaId){
      textAreaContext.setTextTransfer({ ...textAreaContext.textTransfer, locked: !textAreaContext.textTransfer.locked })
    }
    else if(transferAreaId && !textAreaContext.textTransfer.lockedAt){
      textAreaContext.setTextTransfer({ ...textAreaContext.textTransfer, locked: !textAreaContext.textTransfer.locked })
    }else if(transferAreaId && textAreaContext.textTransfer.lockedAt){
      alert("It's not implemented Yet.")
    }
  }

  return (
    <>
      <Header />
      <Container>

        <BreadCrumb>
          <BreadCrumbItem link="/" label="Home" />
          <BreadCrumbItem current label="Copy Paste" />
        </BreadCrumb>

        <ButtonArea>
          {textAreaContext.textTransfer.lockedAt && <Button variant="alert"  label="New" onClick={() => window.location.href = '/copy-paste'} />}
          <Button label="Clean" disabled={textAreaContext.textTransfer.locked} onClick={() => textAreaContext.setTextTransfer({ ...textAreaContext.textTransfer, text: '' })} />
          <Button tooltip={!textAreaContext.textTransfer.locked ? "Once locked and saved, you can't unlock." : null} disabled={textAreaContext.textTransfer.lockedAt} label={textAreaContext.textTransfer.locked ? "Unlock" : "Lock"} onClick={handleLockUnlockClick} />
          <Button disabled={textAreaContext.textTransfer.lockedAt} label={!transferAreaId ? "Generate Link" : "Update"} onClick={handleGenerateLinkClick} />

          {textAreaContext.loading && <Spinner />}

          <FindField onKeyDown={(event) => handleFindFieldKeyDown(event)} onChange={(event) => textAreaContext.setSearch(event.target.value)} value={textAreaContext.search} placeholder="I have a code" />&nbsp; &nbsp; 
          {textAreaContext.response.show &&<div style={{display: "flex", alignItems: "center"}}></div>}

        </ButtonArea>

        <TransferArea />
      </Container>
      <Footer />
    </>

  );
}

export default TransferAreaScreen;