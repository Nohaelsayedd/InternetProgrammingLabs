export default function Hero({ hero }) {
  return (
    <section className="hero">
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
    </section>
  )
}
