import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexGenerator() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRgbGenerator() {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleRgbGenerator();
    else handleHexGenerator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfColor]);

  console.log(color, typeOfColor);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Hex color</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleHexGenerator : handleRgbGenerator
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
