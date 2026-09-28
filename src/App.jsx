import { useEffect, useState } from "react";
import { API } from "./api";
import Plants from "./components/Plants";
import AddPlant from "./components/AddPlant";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Categories from "./components/Categories";
//created different files for each component for react

//state for what to show (default is empty for now)
//State is the variable that makes the screen update when it changes.
function App() {
  const [plants, setPlants] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  //creates the places where the page keeps its data,
  //defines the three functions we need

  //fetch -> place the order (using the URL we put in api.js)
  // then response -> when the answer arrives, do this.
  //The result of the previous step is passed in as data, so data is that array.
  //can also use async/await !!

  function loadPlants() {
    fetch(API.plants)
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }

  function loadUsers() {
    fetch(API.users)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }

  function loadCategories() {
    fetch(API.categories)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }

  // Runs once when the page first loads
  useEffect(() => {
    loadPlants();
    loadUsers();
    loadCategories();
  }, []);

  return (
    <main>
      <h1>GrowLog</h1>
      <p>A plant care collection shared by gardeners.</p>

      <Plants plants={plants} />
      <AddPlant users={users} categories={categories} onAdded={loadPlants} />

      <Users users={users} />
      <AddUser onAdded={loadUsers} />

      <Categories categories={categories} />
    </main>
  );
}

export default App;
