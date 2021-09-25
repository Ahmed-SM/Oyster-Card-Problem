interface ITransportation {
  operation(
    fares: any,
    initalStation?: string,
    destinationStation?: string
  ): number;
}

export default abstract class PublicTransport {
  private fares: any;

  constructor(fares: any) {
    this.fares = fares;
  }

  public abstract createTransportation(): ITransportation;

  public operation(initalStation: string, destinationStation: string): number {
    const transportation = this.createTransportation();

    return transportation.operation(
      this.fares,
      initalStation,
      destinationStation
    );
  }
}

class BusTransportation implements ITransportation {
  public operation(fares: any): number {
    return fares;
  }
}

class TubeTransportation implements ITransportation {
  public operation(
    fares: any,
    initalStation: string,
    destinationStation: string
  ): number {
    return fares[initalStation][destinationStation];
  }
}

export class BusJourney extends PublicTransport {
  public createTransportation(): ITransportation {
    return new BusTransportation();
  }
}

export class TubeJourney extends PublicTransport {
  public createTransportation(): ITransportation {
    return new TubeTransportation();
  }
}
