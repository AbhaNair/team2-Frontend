// eslint-disable-next-line react/prop-types
export function Details1({ title, content }) {
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
      <span className="block truncate" style={{ color: "#fff" }}>
        {content}
      </span>
    </div>
  );
}
