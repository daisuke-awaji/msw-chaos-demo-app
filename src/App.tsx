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

  const getEntries = async () => {
    const { data } = await axios.get<Blog[]>("/entries");
    setEntries(data);
  };

  useEffect(() => {
    getEntries();
  }, []);

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
