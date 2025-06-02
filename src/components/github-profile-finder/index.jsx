import { useEffect, useState } from "react";
import User from "./user";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("dymayo");
  const [userData, setUserData] = useState(null);
  const [loadingMsg, setLoadingMsg] = useState(false);

  async function fetchGithubUserData() {
    setLoadingMsg(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setUserData(data);
      setLoadingMsg(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loadingMsg) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
