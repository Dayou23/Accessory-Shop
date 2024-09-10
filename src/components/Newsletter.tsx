import SearchBar from "./SearchBar";
const Newsletter = () => {
  return (
    <section className="py-12 lg:py-16 bg-light-bg px-5 min-h-[360px] flex items-center flex-col">
      <div className="w-full max-w-lg mx-auto space-y-5 flex flex-col text-center justify-center">
        <h2 className="text-secondary font-black text-2xl">
          Join Our Newsletter Subscription
        </h2>
        <p className="text-secondary">
          Would you want to be informed about our latest releases, wedding
          blogging, and promotions? Enter your email address to register and
          stay in contact!
        </p>
        <div>
          <SearchBar typeBar="subscribe" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
