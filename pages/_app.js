import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';

export default function App({ Component, pageProps }) {
  
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
      tawkMessengerRef.current.minimize();
  };

  return (   
    <>    
    <Navbar/>

      <Component {...pageProps} />
      
      <TawkMessengerReact
                propertyId="63f1c0224247f20fefe16000"
                widgetId="1gpk5d29r"/>
      <Footer/>
    </>
  )
  
}
