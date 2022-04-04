import { AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

const Header = () => (
  <AppBar position={'static'}>
    <Toolbar>
      <Link href='/' passHref>
        <Typography variant={'h6'} component={'div'} sx={{ flexGrow: 1 }} className={'cursor-pointer'}>Moody Metrics</Typography>
      </Link>
      <ThemeSwitch />
    </Toolbar>
  </AppBar>
)

export default Header