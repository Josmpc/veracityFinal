import "../styles/globals.css";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomepage = router.pathname === "/";

  return (
    <div>
      {!isHomepage && <Navbar />}
      <Component {...pageProps} />
    </div>
  );
}
