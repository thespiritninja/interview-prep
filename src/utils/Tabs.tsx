import React, { useState } from "react";
import Tab from "./Tab";
import "../App.css";

const Tabs = ({ tabs }: { tabs: React.ReactElement[] }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index + 1);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.key ? tab.key : "Tab" + index}
            onClick={() => handleTabClick(index)}
            isActive={index + 1 === activeTab}
          />
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab - 1]}</div>
    </div>
  );
};

export default Tabs;
