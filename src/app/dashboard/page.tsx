import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";
import React from "react";

interface ScreenDataType {
  Location: number;
  "Total Screen": number;
  Online: number;
  Offline: number;
}

interface PlanDataType {
  "Screen Used": string;
  "Storage Used": string;
  "Next Invoice Date": string;
}

const screenData: ScreenDataType = {
  Location: 2,
  "Total Screen": 1,
  Online: 0,
  Offline: 0,
};

const planData: PlanDataType = {
  "Screen Used": "1/5",
  "Storage Used": "3.4MB of 500Mb",
  "Next Invoice Date": "05/11/2025",
};

const ScreenDataCard = ({ title, value }: { title: string; value: any }) => {
  return (
    <div className="border border-gray-300 bg-white rounded-xl w-full p-3 space-y-2">
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="flex">
      {/* <checking the pushing things one more time/> */}
      <div className="w-full">
        <div className="border border-b-2 p-2 w-full font-bold text-xl">
          DASHBOARD
        </div>
        <div className="flex bg-[#fafbfc]">
          <div className=" overflow-hidden rounded-lg p-5 w-5/6">
            <Image
              src="/images/ship.webp"
              width={900}
              height={200}
              alt="banner"
              className="object-cover max-w-[1500px] max-h-[260px] w-full rounded-xl"
            />

            <div>
              <div className="space-y-5 border border-gray-300 rounded-xl p-5 mt-10">
                <div className="flex justify-between">
                  <div className="">Screens</div>
                  <div>Add Screen</div>
                </div>
                <div className="flex justify-between gap-4">
                  {Object.keys(screenData).map((key) => (
                    <ScreenDataCard
                      key={key}
                      title={key}
                      value={screenData[key as keyof ScreenDataType]}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-5 border border-gray-300 rounded-xl p-5 mt-10">
                <div className="flex justify-between">
                  <div className="">Subscribe</div>
                  <div>Upgrade Plan</div>
                </div>
                <div className="flex justify-between gap-4">
                  {Object.keys(planData).map((key) => (
                    <ScreenDataCard
                      key={key}
                      title={key}
                      value={planData[key as keyof PlanDataType]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" p-3 mt-3 rounded-lg bg-white space-y-4">
            <div className="flex flex-col justify-center items-center min-h-[80vh] bg-[#e9f2f4] p-5 space-y-4 rounded-xl">
              <div>Get Started Guide</div>
              <div className="text-sm text-center">
                Learn how to use digital signage with ease
              </div>
              <div>Help Center</div>
            </div>
            <hr />
            <div className="text-center">Download player: Google Play</div>
          </div>
        </div>
      </div>
    </div>
  );
}
