import { NightsStay, WbSunny } from '@mui/icons-material'
import { Fade } from '@mui/material'
import { ThemeMode } from '../../types/ThemeMode'

type Props = {
  themeMode: string,
  setThemeMode: (theme: ThemeMode) => void
}

const ThemeSwitch = ({ themeMode, setThemeMode }: Props) => {
  const switchTheme = () => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')

  return (
    <>
      <span onClick={switchTheme} className="cursor-pointer">
        {themeMode === 'dark' ? <Fade in={true}><WbSunny /></Fade> : <NightsStay />}
      </span>
    </>
  )
}

export default ThemeSwitch