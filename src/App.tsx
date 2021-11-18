import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import BlogCard from "./BlogCard";

type Blog = {
  title: string;
  createdAt: string;
  image: string;
};

const Notifications = () => {
  const [entries, setEntries] = useState<Blog[]>([]);
  const [error, setError] = useState<string | undefined>();

  const getEntries = async () => {
    try {
      const { data } = await axios.get<Blog[]>("/entries");
      setEntries(data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data);
      }
    }
  };

  useEffect(() => {
    getEntries();
  }, []);

  if (error) {
    return <p style={{ color: "#ffff88" }}>🚨 {error}</p>;
  }

  if (!entries.length) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h2>投稿一覧</h2>
      <div>
        {entries.map((e) => (
          <div style={{ padding: 10 }}>
            <BlogCard {...e} alt={e.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notifications />
      </header>
    </div>
  );
}

export default App;
