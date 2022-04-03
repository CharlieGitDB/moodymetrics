import { NightsStay, WbSunny } from '@mui/icons-material'
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
        {themeMode === 'dark' ? <WbSunny /> : <NightsStay />}
      </span>
    </>
  )
}

export default ThemeSwitch