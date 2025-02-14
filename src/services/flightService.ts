import api from "@/lib/api";
import { FlightSearchParams, FlightSearchResponse } from "@/types/flight";

export const searchFlights = async (
  params: FlightSearchParams
): Promise<FlightSearchResponse> => {
  try {
    const response = await api.get("/flights/searchFlights", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};
