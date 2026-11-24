import { useState } from "react";

function SearchLead({onSearch}) {
  const [search, setSearch] = useState('')

  function handleSearch(e){
    e.preventDefault()
    setSearch(e.target.value)
    onSearch(search)
  }

  return (
    <div>
      <input onChange={handleSearch} type="text" placeholder="search leads" />
    </div>
  );
}

export default SearchLead;
