import { createContext, useContext, useState, useEffect } from "react";

import Axios from "axios";
import starwars from "../APIs/starwars";
import people from "../APIs/people";

export const DataStateContext = createContext(undefined);
export const DataDispatchContext = createContext(undefined);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!!data) return;
    Axios.all([starwars.getPeople(), people.getPeople()]).then(
      Axios.spread((...allData) => {
        const starwarsData = allData[0];
        const peopleData = allData[1];

        const tempDataArr = [];

        starwarsData.forEach((item, i) => {
          const tempDataObj = {
            id: peopleData[i].id,
            name: peopleData[i].name,
            phone: peopleData[i].phone,
            email: peopleData[i].email,

            character: starwarsData[i].name,
            eyecolor: starwarsData[i].eye_color,
            haircolor: starwarsData[i].hair_color,
            mass: starwarsData[i].mass,
          };

          tempDataArr.push(tempDataObj);
        });

        setData(tempDataArr);
      })
    );
  });

  return (
    <DataStateContext.Provider value={{ data }}>
      <DataDispatchContext.Provider value={{ setData }}>
        {children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
};

export default DataContextProvider;

export const useDataContext = () => {
  const dataState = useContext(DataStateContext);
  const dataDispatch = useContext(DataDispatchContext);

  if (dataState === undefined || dataDispatch === undefined)
    throw new Error("useDataContext must be used within DataContextProvider");
  return { dataState, dataDispatch };
};
