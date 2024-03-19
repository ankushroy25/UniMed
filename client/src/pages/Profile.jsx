import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const EditableProfile = () => {
  const { user } = useAuth0();

  // console.log(user);

  // const initialImage = localStorage.getItem("profileImage") || null;

  // const [formData, setFormData] = useState(initialData);
  // const [isEditing, setIsEditing] = useState(false);
  // const [file, setFile] = useState(null);
  // const [imageSrc, setImageSrc] = useState(initialImage);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleImageChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   setFile(selectedFile);
  //   setImageSrc(URL.createObjectURL(selectedFile));
  // };

  // const handleEditClick = () => {
  //   setIsEditing(true);
  // };

  // const handleSaveClick = () => {
  //   setIsEditing(false);
  //   if (file) {
  //     setFormData({
  //       ...formData,
  //       image: file,
  //     });
  //     localStorage.setItem("profileImage", URL.createObjectURL(file));
  //   }

  //   localStorage.setItem(storageKey, JSON.stringify(formData));
  // };

  // const handleCancelClick = () => {
  //   setIsEditing(false);
  // };

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem(storageKey));
  //   if (storedData) {
  //     setFormData(storedData);
  //   }
  // }, []);

  return (
    <div className="flex justify-center my-8">
      <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg w-3/4 md:w-1/2 p-8">
        <div className="px-4 py-5 sm:px-6 flex justify-center">
          <img
            src={user.picture}
            className="w-48 h-48 mx-auto object-cover border-2 border-gray-400 rounded-full mb-4"
            alt=""
          />
        </div>
        <div className="flex flex-wrap justify-around my-4">
          <div className="rounded-full bg-gray-100 px-4 py-2">
            <Link to="/my-orders">My orders</Link>
          </div>
          <div className="rounded-full bg-gray-100 px-4 py-2">
            <Link to="/my-appointments">My orders</Link>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl className="">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.nickname}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default EditableProfile;
