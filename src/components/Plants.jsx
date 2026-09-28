//plants card components
export default function Plants({ plants }) {
  return (
    <section>
      <h2>Plants</h2>

      {/*  Display component for the plants and their infu */}
      <div className="plant-grid">
        {plants.map((plant) => (
          <article
            key={plant.id}
            className="plant-card"
            data-category={plant.category}
          >
            {plant.image_url && (
              <img
                className="plant-photo"
                src={plant.image_url}
                alt={plant.name}
                loading="lazy"
              />
            )}

            <span className="badge">{plant.category}</span>
            <h3>{plant.name}</h3>
            <p className="care">{plant.care_needs}</p>
            <p>{plant.instructions}</p>
            <small>Written by {plant.author}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
