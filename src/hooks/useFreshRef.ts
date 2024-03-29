import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";

function useFreshRef<T>(
  value: T // Value that needs to have a updated ref
): MutableRefObject<T> {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value; // Updating the ref to the value
  });

  return ref; // Returning the ref
}

export { useFreshRef };
