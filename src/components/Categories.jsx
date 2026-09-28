//same as users

export default function Categories({ categories }) {
  return (
    <section>
      <h2>Categories</h2>

      {categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </section>
  );
}
