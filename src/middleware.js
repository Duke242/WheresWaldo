import { NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(
  'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
)

const issuer = 'urn:example:issuer'
const audience = 'urn:example:audience'

const alg = 'HS256'
 
export async function middleware(request) {
  let token = request.cookies.get('waldo')?.value
  const response = NextResponse.next();

  if (!token) {
    const payload = { start: new Date().getTime() };
    token = await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime('2h')
    .sign(secret)

    response.cookies.set('waldo', token);
  }
  // console.log(token)
  

  // request.start = new Date(payload.start); 

  // Setting cookies on the response using the `ResponseCookies` API
  

 
  return response;
}