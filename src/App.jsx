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
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            {/* The GrowLog logo: two leaves growing from one stem */}

            <img
              className="logo-mark"
              src="/growlog.png"
              alt="GrowLog sapling logo"
            />
            <h1>GrowLog</h1>
          </div>
          <p className="tagline">
            A plant care collection shared by gardeners.
          </p>
        </div>
      </header>

      <main className="page">
        <Plants plants={plants} />
        <div className="forms">
          <AddPlant
            users={users}
            categories={categories}
            onAdded={loadPlants}
          />
          <AddUser onAdded={loadUsers} />
        </div>
        <div className="lists">
          <Users users={users} />
          <Categories categories={categories} />
        </div>
      </main>
    </>
  );
}

export default App;
