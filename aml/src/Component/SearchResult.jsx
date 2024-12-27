import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../StyleSheet/SearchResult.css';

// Import the image using ES6 import syntax
import warningIcon from '../assets/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332-removebg-preview.png';

const SearchResult = ({ name }) => {
  console.log('SearchResult name:', name); // Log the name to verify it's being received

  // Markdown content for the search-placeholder
  const markdownContent = `
  - *Findings:*  
    Alexander Mercer holds the position of Senior Advisor to the Minister of Trade and Industry in the Republic of Valoria. He is a prominent member of the Progressive Alliance Party, exerting considerable influence over trade policies and economic reforms. Mercer has been instrumental in negotiating several free trade agreements that have significantly impacted Valoria's economy.  
    *No spouse or familial political connections* have been identified in the available data.

  - *Risks Identified:*
  `;

  return (
    <div className="search-result">
      <div className="search-section-padding">
        <div className="search-section">
          <h1 className="name-title">Search Result for: {name}</h1>
        </div>

        <div className="description-container">
          <img 
            src={warningIcon} 
            alt="Warning" 
            className="warning-icon"
          />
          <p className="description-text">
            3
          </p>
        </div>
      </div>

      <div className="search-bars">
        <div className="description-bar">
          <div className="search-frame">
            <ReactMarkdown className="search-placeholder">
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
