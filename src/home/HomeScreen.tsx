import { useEffect, useState } from "react";
import Card from "../common/components/card/Card";
import { CardContainer } from "../common/components/card/CardContainer";
import Container from "../common/components/Container";
import FindField from "../common/components/FindField";
import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import data from "./assets/tools.json"

const HomeScreen = () => {

    const doFilter = (filter: string) => {
        return data.tools
        .filter(tool => tool.description.toUpperCase().match(filter.toUpperCase()))
        .sort((x, y) => Number(x.disabled ) - Number(y.disabled))
        .map((tool: any) => {
            return <Card key={tool.id} description={tool.description} link={tool.link} image={tool.image} disabled={tool.disabled} />
        })
    }


    const [tools, setTools] = useState<any[]>(doFilter(""));
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        setTools(doFilter(filter))
    }, [filter])

    useEffect(() => { }, [tools])

    return (
        <>
            <Header />
            <Container>
                <FindField placeholder="Filter" value={filter} onChange={(event) => setFilter(event.target.value)} />
                <CardContainer>
                    {tools}
                </CardContainer>
            </Container>
            <Footer />
        </>
    )
}

export default HomeScreen;