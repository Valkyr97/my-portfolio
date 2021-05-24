import Row from "./Row";
import Col from "./Col";
import ContactMe from "./ContactMe";
import SocialMedias from "./SocialMedias";
import { sendFlash } from "./Flash";

const contactForm = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, message, phone } = e.target;

    const res = await fetch("/api/send-mail", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        mail: email.value,
        message: message.value ? message.value : "Put in contact",
        phone: phone.value ? phone.value : "",
      }),
      method: "POST",
    });
    const { alert, success } = await res.json();
    sendFlash(alert, success);
    document.getElementById('ContactForm').reset();
  };

  return (
    <Row>
      <div className="col-md-12 py-2">
        <div className="card p-2 bg-light">
          <Row>
            <Col col={4}>
              <div className="container text-center bg-success text-dark h-100">
                <ContactMe />
                <p className="my-4 h4">See me in my Social Medias</p>
                <SocialMedias />
              </div>
            </Col>
            <Col col={8}>
              <form id="ContactForm" onSubmit={handleClick}>
                <fieldset>
                  <legend>Send me a message</legend>
                  <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email address*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="optional"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="I would like to get in touch with you"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-secondary btn-block">
                    Send
                  </button>
                </fieldset>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  );
};

export default contactForm;
