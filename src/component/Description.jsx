import blog from "../assets/search-1355847_1280.png";
const Description = () => {
  return (
    <div className=" text-gray-400">
      <div className="lg:p-4">
        <img src={blog} alt="" className="bg-cover" />
        <h1 className="lg:text-left">Description</h1>
        <hr className="w-4/5" />
        <p className="lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Description;
