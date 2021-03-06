import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import ThemeContextProvider from '../components/ThemeContextProvider/ThemeContextProvider'
import Themer from '../components/Themer/Themer'
import '../styles/globals.css'
import { ThemeMode } from '../types/ThemeMode'
import createEmotionCache from '../util/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light')


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeContextProvider>
        <Themer>
          <CssBaseline />
          <Component {...pageProps} />
        </Themer>
      </ThemeContextProvider>
    </CacheProvider>
  )
}

export default MyApp
