import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const EditableProfile = () => {
  const storageKey = "editableProfileData";
  const { user } = useAuth0();

  const initialData = JSON.parse(localStorage.getItem(storageKey)) || {
    fullName: "Mickael Poulaz",
    username: user.nickname,
    emailAddress: "m.poul@example.com",
    contact: "$10,000",
    address:
      "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
  };
  console.log(user);

  const initialImage = localStorage.getItem("profileImage") || null;

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(initialImage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImageSrc(URL.createObjectURL(selectedFile));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });
      localStorage.setItem("profileImage", URL.createObjectURL(file));
    }

    localStorage.setItem(storageKey, JSON.stringify(formData));
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(storageKey));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  return (
    <div className="flex justify-center my-8">
      <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg w-3/4 md:w-1/2 pl-8">
        {isEditing ? (
          <div className="m-4 flex justify-center">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
          </div>
        ) : (
          <div className="px-4 py-5 sm:px-6 flex justify-center">
            <img
              src={imageSrc || "https://via.placeholder.com/150"}
              className="w-48 h-48 mx-auto object-cover border-2 border-gray-400 rounded-full mb-4"
              alt=""
            />
          </div>
        )}
        <div className="border-t border-gray-200">
          {isEditing ? (
            <form>
              <div className="bg-gray-50 p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formData.username}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formData.emailAddress}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Contact</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    className="w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </dd>
              </div>
            </form>
          ) : (
            <dl className="">
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formData.fullName}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formData.username}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formData.emailAddress}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Contact</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formData.contact}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formData.address}
                </dd>
              </div>
            </dl>
          )}

          <div className="flex justify-center py-4">
            {isEditing ? (
              <>
                <button
                  type="button"
                  className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableProfile;
