import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Moody Metrics</title>
    </Head>
    <main>
      <Button variant='contained'>Material Button</Button>
      <Button variant='contained' color="secondary">Material Button</Button>
    </main>
  </>
)

export default Home
