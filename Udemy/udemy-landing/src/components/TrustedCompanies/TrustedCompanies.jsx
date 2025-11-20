export default function TrustedCompanies({ list }) {
  return (
    <section className="trusted">
      <h2>Trusted by companies worldwide</h2>

      <div className="trusted-grid">
        {list.map(company => (
          <div className="trusted-item" key={company.id}>
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
