function AddUser({ onAdded }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    //So the whole thing says: "Post this letter to /users saying 'add this username', then wait for their answer."
    const response = await fetch(API.users, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      const data = await response.json();
      alert(data.error);
      return;
    }
    //set back to empty after submit (after this block)
    setUsername("");

    alert("User added!");
    onAdded(); // tell App to reload the user list
  }

  //add a new user
  return (
    <section>
      <h2>Add Gardener</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button type="submit">Add Gardener</button>
      </form>
    </section>
  );
}

//adding users, same as before must await fetch and use POST to add new data to our API
