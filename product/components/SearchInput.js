import React from 'react'

const SearchInput = ({searchInput, setSearchInput}) => {
  return (
    <div className='w-full flex justify-center pb-4 md:pb-8'>
        <input 
        className="h-10 w-4/5 text-customBlue border border-gray-200 rounded-2xl p-4 focus:outline-none md:w-3/5 md:h-12"
        type="text" 
        value={searchInput} 
        placeholder='Enter product to search...'
        onChange={(e) => setSearchInput(e.target.value)}
        />
    </div>
  )
}

export default SearchInput