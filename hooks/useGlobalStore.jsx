import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

const useGlobalStore = (name) => {
  const store = useContext(MobXProviderContext);
  if (name) return store[name];
  return store;
};

export default useGlobalStore;
