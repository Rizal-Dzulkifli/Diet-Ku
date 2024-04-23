import React, { useState } from "react";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";

const Styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  default: {
    backgroundColor: '#80DCF9',
    color: '#4AB6C5',
    width: '50%',
    padding: '0.7em 0',
    fontSize: '1.5em',
    borderRadius: '0.5em 0.5em 0 0',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  active: {
    backgroundColor: '#4AB6C5',
    color: '#fff',
    padding: '1em 0',
  }
};

function TabLandingPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  const getTabStyle = (tabKey) => {
    return tabKey === activeTab ? { ...Styles.default, ...Styles.active } : Styles.default;
  };

  return (
    <div>
      <div style={Styles.container}>
        <button
          onClick={() => handleTabClick(1)}
          style={getTabStyle(1)}
        >
          Masuk
        </button>
        <button
          onClick={() => handleTabClick(2)}
          style={getTabStyle(2)}
        >
          Daftar
        </button>
      </div>
     
      {activeTab === 2 && <FormSignUp triggerEvent={handleTabClick} />}
    </div>
  );
}

export default TabLandingPage;
