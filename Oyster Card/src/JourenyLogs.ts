// @ts-ignore
import OysterSystem from "./OysterSystem";
import OysterCard from "./OysterCard";
import { BusJourney, TubeJourney } from "./PublicTransport";
import { TUBE_FARES, BUS_FARES } from "./TransportationsLookup";
import { Stations } from "./StationsData";

const MAX_FARE = 3.2;

function Journey() {
  const oysterCard = new OysterCard();

  console.log(`Current balance is: £${oysterCard.setBalance(30)}`);

  const oysterSystem = new OysterSystem(
    new TubeJourney(TUBE_FARES),
    oysterCard,
    Stations,
    MAX_FARE
  );

  console.log(`Passed through an inward barrier you have been charged:
  £${oysterSystem.passedInwardbarrier()}`);

  console.log(`Tube Journey from [Holborn] to [Earl’s Court] fare: 
  £${oysterSystem.calcJoureny("Holborn", "Earl’s Court")}`);

  oysterSystem.setNewJoureny(new BusJourney(BUS_FARES));

  console.log(`Bus Journey from [Earl’s Court] to [Chelsea] fare:
  £${oysterSystem.calcJoureny("Earl’s Court", "Chelsea")}`);

  oysterSystem.setNewJoureny(new TubeJourney(TUBE_FARES));
  console.log(`Tube Journey from [Earl’s Court] to [Hammersmith] fare:
  £${oysterSystem.calcJoureny("Earl’s Court", "Hammersmith")}`);

  console.log(
    `Passed through an outward barrier total fare is: £${oysterSystem.passedOutwardbarrier()}`
  );

  console.log(`Current balance is: £${oysterCard.getBalance()}`);
}

Journey();