import Link from "next/link";
import Layout from "../components/Layout";

const Principal = () => (
  <Layout
    title="Principal"
    transparent
    imgUrl="/desktop.jpg"
    blur={1}
    animation
    navBarIn
    sideBarIn
    dark
  >
    <div className="row justify-content-center col-md-10 offset-md-1 min-vh-100">
      <div
        className="card card-body transparent text-white justify-content-start mt-5"
        style={{ border: "none" }}
      >
        <h1 className="card-title display-3 animate__animated animate__fadeIn">
          Hi,
        </h1>
        <h2 className="card-text display-4 animate__animated animate__fadeIn animate__delay-1s">
          I'm Janyel,
        </h2>
        <h2 className="display-4 animate__animated animate__fadeIn animate__delay-2s">
          Web Developer
        </h2>
        <h4 className="animate__animated animate__fadeIn animate__delay-3s text-warning">
          <small>Junior Full Stack</small>
        </h4>
      </div>
      <div className="row align-items-center animate__animated animate__fadeInUp animate__delay-2s">
        <p className="text-center text-white">
          A little about me: I love challenges. I love solving problems in the
          most efficient and elegant way. Progaming is the game in my live, is
          my passion.
        </p>
      </div>
      <div>
        <Link href="about#ContactForm">
          <button
            className="btn btn-outline-primary btn-lg text-light animate__animated animate__fadeInUp animate__delay-2s"
            style={{ backdropFilter: "blur(30px)" }}
          >
            We Can Make The Web
          </button>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Principal;
