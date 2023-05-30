
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose'
import Timer from './Timer'
import Image from './Image';
import styles from './page.module.css'

// import { useState } from 'react';

// const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });


const secret = new TextEncoder().encode(
  'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
)
const alg = 'HS256'

const issuer = 'urn:example:issuer'
const audience = 'urn:example:audience'

export default async function Home(props) {
  const cookieStore = cookies();
  let token = cookieStore.get('waldo')?.value
  let start = new Date().getTime()
  if (token) {
    const { payload, protectedHeader } = await jwtVerify(token, secret, {
      issuer,
      audience,
    })
    start = payload.start
  }
  
  console.log(start)
  return (
    <>
      <header className={styles.Timer}>Timer: <Timer {...{ start }}/></header>
      <Image/>
    </>
  )
}
//coords='829,956,986,1073'

// export async function getServerSideProps(context) {
//   const { start } = context.req;
//   console.log({start})
//   return { props: { start } }
// }