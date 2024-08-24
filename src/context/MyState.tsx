import React, { useEffect, useState } from "react";
import myContext from "./MyContext";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { firedb } from "../firebase/FirebaseConfig";

type MyStateProps = {
  children?: JSX.Element;
  id?: number;
  name?: string;
  email?: string;
  roomNumber?: number | string;
  roomType?: string;
  roomStatus?: string;
  roomId?: string | number;
  roomPrice?: string;
  roomDescription?: string;
  time?: string;
  date?: string;
  roomImage?: string;
};

function MyState({ children }: MyStateProps) {
  const user = JSON.parse(
    localStorage.getItem("Users") || "null"
  ) as MyStateProps | null;

  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<MyStateProps | null>(user);

  const [inputFields, setInputFields] = useState<MyStateProps>({
    roomNumber: "",
    roomType: "",
    roomStatus: "",
    roomId: "",
    roomPrice: "",
    roomImage: "",
    roomDescription: "",
    time: new Date().toLocaleTimeString(), // Current time as string
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }), // Current date as string
  });

  const [getData, setGetData] = useState<any>([]);

  const getWholeData = async () => {
    const q = query(collection(firedb, "Rooms"), orderBy("time"));

    const data = onSnapshot(q, (QuerySnapshot) => {
      let rooms = [];
      QuerySnapshot.forEach((doc) => rooms.push(doc.data()));
      setGetData(rooms);
    });
    return () => data;
  };
  useEffect(() => {
    getWholeData();
  }, []);

  return (
    <myContext.Provider
      value={{
        getData,
        loading,
        setLoading,
        state,
        setState,
        inputFields,
        setInputFields,
      }}
    >
      {children}
    </myContext.Provider>
  );
}

export default MyState;
