import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMeals = () => {
  const axiosSecure = useAxiosSecure();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(loading);

  useEffect(() => {
    axiosSecure("/meals").then((res) => {
      // console.log(res.data)
      setMeals(res.data);
      setLoading(false);
    });
  }, []);
  return [meals];
};

export default useMeals;
