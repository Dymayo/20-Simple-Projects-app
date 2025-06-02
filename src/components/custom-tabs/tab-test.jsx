import Tabs from "./tabs";
import "./tabs.css";

export default function TabTest() {
  const tabs = [
    {
      label: "Tab1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab3",
      content: <div>This is content for Tab 3</div>,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
