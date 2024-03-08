import { useQuery } from "react-query";
import { httpClient } from "../settings";

const getAllProducts = async () => {
  const { data } = await httpClient.get(`/product`);
  return data;
};

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: getAllProducts,
    onSuccess: () => {
      // console.log({ data });
    },
  });
};
