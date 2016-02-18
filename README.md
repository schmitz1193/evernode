# evernode


module.exports = {
  edit (req, res) {
    Note.findById(req.params.id, (err, note) => {
      if (err) throw err;

      res.render('new-note', {note: note});
    });
  },
