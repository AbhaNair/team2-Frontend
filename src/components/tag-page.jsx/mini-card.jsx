import { Heading } from "../home-page/user-card/headings";

export default function MiniCard({ name, designation, pod, imgIcon }) {
  return (
    <div className="bg-[#212327] flex flex-col gap-2 p-10 w-72 items-center">
      <img
        src={imgIcon}
        alt=""
        style={{
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          marginLeft: "20px",
        }}
      />
      <Heading title={name} />
      <div className="flex flex-col pl-4 gap-1">
        <span className="text-white text-2xl bg-[#313236] py-2 px-4 rounded-md">
          {designation}
        </span>
        <span className="text-white text-2xl bg-[#313236] py-2 px-4 rounded-md">
          {pod}
        </span>
      </div>
    </div>
  );
}
