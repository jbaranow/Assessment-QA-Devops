const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  }); 

  test('Clicking Add to Duo displays #player-duo div', async () => {
    await driver.get("http://localhost:8000")
    const addToDuo = await driver.findElement(By.id('see-all')).click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElement(By.id('all-bots'))
    const displayed =  await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
  })

  test('Clicking Draw displays #choices div', async () => {
    await driver.get("http://localhost:8000");
    const draw = await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed =  await choices.isDisplayed()
    expect(displayed).toBe(true)
  })
});