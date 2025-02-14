export interface AirportSearchResponse {
  status: boolean;
  timestamp: number;
  data: Airport[];
}

export interface Airport {
  skyId: string;
  entityId: string;
  presentation: Presentation;
  navigation: Navigation;
}

export interface Presentation {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

export interface Navigation {
  entityId: string;
  entityType: "CITY" | "AIRPORT" | "COUNTRY";
  localizedName: string;
  relevantFlightParams: RelevantFlightParams;
  relevantHotelParams: RelevantHotelParams;
}

export interface RelevantFlightParams {
  skyId: string;
  entityId: string;
  flightPlaceType: "CITY" | "AIRPORT" | "COUNTRY";
  localizedName: string;
}

export interface RelevantHotelParams {
  entityId: string;
  entityType: "CITY" | "COUNTRY";
  localizedName: string;
}

export interface SearchAirportParams {
  query: string;
  locale?: string;
}
