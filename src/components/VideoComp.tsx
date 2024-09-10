const VideoComp = () => {
  return (
    <div className="relative min-h-[680px]  flex items-center z-10">
      <video
        src="/myVideo.mp4"
        muted
        autoPlay
        loop
        className="absolute inset-0 w-full h-full z-10 object-cover pointer-events-none"
        playsInline
      ></video>
      <div className="absolute inset-0 w-full h-full bg-black z-20 bg-opacity-40"></div>
      <div className="relative  z-30 max-w-xl w-full p-5 text-center mx-auto space-y-5">
        <h2 className="text-primary font-display font-black italic  text-4xl">
          About Us
        </h2>
        <p className="text-lg text-white">
          explore adult railroad lucky concerned higher happy excellent refer
          highest dropped sell feet ancient even avoid experiment fifth duck
          they means outer accurate position
        </p>
        {/* <button className="rounded-full  bg-primary text-brand-800 p-2 px-4 shadow inline-block font-bold">
          Play The Video
        </button> */}
      </div>
    </div>
  );
};

export default VideoComp;
