import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import Themer from '../components/Themer/Themer'
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch'
import '../styles/globals.css'
import { ThemeMode } from '../types/ThemeMode'
import createEmotionCache from '../util/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Themer themeMode={themeMode}>
        <AppBar position={'static'}>
          <Toolbar>
            <Typography variant={'h6'} component={'div'}>Moody Metrics</Typography>
            <ThemeSwitch themeMode={themeMode} setThemeMode={setThemeMode} />
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <Component {...pageProps} />
      </Themer>
    </CacheProvider>
  )
}

export default MyApp
