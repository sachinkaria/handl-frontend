describe('handl',function(){
  it('has a title', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual('Handl App');
  });
});
