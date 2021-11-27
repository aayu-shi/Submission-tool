import { useState, useEffect } from "react";
import axios from "axios";

const DeleteAssignment = (id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/assignment/geAssignments")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return data;
};
export default GetData;
