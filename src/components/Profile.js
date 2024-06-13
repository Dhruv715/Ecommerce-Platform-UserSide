import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    imgSrc: "https://fdopportunities.com/wp-content/uploads/2019/12/fdo-bsherman-480x480.jpg"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md mx-auto">
        <div className="flex flex-col items-center p-6">
          <img
            src={user.imgSrc}
            alt={user.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-semibold" style={{ fontFamily: 'Poppins' }}>{user.name}</h2>
            <p className="text-gray-600" style={{ fontFamily: 'Poppins' }}>{user.email}</p>
            <p className="text-gray-600 mt-2" style={{ fontFamily: 'Poppins' }}>{user.bio}</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gray-800 text-white py-2 px-4 rounded mt-4 transition duration-300 ease-in-out"
          >
           <i class="ri-pencil-line"></i> Edit Profile
          </button>
        </div>
        
        {isEditing && (
          <div className="px-6 pb-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
              ></textarea>
            </div>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white py-2 px-4 rounded mr-2 transition duration-300 ease-in-out"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-red-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
