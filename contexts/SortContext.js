import { createContext, useContext, useState } from 'react';
import { FilterProvider } from './FilterContext';

const SortContext = createContext({});

export function SortProvider({ children }) {
  const [sortBy, setSort] = useState('Newest');
  return (
    <SortContext.Provider value={{ sortBy, setSort }}>
      <FilterProvider>{children}</FilterProvider>
    </SortContext.Provider>
  );
}

export function useSortContext() {
  return useContext(SortContext);
}
