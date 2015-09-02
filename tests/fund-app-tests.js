describe('angularjs app to display a fund', function() {
  it('should have the correct title', function() {
    browser.get('http://localhost:9000/');
    expect(browser.getTitle()).toEqual('NG Fund App');
  });//check that the title is correct.
});
