//display users card

export default function Users({ users }) {
  return (
    <section>
      <h2>Gardeners</h2>
      <div className="chips">
        {users.map((user) => (
          <span key={user.id} className="chip">
            {user.username}
          </span>
        ))}
      </div>
    </section>
  );
}
//map thru users to display who is in growLog as Gardeners (they are also the authors)
