import { useEffect, useState } from "react";

export function useD(value, delay) {
  const [debValue, setDValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debValue;
}