import { createContext, useContext, useEffect, useState } from 'react';

const YContext = createContext({});

export function YProvider({ children }) {
  const [Y, setY] = useState(0);

    return (
    <YContext.Provider
      value={{
        Y,
        setY,
      }}
    >
      {children}
    </YContext.Provider>
  );
}

export function useYContext() {
  return useContext(YContext);
}
