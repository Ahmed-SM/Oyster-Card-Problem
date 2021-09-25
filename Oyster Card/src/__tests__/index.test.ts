import OysterSystem from "../OysterSystem";
import { TubeJourney } from "../PublicTransport";
import { Stations } from "../StationsData";
import { TUBE_FARES } from "../TransportationsLookup";
import OysterCard from "../OysterCard";

const MAX_FARE = 3.2;

describe("Jourey Operation", () => {
  it("should charge the oyster card with max fare When passes through the inward barrier at the station", () => {
    const oysterCard = new OysterCard();
    oysterCard.setBalance(30);
    const oysterSystem = new OysterSystem(
      new TubeJourney(TUBE_FARES),
      oysterCard,
      Stations,
      MAX_FARE
    );
    expect(oysterSystem.passedInwardbarrier()).toBe(MAX_FARE);
    expect(oysterCard.getBalance()).toBe(26.8);
  });

  it("should pass out of the barrier at the exit station, swpie the card", () => {
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
    expect(oysterSystem.passedOutwardbarrier()).toBe(
      oysterSystem.calcJoureny("Holborn", "Earl’s Court")
    );
    expect(oysterCard.getBalance()).toBe(27.5);
  });

  it("should pass out of the exit station, don't swpie the card, and be charged the maximum fare", () => {
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

    expect(oysterCard.getBalance()).toBe(30 - MAX_FARE);
  });
  
});
