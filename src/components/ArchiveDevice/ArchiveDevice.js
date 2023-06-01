import React from 'react';

function ArchiveDeviceButton() {
  const handleArchiveDeviceButton = () => {
    console.log("Archive Device button clicked");
  };

  return (
    <div className="ArchiveDeviceButton-container">
      <button className="ArchiveDeviceButton" onClick={handleArchiveDeviceButton}>
        Arkistoi Laite
      </button>
    </div>
  );
}

export default ArchiveDeviceButton;
