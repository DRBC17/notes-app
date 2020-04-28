const noteController = {};

const Note = require("../models/note");

noteController.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

noteController.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();

  res.redirect("/notes");
};

noteController.renderNotes = async (req, res) => {
  const notes = await Note.find();
  res.render("notes/all-notes", { notes });
};

noteController.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.render("notes/edit-note", { note });
};

noteController.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });

  res.redirect('/notes');
};

noteController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes");
};

module.exports = noteController;
