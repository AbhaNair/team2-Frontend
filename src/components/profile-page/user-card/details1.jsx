// eslint-disable-next-line react/prop-types
export function Details1({ title, content }) {
  return (
    <div
      style={{
        minWidth: "160px",
        padding: "10px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "20px",
        fontWeight: "500",
      }}
    >
      <span style={{ color: "#bcbcbd" }}>{title}</span>
      <span style={{ color: "#fff" }}>{content}</span>
    </div>
  );
}
