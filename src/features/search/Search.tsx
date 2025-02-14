import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { DestinationSelect } from "./DestinationSelect";
import { DepartureReturnDates } from "./DepartureReturnDates";
import { RoundTrip } from "./RoundTrip";
import { Trip } from "@/types/global";
import { PassengerInput } from "./PassengerInput";
import { TravelClassSelect } from "./TravelClassSelect";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { FlightSearchParams, FlightSearchResponse } from "@/types/flight";
import { searchFlights } from "@/services/flightService";

type Props = {
  handleResults: (
    departure: FlightSearchResponse,
    returnFlight?: FlightSearchResponse
  ) => void;
};

export const Search: React.FC<Props> = ({ handleResults }) => {
  const { handleSubmit, setValue, reset } = useForm<FlightSearchParams>({
    defaultValues: {
      originSkyId: "",
      destinationSkyId: "",
      originEntityId: "",
      destinationEntityId: "",
      date: "",
      cabinClass: "economy",
      adults: 1,
      sortBy: "best",
      currency: "USD",
      market: "global",
      countryCode: "US",
    },
  });

  const [trip, setTrip] = useState<Trip>("round-trip");

  const onSubmit = async (data: FlightSearchParams) => {
    try {
      if (trip === "one-way") {
        const response = await searchFlights(data);
        handleResults(response);
      } else {
        const returnTripData: FlightSearchParams = {
          ...data,
          date: "2025-02-27",
        };

        const [departureResponse, returnResponse] = await Promise.all([
          searchFlights(data),
          searchFlights(returnTripData),
        ]);

        handleResults(departureResponse, returnResponse);
      }
    } catch (error) {
      console.error("Error searching flights:", error);
    } finally {
      reset();
    }
  };

  return (
    <Card className="p-6 rounded-xl shadow-lg flex flex-col gap-3">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="w-full flex flex-wrap gap-3 sm:gap-6 justify-center">
          <RoundTrip
            tripType={trip}
            onTripChange={(newTrip) => setTrip(newTrip)}
          />
          <PassengerInput onChange={(count) => setValue("adults", count)} />
          <TravelClassSelect
            onChange={(value) => setValue("cabinClass", value)}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <DestinationSelect
            setOrigin={(value) => {
              setValue("originEntityId", value.entityId);
              setValue("originSkyId", value.skyId);
            }}
            setDestination={(value) => {
              setValue("destinationEntityId", value.entityId);
              setValue("destinationSkyId", value.skyId);
            }}
          />
        </div>
        <div className="w-full flex flex-wrap md:flex-nowrap gap-3">
          <DepartureReturnDates
            isRoundTrip={trip === "round-trip"}
            onDepartureDate={(date) => setValue("date", date!.toISOString())}
            onReturnDate={(date) => setValue("date", date!.toISOString())}
          />
        </div>
        <Button type="submit">Search</Button>
      </form>
    </Card>
  );
};
