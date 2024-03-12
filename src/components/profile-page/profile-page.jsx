import { UserInput } from "./user-input";
import { UserCard } from "../home-page/user-card/user-card.jsx";
import FileUpload from "./file-upload.jsx";
import ImgSwitch from "../home-page/user-card/img-switch.jsx";
import {useState,useEffect} from 'react'
import axios from "axios";

export default function ProfilePage({id}) {
  const [accountNumber, setaccountNumber] = useState(null)
  const [accountType, setaccountType] = useState(null)
  const [accountHolderName, setaccountHolderName] = useState(null)
  const [bankName, setBankName] = useState(null)
  const [branchName, setbranchName] = useState(null)
  const [ifsc, setifsc] = useState(null)
  useEffect(() => {
    const fetchData= async()=>{
      const {data} = await axios.get(`http://localhost:8080/getBankDetails/${id}`)
      setaccountNumber(data.accountNumber)
      setaccountType(data.accountType)
      setaccountHolderName(data.holderName)
      setBankName(data.bankName)
      setbranchName(data.branchName)
      setifsc(data.ifscCode)
    }
    fetchData()
  }, [])
  return (
    <div className="bg-black h-full text-white flex flex-col gap-5 pl-96 p-10 overflow-auto ">
      <UserCard />
        <div
          style={{
            backgroundColor: "#212327",
            padding: "40px",
            maxWidth: "1000px",
            borderRadius: "30px",
          }}
          className="flex flex-col gap-5 "
        >
          <UserInput heading="Account Number" content={accountNumber} />
          <UserInput heading="Account Type" content={accountType} />
          <UserInput heading="Account Holder Name" content={accountHolderName} />
          <UserInput heading="Bank Name" content={bankName} />
          <UserInput heading="Branch Name" content={branchName} />
          <UserInput heading="Ifsc" content={ifsc} />
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
          <FileUpload id={1} name="Upload Aadhar" />
          <FileUpload id={1} name="Upload PAN" />
          <FileUpload id={1} name="Upload Offer Letter" />
        </div>
        <button
          className="bg-[#212327] p-2 w-32 inline-block rounded-xl text-lg "
          type="submit"
        >
          Save Details
        </button>
    </div>
  );
}
