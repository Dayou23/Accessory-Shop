"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
type typeBarProps = {
  typeBar?: "subscribe" | "search";
};

const SearchBar = ({ typeBar }: typeBarProps) => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center rounded-md bg-[#ae7f582c] flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        className="w-full h-[40px] p-[12px] bg-transparent  outline-none flex-1 focus:bg-transparent"
        placeholder={typeBar === "search" ? "search..." : "Email Address"}
      />
      <div className="w-12 flex items-center justify-center h-[40px] ">
        {typeBar === "search" && (
          <Image
            src="/search.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer "
          />
        )}
        {typeBar === "subscribe" && (
          <Image
            src="/_email.png"
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
          />
        )}
      </div>
    </form>
  );
};

export default SearchBar;
