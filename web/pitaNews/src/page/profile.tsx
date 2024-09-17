import { useUser } from "../components/UserContext";

const Profile: React.FC = () => {
    const { user } = useUser();
  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>
        Hello, {user?.displayName || user?.email}!
      </p>
    </div>
  );
};

export default Profile;
