"use client";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Form() {
  const handleGoogle = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };

  const handleYoutube = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    const url = `https://www.youtube.com/search?search_query=${encodeURIComponent(
      query
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <form className="text-center mt-32">
        <input
          type="text"
          name="query"
          className="glass-navbar h-12 w-[35%] outline-none bg-transparent border border-gray-500 focus:ring-1 mb-6 px-4 rounded-full text-white"
          // placeholder={{<FontAwesomeIcon icon={faSearch} /> Search...}}
        />
        <div className="flex gap-2 justify-center items-center">
          <button type="submit" onClick={handleGoogle} className="h-10 px-4 rounded-full text-white bg-blue-500 font-semibold">
            Google
          </button>
          <button type="submit" onClick={handleYoutube} className="h-10 px-4 rounded-full text-white bg-red-500 font-semibold">
            YouTube
          </button>
        </div>
      </form>

      {/* <form onSubmit={handleYoutube} className="my-16 text-center">
        <input id="youtube" type="text" name="query" className="h-10 w-96 text-black px-4 outline-none bg-transparent border border-gray-400" placeholder="YouTube"/>
        <button type="submit" className="h-10 px-4 text-white bg-red-500">Search</button>
      </form> */}
    </>
  );
}