import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  const {
    data: services = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await fetch("https://kids-nanny-server.vercel.app/services");
      return res.json();
    },
  });

  return [services, loading, refetch];
};

export default useServices;
