import { useRef } from "react";

export default function ScrollToSection() {
  const cardRef = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
    {
      label: "third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "black",
      },
    },
  ];
  function handleScrollToSection() {
    let position = cardRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 3 ? cardRef : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
