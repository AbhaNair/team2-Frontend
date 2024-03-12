import { Details1 } from "./details1";
import { Details2 } from "./details2";
import { Heading } from "./headings";
import { PhoneDet } from "./phone-det";
import { EmailDet } from "./email-det";
import { SlackDet } from "./slack-det";
import ImgSwitch from "./img-switch";
import { useEffect } from "react";
import axios from "axios";

export function UserCard({ id }) {
  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined) {
        const { data } = await axios.get(
          `http://localhost:8080/getEmployeeDetails/${id}`
        );
        console.log(data);
      }
    };
    fetchData();
  }, []);

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
      <div className="flex justify-between">
        <Heading title="Employee Details" />
        <button
          type="button"
          className="text-white bg-[#313236] px-3 rounded-md text-lg"
        >
          Download info
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <ImgSwitch />
        <div>
          <Heading title="Natasha Khaleira" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            <Details1 title="Role" content="Head of Growth" />
            <PhoneDet title="Phone Number" content="+918618939422" />
            <EmailDet title="Email Address" content="nair.abha1@gmail.com" />
            <SlackDet
              title="Slack"
              content="https://moneyview.slack.com/team/U06L8R5A962"
            />
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
