// eslint-disable-next-line react/prop-types
export function Details2({ title, content }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(188, 188, 189,0.1)",
        minWidth: "200px",
        borderRadius: "16px",
        padding: "10px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "20px",
        fontWeight: "500",
      }}
    >
      <span style={{ color: "#fff" }}>{content}</span>
      <span style={{ color: "#bcbcbd" }}>{title}</span>
    </div>
  );
}
