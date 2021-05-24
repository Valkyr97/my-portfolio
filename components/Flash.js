import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Bus from "../utils/Bus";

export function sendFlash(message, type) {
  Bus.emit("flash", { message, type });
}

const Flash = () => {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    Bus.addListener("flash", ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);
    });
  }, []);

  return (
    visibility && (
      <div
        className="flash position-fixed d-flex align-items-center animate__animated animate__fadeIn"
        style={{ height: "100vh", width: "100%", zIndex: "10", backdropFilter:'brightness(20%)'}}
      >
        <Alert
          className="col-md-4 offset-4"
          show={visibility}
          variant={type}
          onClose={() => {
            setVisibility(false);
          }}
          dismissible
        >
          <p>{message}</p>
        </Alert>
      </div>
    )
  );
};

export default Flash;
