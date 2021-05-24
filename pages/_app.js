import "bootswatch/dist/pulse/bootstrap.min.css";
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";

import Flash from "../components/Flash";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Flash />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
