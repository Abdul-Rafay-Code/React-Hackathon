import { createContext } from "react";

// type MyContextType = {
//   loading?: string;
//   updateValue?: (newValue: string) => void;
// } | null;

const myContext = createContext<any>(null);

export default myContext;
