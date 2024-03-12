import MiniCard from "./mini-card";

export default function TagPage() {
  return (
    <div className=" bg-black h-full overflow-auto">
      <MiniCard heading="Name 1" designation="Desg 1" pod="Pod 1" />
      <MiniCard heading="Name 2" designation="Desg 2" pod="Pod 2" />
      <MiniCard heading="Name 3" designation="Desg 3" pod="Pod 3" />
      <MiniCard heading="Name 4" designation="Desg 4" pod="Pod 2" />
      <MiniCard heading="Name 5" designation="Desg 5" pod="Pod 3" />
      <MiniCard heading="Name 6" designation="Desg 6" pod="Pod 1" />
    </div>
  );
}
