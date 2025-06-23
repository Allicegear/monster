import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useState, useEffect, ChangeEvent } from "react";

import { getData } from "./utils/data.util";

export type Monster = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const App = () => {
  const [searchKey, setSearchKey] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [newMonsters, setNewMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((m) =>
      m.name.toLocaleLowerCase().includes(searchKey)
    );
    setNewMonsters(filtered);
  }, [monsters, searchKey]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchKey(searchField);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters' Life</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="search the monster"
        changeHandler={onSearchChange}
      />
      <CardList monsters={newMonsters} />
    </div>
  );
};

export default App;
