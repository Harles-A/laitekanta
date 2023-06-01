import React from 'react';

function AddDeviceButton() {
  const handleAddDeviceClick = () => {
    console.log("Add Device button clicked");
  };

  return (
    <div className="AddDeviceButton-container">
      <button className="AddDeviceButton" onClick={handleAddDeviceClick}>
        Lisää Laite
      </button>
    </div>
  );
}

export default AddDeviceButton;
