import { useState, useMemo } from 'react';

function useSearch(options: string[], searchTerm: string) {
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  useMemo(() => {
    const filtered = options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [options, searchTerm]);

  return filteredOptions;
}

export default useSearch;
