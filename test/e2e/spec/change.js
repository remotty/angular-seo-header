describe('change test', function() {
  it('default title to "Default Title"', function() {
    browser.get('/change.html#/');
    expect(browser.executeScript('return document.title;')).toEqual('Default Title');
  });

  it('change view = change title to "change.html"', function() {
    browser.get('/change.html#/change');
    browser.sleep(1000);
    expect(browser.executeScript('return document.title;')).toEqual('change.html');
  });

  it('change view again = change title is still "Default Title"', function() {
    browser.get('/change.html#/change');
    browser.sleep(1000);
    expect(browser.executeScript('return document.title;')).toEqual('change.html');
    browser.get('/change.html#/');
    browser.sleep(1000);
    expect(browser.executeScript('return document.title;')).toEqual('Default Title');
  });
});
