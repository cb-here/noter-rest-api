import React, { useState } from "react";

function CreateNote({ getNotes, postNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newNote = { title, content };
      await postNote(newNote);
      setTitle("");
      setContent("");
      getNotes();
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg mb-10">
      <h1 className="text-3xl underline text-green-400 font-bold mb-4 text-center">Create a note</h1>
      <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full md:w-1/3">
          <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <label htmlFor="content" className="text-sm font-medium text-gray-700 mb-1">
            Content:
          </label>
          <input
            type="text"
            id="content"
            placeholder="Write your note content here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;