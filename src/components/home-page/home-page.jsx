import SearchBox from "./search-box/search-box";
import { UserCard } from "./user-card/user-card";
import { UserTree } from "./user-tree/user-tree";

export function HomePage() {
  return (
    <div className="bg-black flex flex-col  lg:flex-row gap-20 p-28">
      <div
        className="w-96 px-8 py-4 rounded-3xl"
        style={{ backgroundColor: "#212327" }}
      >
        <SearchBox />
      </div>
      <div className="flex flex-col gap-20">
        <UserCard />
        <div>
          <UserTree id="6" managerid="2" />
        </div>
      </div>
    </div>
  );
}
