import Layout from "../components/Layout";
import { useRouter } from "next/router";

const $404 = () => {
  const router = useRouter();
  return (
    <Layout sideBar={false}>
      <div className="text-center">
        <h2>Error 404:</h2>
        <p className="h5">Could not find this page</p>
        <button onClick={() => {router.back()}} className="btn btn-outline-secondary">
          Go back
        </button>
      </div>
    </Layout>
  );
};

export default $404;
