// eslint-disable-next-line react/prop-types
export function Heading({ title }) {
  return (
    <span
      style={{
        color: "white",
        fontSize: "26px",
        borderLeft: "6px solid #4b8176",
        padding: "8px",
      }}
    >
      {title}
    </span>
  );
}
