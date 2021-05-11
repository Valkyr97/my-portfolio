import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import NProgress from "nprogress";

import Nav from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "My portfolio",
  sideBar = true,
  sideBarIn = false,
  transparent = false,
  imgUrl = {},
  blur = 0,
  animation = false,
  navBarIn = false,
  light = false,
  dark = false,
  footer = true,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div
      className={`${dark ? "bg-dark" : light ? "bg-light" : ""} ${
        animation ? `animate__animated animate__fadeIn` : ""
      }`}
      style={{
        background: `url(${imgUrl}) no-repeat center center/cover`,
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Nav
        transparent={transparent}
        animate={navBarIn}
        light={light}
        dark={dark}
        sidebar={sideBar}
      />
      {sideBar && (
        <div className="sidebar h-100 col-md-2 position-fixed fixed-top pt-4 mt-5 text-center">
          <SideBar
            transparent={transparent}
            animate={sideBarIn}
            light={light}
            dark={dark}
          />
        </div>
      )}
      <div style={{ backdropFilter: `blur(${blur}px)` }}>
        <div className="container px-5">{children}</div>
        {footer && (
          <Footer transparent={transparent} dark={dark} light={light} />
        )}
      </div>
    </div>
  );
};

export default Layout;
