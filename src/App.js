import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading)
    return (
      <img
        src="https://cssauthor.com/wp-content/uploads/2018/06/Material-Loading-Animation.gif"
        alt=""
      />
    );

  return (
    <>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </>
  );
}

export default App;
