import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

function about({ topics }) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <Navbar topics={topics} />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="h-64 w-full justify-center flex">
          <img src="/about.png" className="h-64" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
          Hi,{" "}
          <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500">
            I’m Jenish Mariyajerald
          </span>{" "}
          . Nice to meet you.
        </h2>
        <p className="text-gray-600 mt-4 dark:text-indigo-200">
          I am a self taught developer. My field of Interest's are building new Web & Mobile
          Technologies and Products and also in areas related to Deep Learning
          and Natural Launguage Processing.
        </p>

      </div>
      <Footer />
    </div>
  );
}

export default about;
