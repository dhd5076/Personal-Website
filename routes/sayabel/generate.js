var SayAbel  = require('sayabel')
var sayabelInstance = new SayAbel(true);
module.exports = (req, res) => {
    sayabelInstance.learnFromFile("data/works/nietzsche-the-joyful-wisdom.txt", (err) => {
        sayabelInstance.generateText(100, (text, err) => {
            res.send(text);
        });
      });
};