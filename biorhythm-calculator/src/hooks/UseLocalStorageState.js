import { useState } from "react";

const useLocalStorageState = (key, defaultValue) => {
  const [ state, setState ] = useState(retriveValue(key, defaultValue));
  const setStateAndStoreValue = (newState) => {
    setState(newState);
    if (typeof defaultValue === "object") {
      localStorage.setItem(key, JSON.stringify(newState));
    } else {
      localStorage.setItem(key, newState);
    }
  }
  return [ state, setStateAndStoreValue ];
}

const retriveValue = (key, defaultValue) => {
  let value = localStorage.getItem(key);
  if (value) {
    if (typeof defaultValue === "object") {
      value = JSON.parse(value);
    } else if (typeof defaultValue === "number") {
      value = +value;
    }
  } else {
    value = defaultValue;
  }
  return value;
}

export { useLocalStorageState }