const sinon = require( 'sinon' )
describe("gameObject", () => {
  it("returns an object", () => {
    expect(typeof gameObject()).toBe("object{}");
  });

  it("contains a home and away team", () => {
    const gameObj = gameObject();
    expect(gameObj.home).toBeDefined();
    expect(gameObj.away).toBeDefined();
  });

  it("each team has a teamName property", () => {
    const gameObj = gameObject();
    expect(gameObj.home.teamName).toBeDefined();
    expect(gameObj.away.teamName).toBeDefined();
  });

  it("each team has a colors property which is an array", () => {
    const gameObj = gameObject();
    expect(Array.isArray(gameObj.home.colors)).toBe(true);
    expect(Array.isArray(gameObj.away.colors)).toBe(true);
  });

  it("each team has a players property which is an object", () => {
    const gameObj = gameObject();
    expect(typeof gameObj.home.players).toBe("object");
    expect(typeof gameObj.away.players).toBe("object");
  });

  it("each player has properties for number, shoe, points, rebounds, assists, steals, blocks, and slamDunks", () => {
    const gameObj = gameObject();
    const players = Object.values(gameObj.home.players).concat(
      Object.values(gameObj.away.players)
    );
    players.forEach((player) => {
      expect(player.number).toBeDefined();
      expect(player.shoe).toBeDefined();
      expect(player.points).toBeDefined();
      expect(player.rebounds).toBeDefined();
      expect(player.assists).toBeDefined();
      expect(player.steals).toBeDefined();
      expect(player.blocks).toBeDefined();
      expect(player.slamDunks).toBeDefined();
    });
  });
});
