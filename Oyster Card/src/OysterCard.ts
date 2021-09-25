export default class OysterCard {
  private balance = 0;

  public getBalance(): number {
    return this.balance;
  }

  public setBalance(amount: number): number {
    this.balance += amount;
    return this.balance;
  }
}
