describe('EJDB2', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('all', async () => {
      await element(by.id('run')).tap();
      await waitFor(element(by.id('status'))).toExist().withTimeout(2000);
      await waitFor(element(by.id('status'))).toHaveText('OK').withTimeout(10000);
  });
});