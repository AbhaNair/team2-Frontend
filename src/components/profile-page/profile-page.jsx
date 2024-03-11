import { UserInput } from "./user-input";
import { UserCard } from "../home-page/user-card/user-card.jsx";
import FileUpload from "./file-upload.jsx";

export default function ProfilePage() {
  return (
    <div className="bg-black h-full text-white flex flex-col gap-5 pl-96 p-10 overflow-auto ">
      <form className="flex flex-col gap-5" action="" method="post">
        <div>
          <UserCard />
        </div>
        <div
          style={{
            backgroundColor: "#212327",
            padding: "40px",
            maxWidth: "1000px",
            borderRadius: "30px",
          }}
          className="flex flex-col gap-5 "
        >
          <UserInput heading="Account Number" content="394758679" />
          <UserInput heading="Account Type" content="Savings" />
          <UserInput heading="Account Holder Name" content="Natasha Khaleira" />
          <UserInput heading="Bank Name" content="Kotak Mahindra" />
          <UserInput heading="Branch Name" content="Yelahanka" />
          <UserInput heading="Ifsc" content="Kotak Mahindra" />
        </div>
        <div
          style={{
            backgroundColor: "#212327",
            padding: "40px",
            maxWidth: "1000px",
            borderRadius: "30px",
          }}
          className="flex flex-col gap-5"
        >
          <FileUpload heading="Upload Aadhar" />
          <FileUpload heading="Upload PAN" />
          <FileUpload heading="Upload Offer Letter" />
        </div>
        <button
          className="bg-[#212327] p-2 w-32 inline-block rounded-xl text-lg "
          type="submit"
        >
          Save Details
        </button>
      </form>
    </div>
  );
}
