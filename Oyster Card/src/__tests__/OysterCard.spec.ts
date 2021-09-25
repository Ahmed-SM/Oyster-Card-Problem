import OysterCard from "../OysterCard";

describe("Oyster Card", () => {
  it("exists", () => {
    const oysterCard = new OysterCard();
    expect(oysterCard).toBeDefined();
  });

  it("exists", () => {
    const oysterCard = new OysterCard();
    expect(oysterCard.getBalance()).toBeDefined();
  });

  it("exists", () => {
    const oysterCard = new OysterCard();
    expect(oysterCard.setBalance(30)).toBeDefined();
  });

  it("should be able to tell the current balance", () => {
    const oysterCard = new OysterCard();
    expect(oysterCard.getBalance()).toBe(0);
  });

  it("should be able to load a card with £30", () => {
    const oysterCard = new OysterCard();
    expect(oysterCard.setBalance(30)).toBe(30);
  });
});
