import { useState, useEffect } from "react";
import axios from "axios";

const GetData = (id) => {
  const config = {
    params: {
      id: id,
    },
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/classroom/getMembers", config)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return data;
};
export default GetData;
