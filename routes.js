var note = require('./models/note');
var googleplaces = require('./models/googleplaces');

module.exports = {
  configure: (app) => {

    // ALLOW CROSS DOMAIN - REMOVE WHEN PUBLIC
    var allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', "*");
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    }

    app.use(allowCrossDomain);

    // GET ALL NOTES
    app.get('/api/note/', (req, res) => {
      note.get(res);
    });

    // GET SINGLE NOT
    app.get('/api/note/?:id/', (req, res) => {
      note.get(res,req.params.id);
    });

    // ADD NOTE
    app.post('/api/note/', (req, res) => {
      note.create(req.body, res);
    });

    // UPDATE NOTE
    app.put('/api/note/', (req, res) => {
      note.update(req.body, res);
    });

    // DELETE NOTE
    app.delete('/api/note/:id/', (req, res) => {
      note.delete(req.params.id, res);
    });

    // GET PLACES
    app.post('/api/googleplaces/', (req, res) => {
      googleplaces.getLoc(req, res);
    });

  }
};