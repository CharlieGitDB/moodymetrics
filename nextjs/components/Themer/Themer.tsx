import { Switch, ThemeProvider } from "@mui/material"
import { useState } from "react"
import darkTheme from "../../styles/theme/darkTheme"
import lightTheme from "../../styles/theme/lightTheme"

type ThemeMode = 'dark' | 'light'
type Props = {
  children: JSX.Element | JSX.Element[]
}

const Themer = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  const switchTheme = () => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      {children}
      <Switch checked={themeMode !== 'light'} onChange={switchTheme} />
    </ThemeProvider>
  )
}

export default Themer