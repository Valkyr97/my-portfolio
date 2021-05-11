import Layout from "../components/Layout";
import Row from '../components/Row'

const Github = (props) => {
  return (
    <Layout title={`${props.nick} github page`} light footer={false}>
      <Row>
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center bg-light">
            <h1> {props.nick} </h1>
            <img src={props.avatar} />
            <div className="card-footer">
              <p>{props.bio}</p>
            </div>
            <a href={props.link} target="_blank">
              <button className="btn btn-block btn-outline-secondary">
                My Github profile
              </button>
            </a>
          </div>
        </div>
      </Row>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/valkyr97");
  const data = await res.json();

  return {
    props: {
      nick: data.login,
      avatar: data.avatar_url,
      link: data.html_url,
      bio: data.bio,
    },
  };
}

export default Github;
