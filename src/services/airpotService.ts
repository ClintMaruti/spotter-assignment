import api from "@/lib/api";
import { AirportSearchResponse, SearchAirportParams } from "@/types/airport";

export const searchAirport = async (
  params: SearchAirportParams
): Promise<AirportSearchResponse> => {
  const response = await api.get("/flights/searchAirport", { params });
  return response.data;
};
