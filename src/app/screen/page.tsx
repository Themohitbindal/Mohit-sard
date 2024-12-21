import React from "react";

export default function ScreenPage() {
  return (
    <div>
      <div className="border border-b-2 p-2 w-full font-bold text-xl">
        SCREEN
      </div>
      <div className="flex">
        <div className="flex w-full">
          <div className="m-5 w-">
            <div className="flex justify-between">
              <div className="">Locations</div>
              <div>Add Locations</div>
            </div>
          </div>
          {/* <div className=" w-full">
            <div className="flex ">
              <div>Screens</div>
              <div>add screens</div>
            </div>
          </div> */}
        </div>
        <div>Settings</div>
      </div>
    </div>
  );
}
