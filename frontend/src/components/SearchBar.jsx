import { useState } from 'react';

const SearchBar = ({ searchPhotos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Update search term when the input changes
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Call searchPhotos when the form is submitted
  const handleSearch = () => {
    searchPhotos(searchTerm);
  };

  // Trigger search when the user presses Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Render the search bar
  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder="Search by username, location, or country"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} //Trigger search when the user presses Enter
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;