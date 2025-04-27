import React from "react";

interface IProp {
  title: string;
  type: "text" | "email" | "textaria";
  placeHolder: string;
  setState: (val: string) => void;
  state: string;
  validateEmail?: (val: string) => void;
}

function Step({
  title,
  type,
  placeHolder,
  state,
  setState,
  validateEmail,
}: IProp) {
  return (
    <div>
      <h2 className="my-5 h1 text-3xl font-bold ">{title}</h2>
      {type === "text" || type === "email" ? (
        <>
          <input
            className="bg-gray-700 w-full  p-4 rounded-xl focus:outline focus:outline-blue-400"
            type={type}
            placeholder={placeHolder}
            onChange={(e) => {
              setState(e.target.value);
              if (validateEmail) validateEmail(e.target.value);
            }}
            value={state}
          />
        </>
      ) : (
        <textarea
          className="bg-gray-700 w-full  p-4 rounded-xl focus:outline focus:outline-blue-400"
          name=""
          id=""
          placeholder={placeHolder}
          onChange={(e) => {
            setState(e.target.value);
          }}
        ></textarea>
      )}
    </div>
  );
}

export default Step;
