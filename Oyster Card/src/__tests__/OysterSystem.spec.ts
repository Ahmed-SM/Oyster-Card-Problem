import OysterSystem from "../OysterSystem";
import OysterCard from "../OysterCard";
import { TubeJourney } from "../PublicTransport";
import { TUBE_FARES } from "../TransportationsLookup";
import { Stations } from "../StationsData";

const MAX_FARE = 3.2;

describe("Oyster System", () => {
  it("should be able to tell the maximum fare", () => {
    const oysterSystem = new OysterSystem(
      new TubeJourney(TUBE_FARES),
      new OysterCard(),
      Stations,
      MAX_FARE
    );
    expect(oysterSystem.passedInwardbarrier()).toBe(MAX_FARE);
  });

  it("should not charge if went through outward barrier instead of the inward barrier", () => {
    const oysterSystem = new OysterSystem(
      new TubeJourney(TUBE_FARES),
      new OysterCard(),
      Stations,
      MAX_FARE
    );
    expect(oysterSystem.passedOutwardbarrier()).toBe(0);
  });
});
