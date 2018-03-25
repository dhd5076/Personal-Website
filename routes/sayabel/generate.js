var SayAbel  = require('sayabel')
var sayabelInstance = new SayAbel(true);

module.exports = (req, res) => {
    response = "";
    console.log(req.params.works.split(','));
    req.params.works.split(',').forEach((work) => {
        sayabelInstance.learnFromFile("./data/works/" + work + ".txt", (err) => {
            sayabelInstance.generateText(100, (text, err) => {
                res.send(text.replace("\n", "<br/>"));
            });
        });
    });
}