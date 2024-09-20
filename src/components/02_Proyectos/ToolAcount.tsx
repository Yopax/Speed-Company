import React from "react";

type PropsTool = {
    title: string;
    url: string;
    };


function ToolAcount({ title,url }: PropsTool) {
  return (
    <>
      <div className="p-1  border rounded-md">
        <div className="h-[65%] bg-slate-200 rounded-md">
          <img
            className="rounded-md"
            height={80}
            width={80}
            src={url}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center text-xs inter text-center h-[35%]">
          {title}
        </div>
      </div>
    </>
  );
}

export default ToolAcount;
