import { Details1 } from "./details1";
import { Details2 } from "./details2";
import { Heading } from "./headings";

export function UserCard() {
  return (
    <div
      style={{
        backgroundColor: "#212327",
        padding: "40px",
        maxWidth: "1000px",
        borderRadius: "30px",
      }}
      className="flex flex-col gap-5"
    >
      <Heading title="Employee Details" />
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <img
          src="/avatar.jpeg"
          alt=""
          style={{
            borderRadius: "50%",
            width: "140px",
            height: "140px",
          }}
        />
        <div>
          <Heading title="Natasha Khaleira" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            <Details1 title="Role" content="Head of Growth" />
            <Details1 title="Phone Number" content="+91 37465 38 494" />
            <Details1 title="Email Address" content="natasha@gmail.com" />
            <Details1 title="Slack" content="natasha@slack" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
        <Details2 title="Pod" content="Risk and Analysis" />
        <Details2 title="Joining Date" content="24/12/2023" />
        <Details2 title="Date of birth" content="3/5/2002" />
        <Details2 title="Address" content="#647, Meadows, Bangalore" />
      </div>
    </div>
  );
}