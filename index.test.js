const {slackBot} = require('./index');
test('1',()=>{
    expect(slackBot()).toEqual(5)
})
test('2',()=>{
    expect(slackBot(3)).toEqual(8)
})
