import React, { useState } from 'react';
import '../StyleSheet/MainInterface.css'; // Import the CSS file
import ChatBot from './ChatBot'; // Import the ChatBot component
import MainLayout from './MainLayout'; // Import the MainLayout component
import LeftBar from './LeftBar'; // Import the LeftBar component

const MainInterface = ({ searchParams, handleInputChange, saveData: externalSaveData }) => {
  const [isSearchResult, setIsSearchResult] = useState(false);
  const [savedItems, setSavedItems] = useState([]); // Define the savedItems state

  const handleSaveData = (data) => {
    // Add the new data to the savedItems list
    setSavedItems((prevItems) => [...prevItems, data]);
    // Set the state to show the SearchResult
    setIsSearchResult(true);
    // Optionally call the external saveData function if needed
    if (externalSaveData) {
      externalSaveData(data);
    }
  };

  const toggleState = () => {
    setIsSearchResult(!isSearchResult);
  };

  return (
    <div className="main-interface">
      <div className="login-section">
        <img 
          src="https://dashboard.codeparrot.ai/api/assets/Z2nNMY6CYQNjI8Wf" 
          alt="Login" 
          className="login-image" 
        />
      </div>
      <MainLayout>
        <ChatBot 
          submitted={isSearchResult}
          searchParams={searchParams}
          handleInputChange={handleInputChange}
          saveData={handleSaveData}
        />
      </MainLayout>
      {/* Add other features like dashboard, save to PDF, etc. here */}
    </div>
  );
};

export default MainInterface;
