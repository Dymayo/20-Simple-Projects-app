import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      {tabsContent.map((tabItem, index) => (
        <div key={tabItem.label} onClick={() => handleOnClick(index)}>
          <span className="label">{tabItem.label}</span>
        </div>
      ))}

      <div className="content" style={{ color: "blue" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
