import { AppBar, Toolbar, Typography } from "@mui/material"
import { ThemeMode } from "../../types/ThemeMode"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"

type Props = {
  themeMode: string,
  setThemeMode: (theme: ThemeMode) => void
}

const Header = ({ themeMode, setThemeMode }: Props) => (
  <AppBar position={'static'}>
    <Toolbar>
      <Typography variant={'h6'} component={'div'} sx={{ flexGrow: 1 }}>Moody Metrics</Typography>
      <ThemeSwitch themeMode={themeMode} setThemeMode={setThemeMode} />
    </Toolbar>
  </AppBar>
)

export default Header