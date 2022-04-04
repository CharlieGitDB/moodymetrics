import { Check } from '@mui/icons-material'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { withIronSessionSsr } from 'iron-session/next'
import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import { sessionOptions } from '../lib/session-options'

const Profile = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Head>
      <title>Moody Metrics - {user?.username} Profile</title>
    </Head>
    <main>
      <Header />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Confirmed</TableCell>
              <TableCell>Blocked</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>{user?.username}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.confirmed ? <Check /> : ''}</TableCell>
              <TableCell>{user?.blocked ? <Check /> : ''}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  </>
)

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user

  if (user === undefined) {
    res.setHeader('location', '/')
    res.statusCode = 302
    res.end()
    return {
      props: {
        user: undefined,
      },
    }
  }

  return {
    props: {
      user: req.session.user
    }
  }
}, sessionOptions)

export default Profile