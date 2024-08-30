import SearchBar from "./SearchBar";

const Newsletter = () => {
  return (
    <section className="py-12 lg:py-16 bg-light-bg px-5 min-h-[360px] flex items-center">
      <div className="w-full max-w-lg mx-auto space-y-5 flex flex-col text-center justify-center">
        <h2 className="text-secondary font-black text-2xl">
          Sign Up To Our Newsletter
        </h2>
        <p className="text-secondary">
          Want to keep up to date with our brand new launches, wedding blogs and
          offers? Sign up with your email here to keep in touch!
        </p>
        <div className="p-5  ">
          <SearchBar typeBar="subscribe" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
