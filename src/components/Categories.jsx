//same as users

export default function Categories({ categories }) {
  return (
    <section>
      <h2>Categories</h2>

      <div className="chips">
        {categories.map((category) => (
          <span
            key={category.id}
            className="badge"
            data-category={category.name}
          >
            {category.name}
          </span>
        ))}
      </div>
    </section>
  );
}
