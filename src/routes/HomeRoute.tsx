const cards = [
  {
    title: 'Router is back',
    body: 'This page renders through TanStack Router and the shared layout.',
  },
  {
    title: 'PWA still intact',
    body: 'We can wire the rest of the app back in without losing the Vite PWA setup.',
  },
]

export function HomeRoute() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-medium">Dashboard</h2>
      <div className="grid gap-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded border p-4 text-left">
            <h3 className="font-semibold">{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}