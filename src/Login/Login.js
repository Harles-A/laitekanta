import React from 'react';

function LoginButton() {
  const handleLoginClick = () => {
    console.log("Login button clicked");
  };

  return (
    <div className="LoginButton-container">
      <button className="LoginButton" onClick={handleLoginClick}>
        Kirjaudu Sisään
      </button>
    </div>
  );
}

export default LoginButton;