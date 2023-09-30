import { useContext } from "react"
import Container from "../common/components/Container"
import Footer from "../common/components/Footer"
import Header from "../common/components/Header"
import { Option, Select } from "../common/components/Select"
import { BreadCrumb } from "../common/components/breadcrumb/BreadCrumb"
import BreadCrumbItem from "../common/components/breadcrumb/BreadCrumbItem"
import Button from "../common/components/button/Button"
import ButtonArea from "../common/components/button/ButtonArea"
import TextBox from "../transferarea/components/TextBox"
import Base64EncoderDecoderContext from "./context/base64-context"

const Base64EncoderDecoder = () => {

    const context = useContext(Base64EncoderDecoderContext);

    const handleButtonClick = () => {
        if(context.selected === "Encoder")
            context.setOutput(btoa(context.input))
        else
            context.setOutput(atob(context.input))
    }


    return (
        <>
            <Header />
            <Container>

                <BreadCrumb>
                    <BreadCrumbItem link="/" label="Home" />
                    <BreadCrumbItem current label="Base64 Encoder / Decoder" />
                </BreadCrumb>


                <ButtonArea style={{ marginBottom: "1em" }}>
                    
                    <Select onChange={(e) => context.setSelected(e.target.value)} value={context.selected} style={{ marginInlineEnd: "1em" }}>
                        {context.options.map((option, index) => <Option key={option} value={option}>{option}</Option>)}
                    </Select>


                    <Button onClick={handleButtonClick} label={context.selected === "Encoder" ? "Encode" : "Decode"} />
                    <Button onClick={() => navigator.clipboard.writeText(context.output)} label="Copy result" />
                </ButtonArea>

                <div>
                    <div style={{ marginBottom: "1em" }}>
                        <label htmlFor="input">Enter your text here:</label>
                        <TextBox id="input" value={context.input} onChange={(e) => context.setInput(e.target.value)} style={{ height: "15em" }} />
                    </div>

                    <div>
                        <label htmlFor="output">Output:</label>
                        <TextBox id="output" value={context.output} onChange={(e) => context.setOutput(e.target.value)} style={{ height: "15em" }} disabled />
                    </div>
                </div>


            </Container>

            <Footer />
        </>
    )
}

export default Base64EncoderDecoder;