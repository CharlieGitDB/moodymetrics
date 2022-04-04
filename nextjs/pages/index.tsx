import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header/Header'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Moody Metrics</title>
    </Head>
    <main>
      <Header />
      <Button variant='contained'>Material Button</Button>
      <Button variant='contained' color="secondary">Material Button</Button>
      <Link href='/profile' passHref>
        <Button variant='outlined'>Go to props</Button>
      </Link>
    </main>
  </>
)

export default Home
