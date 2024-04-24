import { createContext, useContext, useEffect, useState } from 'react';

const FilterContext = createContext({});

export function FilterProvider({ children }) {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);


  const brandsChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedBrands(
      isChecked
        ? [...selectedBrands, value]
        : selectedBrands.filter((item) => item !== value)
    );
  };
  return (
    <FilterContext.Provider
      value={{ 
        selectedBrands, brandsChange,
        handleDrawerOpen, handleDrawerClose, open, setOpen 
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}