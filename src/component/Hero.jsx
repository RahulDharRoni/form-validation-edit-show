const Hero = () => {
  return (
    <div className="flex flex-col sm:justify-center p-5">
      <h1 className="text-[50px] text-white font-serif">
        Developed By{" "}
        <span className="text-yellow-300 font-extrabold p-2">
          Rahul Dhar Roni
        </span>
      </h1>
      <p className="text-left text-white font-serif p-2 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <button className="w-32 rounded-full bg-red-500 shadow-lg shadow-cyan-500/50 ml-2">
        Subscribe
      </button>
    </div>
  );
};

export default Hero;
