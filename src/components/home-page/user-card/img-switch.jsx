import { useState } from "react";
import def from "/avatar.png";
import pfp from "/alt.jpg";

export default function ImgSwitch() {
  const [name, setName] = useState(def);

  const changeName = () => {
    let value = name;

    console.log(name);
    if (value === def) {
      setName(pfp);
    } else {
      setName(def);
    }
  };
  return (
    <div>
      <button
        onClick={changeName}
        className="w-[120px] h-[120px] rounded-[50%]"
      >
        <img src={name} />
      </button>
    </div>
  );
}
