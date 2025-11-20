export default function TrustedCompanies({ list }) {
  return (
    <section className="trusted">
      <h2>Trusted by companies worldwide</h2>

      <div className="trusted-logos">
        {list.map(company => (
          <img key={company.id} src={company.logo} alt={company.name} />
        ))}
      </div>
    </section>
  )
}
