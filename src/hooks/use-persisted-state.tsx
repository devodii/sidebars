import { useEffect, useState } from "react";

export const usePersistedState = <T,>(key: string, initialValue: T) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    if (!item) return initialValue;

    return JSON.parse(item) as T;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
