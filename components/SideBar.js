import SocialMedias from "./SocialMedias";
import ContactMe from "./ContactMe";

const sideContactBar = ({ transparent, animate, light, dark }) => {
  return (
    <div
      className={`h-100 container ${
        transparent
          ? dark
            ? "transparent text-light"
            : "transparent text-dark"
          : light
          ? "bg-light text-dark"
          : dark
          ? "bg-dark text-light"
          : "bg-success text-light"
      } ${
        animate ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""
      }`}
    >
      <ContactMe />
      <p className="text-muted mt-3">
        Send me a message and I will get back to you as soon as I can
      </p>
      <a href="/about#ContactForm">
        <button className="btn btn-outline-secondary btn-sm btn-block">
          Message
        </button>
      </a>
      <p className="mt-3 text-muted">
        Or you can also contact me via my social medias
      </p>
      <SocialMedias />
    </div>
  );
};

export default sideContactBar;
