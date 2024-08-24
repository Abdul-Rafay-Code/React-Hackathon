import React, { useContext } from "react";

import myContext from "../context/MyContext";
import Cards from "../components/Cards";

export default function Component() {
  const { getData, loading, setLoading } = useContext(myContext);
  return <Cards loading={loading} data={getData} />;
}
