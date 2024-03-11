export function EmailDet({ title, content }) {
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
        href={`mailto:${content}`}
        className="block truncate"
        style={{ color: "#fff" }}
      >
        {content}
      </a>
    </div>
  );
}
