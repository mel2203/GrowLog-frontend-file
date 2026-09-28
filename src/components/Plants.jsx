//plants card components
export default function Plants({ plants }) {
  return (
    <section>
      <h2>Plants</h2>
      {/*  Display component for the plants and their infu */}
      {plants.map((plant) => (
        <article key={plant.id}>
          <h3>{plant.name}</h3>
          <p>{plant.care_needs}</p>
          <p>{plant.instructions}</p>
          <small>
            Author: {plant.author} | Category: {plant.category}
          </small>
        </article>
      ))}
    </section>
  );
}
