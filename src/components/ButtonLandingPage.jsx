import React from "react";

function ButtonLandingPage(props) {
  const { mode } = props;

  let buttonStyle;
  if (mode === "light") {
    buttonStyle = { ...Styles.default, ...Styles.light };
  } else {
    buttonStyle = { ...Styles.default, ...Styles.dark };
  }

  return (
    <button
      style={buttonStyle}
      type="button"
    >
      Click Me!
    </button>
  );
}

const Styles = {
  default: {
    padding: '20px 0',
    width: '100%',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '20px',
  },
  dark: {
    color: '#fff',
    backgroundColor: '#C4C4C4',
  },
  light: {
    color: '#938F8F',
    backgroundColor: '#fff',
    border: '1px solid #938F8F'
  }
};

export default ButtonLandingPage;
