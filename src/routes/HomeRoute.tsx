const starterCards = [
  {
    title: 'Program Builder',
    body: 'Model cycles, deloads, and progression once your UX is defined.',
  },
  {
    title: 'Workout Capture',
    body: 'Track sets/reps/weights with quick-entry flows designed for gym use.',
  },
  {
    title: 'Progress Review',
    body: 'See trends and PRs while offline and sync snapshots to git later.',
  },
];

export function HomeRoute() {
  return (
    <section>
      <h2>Project Foundation Ready</h2>
      <p>
        This starter app uses TanStack Router, local-first storage hooks, and a
        headless git service so we can iterate on the exact UI/UX you share next.
      </p>

      <div className="card-grid">
        {starterCards.map((card) => (
          <article key={card.title} className="card">
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
