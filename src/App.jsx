import "./App.css";
import Description from "./component/Description";
import Footer from "./component/Footer";
import ShowData from "./component/ShowData";
import FormSection from "./component/formSection";
import Hero from "./component/hero";

function App() {
  return (
    <div>
      {/* //header */}
      <div className="bg-[url('./assets/bannerhome.jpg')] w-full h-full  bg-no-repeat bg-cover shadow-inner bg-fixed">
        <div className="lg:flex justify-center items-center">
          {/* hero section */}
          <div className="lg:w-2/3 w-full flex flex-col">
            <Hero />
          </div>
          {/* form  */}
          <div className="lg:w-1/3 py-5 flex items-center my-10 justify-center ">
            <FormSection />
          </div>
        </div>
      </div>
      {/* show Data Section */}
      <div className="my-5 lg:flex ">
        {/* data show  */}
        <div className="lg:w-4/6 lg:flex lg:justify-center">
          <ShowData />
        </div>
        {/* description start */}
        <div className="lg:w-2/6 lg:flex lg:flex-col lg:px-4 m-2 bg-blue-900 py-3">
          <h1 className="mb-3 font-serif text-white font-bold">Blog</h1>
          <Description />
        </div>
      </div>

      {/* showdata */}
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
