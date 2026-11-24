function SearchLead({ onSearch }) {

  function handleSearch(e) {
    onSearch(e.target.value);
  }

  return (
    <div>
      <input onChange={handleSearch} type="text" placeholder="search leads" />
    </div>
  );
}

export default SearchLead;
