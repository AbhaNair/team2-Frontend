import SearchBox1 from "./search-box/search-box-sidebar";
import SearchBox2 from "./search-box/search-box-topbar";
import { UserCard } from "./user-card/user-card";
import { UserTree } from "./user-tree/user-tree";

export function HomePage() {
  return (
    <div className=" bg-black flex flex-col  lg:flex-row gap-20 h-full overflow-auto">
      <aside className="lg:fixed lg:block hidden h-full lg:w-96 bg-[#212327] p-6">
        <SearchBox1 />
      </aside>
      <aside className="lg:hidden p-12">
        <SearchBox2 />
      </aside>
      <div className="flex lg:pl-[600px] flex-col gap-20  align-center  p-12 lg:p-20">
        <UserCard />
        <div>
          <UserTree id="2" managerid="1" />
        </div>
      </div>
    </div>
  );
}
