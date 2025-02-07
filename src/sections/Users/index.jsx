import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/abdi0609/contact";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={data} />
      </div>
    </section>
  );
}

export default UsersSection;


