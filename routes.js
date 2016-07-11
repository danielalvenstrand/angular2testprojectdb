var note = require('./models/note');

module.exports = {
  configure: (app) => {

    app.get('/note/', (req, res) => {
      note.get(res);
    });

    app.post('/note/', (req, res) => {
      note.create(req.body, res);
    });

    app.put('/note/', (req, res) => {
      note.update(req.body, res);
    });

    app.delete('/note/:id/', (req, res) => {
      note.delete(req.params.id, res);
    });

  }
};