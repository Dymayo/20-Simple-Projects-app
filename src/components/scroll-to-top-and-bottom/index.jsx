import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  if (error) {
    return <h1>error occured !</h1>;
  }
  if (pending) {
    return <h1>Loading please wait</h1>;
  }
  return (
    <div>
      <h1>Scroll to Top and Bottom feature</h1>
      <h3>this is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to the bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>scroll to top</button>
      <div ref={bottomRef}></div>
      <h3>this is the bottom of the page</h3>
    </div>
  );
}
