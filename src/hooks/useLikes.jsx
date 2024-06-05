import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useLikes = () => {
  const axiosSecure = useAxiosSecure();

  const {refetch, data: like = [] } = useQuery({
    queryKey: ["like"],
    queryFn: async () => {
      const res = await axiosSecure.get("/likes");
      return res.data;
    },
  });
  return [like, refetch];
};

export default useLikes;
