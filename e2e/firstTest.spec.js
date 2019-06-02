describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('Adding ToDo Item should work!', async () => {
    const text = "a new ToDo Item";
    await element(by.id('textInput')).tap(); // Input Text Click For Active
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();
    await expect(element(by.text(text).withAncestor(by.id('toDoList')))).toBeVisible();
  })

  it('Completing ToDo Item should work!', async () => {
    const text = "a new ToDo Item";
    await element(by.id('textInput')).tap(); // Input Text Click For Active
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();

    await element(by.id('completedButton')).multiTap(2); // tap sometime is not working
    await expect(element(by.id('completed').and(by.text(text)).withAncestor(by.id('toDoList')))).toBeVisible(); // There is no way to get style
  })

  it('Deleting ToDo Item should work!', async () => {
    const text = "a new ToDo Item";
    await element(by.id('textInput')).tap(); // Input Text Click For Active
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();

    await element(by.id('deletedButton')).multiTap(2); // tap sometime is not working
    await expect(element(by.text(text).withAncestor(by.id('toDoList')))).toBeNotVisible();
  })
});