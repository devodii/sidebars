import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { usePersistedState } from "./use-persisted-state";
import { parseElementsContext } from "../utils/context";

type SidebarState = "open" | "close";

const SidebarContext = createContext(
  {} as {
    state: SidebarState;
    setState: Dispatch<SetStateAction<SidebarState>>;
  }
);

const KEY = "sidebar";

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = usePersistedState<SidebarState>(KEY, "close");

  return (
    <SidebarContext.Provider value={{ state, setState }}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  return parseElementsContext(context, "sidebar");
};
