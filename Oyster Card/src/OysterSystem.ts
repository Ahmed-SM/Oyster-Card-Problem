import OysterCard from "./OysterCard";
import PublicTransport from "./PublicTransport";

export default class OysterSystem {
  private oysterCard: OysterCard;
  private publicTransport: PublicTransport;
  private stations: any;
  private maxCost: number;
  private accumulatedCost = 0;
  private checkedIn = false;

  constructor(
    publicTransport: PublicTransport,
    oysterCard: OysterCard,
    stations: any,
    maxCost: number
  ) {
    this.publicTransport = publicTransport;
    this.oysterCard = oysterCard;
    this.stations = stations;
    this.maxCost = maxCost;
  }

  private findChapestStation(tragetStation: string): string {
    return Math.min(
      ...this.stations[tragetStation].map((zone: any) => zone)
    ).toString();
  }

  public setNewJoureny(publicTransport: PublicTransport): void {
    this.publicTransport = publicTransport;
  }

  public passedInwardbarrier(): number {
    if (this.checkedIn) {
      return 0;
    }
    this.checkedIn = true;
    this.oysterCard.setBalance(-this.maxCost);
    return this.maxCost;
  }

  public passedOutwardbarrier(): number {
    if (!this.checkedIn) {
      return 0;
    }
    this.checkedIn = false;
    this.oysterCard.setBalance(this.maxCost);
    this.oysterCard.setBalance(-this.accumulatedCost);
    return this.accumulatedCost;
  }

  public calcJoureny(
    initalStation: string,
    destinationStation: string
  ): number {
    const cost = this.publicTransport.operation(
      this.findChapestStation(initalStation),
      this.findChapestStation(destinationStation)
    );
    this.accumulatedCost += cost;
    return cost;
  }
}
