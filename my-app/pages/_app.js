import '@/styles/globals.css'
import Nav from '@/components/Nav';
import Button from '@/components/Button';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav></Nav>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp;