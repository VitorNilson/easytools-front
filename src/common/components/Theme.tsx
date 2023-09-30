import { ThemeProvider } from "styled-components"

const theme: {} = {

    palette: {
        colors: {
            header: "#256D85",
            font: "#00171f",
            disabled: "#F6F6F6",
            hover: "#F6F6F6",
            border: "#D0D0D0"
        },

        sizes: {
            borderRadius: "6px",
        }
    }
}

export const Theme = ({ children }: any) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);