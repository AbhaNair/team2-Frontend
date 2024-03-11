export function PhoneDet({ title, content }) {
  return (
    <div
      style={{
        padding: "10px 16px",
        fontSize: "20px",
        fontWeight: "500",
      }}
    >
      <span className="block truncate" style={{ color: "#bcbcbd" }}>
        {title}
      </span>
      <a
        href="tel:+918618939422"
        className="block truncate"
        style={{ color: "#fff" }}
      >
        {content}
      </a>
    </div>
  );
}
