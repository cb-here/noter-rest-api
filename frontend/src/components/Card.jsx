import React, { useState } from "react";

function Card({ note, handleDelete, handleUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    const updatedNote = { ...note, title: editedTitle, content: editedContent };
    handleUpdate(updatedNote);
    setIsEditing(false); 
  };
  const formattedDate = new Date(note.createdAt).toLocaleDateString();
  const updatedDate = new Date(note.updatedAt).toLocaleDateString();
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-4">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-2"
              placeholder="Edit title"
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-2"
              placeholder="Edit content"
            />
            <div className="flex justify-between mt-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-bold text-gray-800">{note.title}</h1>
            <p className="mt-2 text-gray-400">Created on: {formattedDate}</p>
            <p className="mt-2 text-gray-600">{note.content}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
