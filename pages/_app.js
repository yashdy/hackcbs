import '../styles/globals.css'
import Navbar from '../components/Navbar'
import "../styles/globals.css";
import { WalletConnectProvider } from "../components/WalletConnectProvider"
import "@solana/wallet-adapter-react-ui/styles.css";
function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectProvider>
      <Navbar />
      <Component {...pageProps} />
    </WalletConnectProvider>
  )
}

export default MyApp
