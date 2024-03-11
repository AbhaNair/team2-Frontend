import React from "react";

export function UserInput({ heading, content }) {
  return (
    <div className="flex flex-col">
      <label className="text-lg">{heading} </label>
      <input
        type="text"
        name={heading}
        defaultValue={content}
        className=" bg-[#313236]  text-lg border border-none focus:border-emerald-900"
      />
    </div>
  );
}
