//display users card

export default function Users({ users }) {
  return (
    <section>
      <h2>Gardeners</h2>

      {users.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
    </section>
  );
}
//map thru users to display who is in growLog as Gardeners (they are also the authors)
