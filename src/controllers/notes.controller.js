const noteController = {};

const Note = require("../models/note");

noteController.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

noteController.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();

  res.send("create new note");
};

noteController.renderNotes = async (req, res) => {
  const notes = await Note.find();
  res.render('notes/all-notes',{ notes });
};

noteController.renderEditForm = (req, res) => {
  res.send("edit form");
};

noteController.updateNote = (req, res) => {
  res.send("update note");
};

noteController.deleteNote = (req, res) => {
  res.send("delete note");
};

module.exports = noteController;
