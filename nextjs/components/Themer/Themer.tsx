import { ThemeProvider } from "@mui/material"
import darkTheme from "../../styles/theme/darkTheme"
import lightTheme from "../../styles/theme/lightTheme"

type Props = {
  children: JSX.Element | JSX.Element[],
  themeMode: string
}

const Themer = ({ children, themeMode }: Props) => (
  <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
    {children}
  </ThemeProvider>
)

export default Themer