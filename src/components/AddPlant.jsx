import { useState } from "react";
import { API } from "../api";

//add plant component
//if users wanna add new plants, use usestate
export default function AddPlant({ users, categories, onAdded }) {
  const [name, setName] = useState("");
  const [careNeeds, setCareNeeds] = useState("");
  const [instructions, setInstructions] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  //prevents refresh when they submit the new plant info
  async function handleSubmit(event) {
    event.preventDefault();

    //our backend carries out the post method and updates the query in supabase
    const response = await fetch(API.plants, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        care_needs: careNeeds,
        instructions,
        author_id: authorId,
        category_id: categoryId,
      }),
    });

    // If the API rejected it, show its error message and stop
    if (!response.ok) {
      const data = await response.json();
      alert(data.error);
      return;
    }
    //empty the form after theyve submited it
    setName("");
    setCareNeeds("");
    setInstructions("");
    setAuthorId("");
    setCategoryId("");

    alert("Plant added!");
    onAdded(); // tell App to reload the plant list
  }

  //the add plant section
  return (
    <section>
      <h2>Add Plant</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Plant name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <textarea
          placeholder="Care needs (light, water, soil)"
          value={careNeeds}
          onChange={(event) => setCareNeeds(event.target.value)}
        />

        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
        />

        <select
          value={authorId}
          onChange={(event) => setAuthorId(event.target.value)}
        >
          {/*to choose the author using a drop down option isntead of typing it to prevent null id*/}
          <option value="">Choose an author</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
        {/*same as user, drop down because these are foreign keys eavh plant must have category and author/user */}
        <select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">Choose a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {/*Submit button*/}
        <button type="submit">Add Plant</button>
      </form>
    </section>
  );
}
