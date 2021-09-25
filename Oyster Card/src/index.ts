// @ts-ignore
import OysterSystem from "./OysterSystem";
import OysterCard from "./OysterCard";
import { BusJourney, TubeJourney } from "./PublicTransport";
import { TUBE_FARES, BUS_FARES } from "./TransportationsLookup";
import { Stations } from "./StationsData";

const MAX_FARE = 3.2;

function Journey() {
  const oysterCard = new OysterCard();

  oysterCard.setBalance(30);

  const oysterSystem = new OysterSystem(
    new TubeJourney(TUBE_FARES),
    oysterCard,
    Stations,
    MAX_FARE
  );

  oysterSystem.passedInwardbarrier();

  oysterSystem.calcJoureny("Holborn", "Earl’s Court");

  oysterSystem.setNewJoureny(new BusJourney(BUS_FARES));

  oysterSystem.calcJoureny("Earl’s Court", "Chelsea");

  oysterSystem.setNewJoureny(new TubeJourney(TUBE_FARES));

  oysterSystem.calcJoureny("Earl’s Court", "Hammersmith");

  oysterSystem.passedOutwardbarrier();

  oysterCard.getBalance();
}

Journey();
