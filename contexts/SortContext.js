import { createContext, useContext, useState } from 'react';
import { FilterProvider } from './FilterContext';
import { YProvider } from './YContext';

const SortContext = createContext({});

export function SortProvider({ children }) {
  const [sortBy, setSort] = useState('Newest');
  return (
    <SortContext.Provider value={{ sortBy, setSort }}>
      <FilterProvider>
        <YProvider>{children}</YProvider>
      </FilterProvider>
    </SortContext.Provider>
  );
}

export function useSortContext() {
  return useContext(SortContext);
}
