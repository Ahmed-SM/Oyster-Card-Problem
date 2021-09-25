import { BusJourney, TubeJourney } from "../PublicTransport";
import { TUBE_FARES, BUS_FARES } from "../TransportationsLookup";

describe("Public Transport", () => {
  it('should be able take a Tube trip from "Anywhere in Zone 1" for "£2.50"', () => {
    const tubeTransport = new TubeJourney(TUBE_FARES);
    expect(tubeTransport.operation("1", "1")).toBe(2.5);
  });

  it('should be able take a Tube trip from "Any one zone outside zone 1" for "£2.00"', () => {
    const tubeTransport = new TubeJourney(TUBE_FARES);
    expect(tubeTransport.operation("2", "2")).toBe(2);
    expect(tubeTransport.operation("3", "3")).toBe(2);
  });

  it('should be able take a Tube trip from "Anywhere in Zone 1" for "£2.50"', () => {
    const tubeTransport = new TubeJourney(TUBE_FARES);
    expect(tubeTransport.operation("1", "1")).toBe(2.5);
  });

  it('should be able take a Tube trip from "Any two zones including zone 1" for "£3.00"', () => {
    const tubeTransport = new TubeJourney(TUBE_FARES);
    expect(tubeTransport.operation("1", "2")).toBe(3);
    expect(tubeTransport.operation("2", "1")).toBe(3);
  });

  it('should be able take a Tube trip from "Any two zones excluding zone 1" for "£2.25"', () => {
    const tubeTransport = new TubeJourney(TUBE_FARES);
    expect(tubeTransport.operation("2", "3")).toBe(2.25);
    expect(tubeTransport.operation("3", "2")).toBe(2.25);
  });

  it('should be able take a Tube trip from "More than two zones (3+)" for "£3.20"', () => {
    const tubeTransport = new TubeJourney(TUBE_FARES);
    expect(tubeTransport.operation("1", "3")).toBe(3.2);
    expect(tubeTransport.operation("3", "1")).toBe(3.2);
  });

  it('should be able take any bus journey for "1.80"', () => {
    const busTransport = new BusJourney(BUS_FARES);
    expect(busTransport.operation("1", "3")).toBe(1.8);
  });
});
