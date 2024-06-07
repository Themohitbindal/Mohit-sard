"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const routes = ["Dashboard", "Screen", "Playlist", "Content", "Schedule"];

const navigationRoutes = [{}];

export default function Sidebar() {
  const pathName = usePathname();
  // const currentRoute = router.;

  // useEffect(() => {
  //   if (router.isReady) {
  //     setCurrentRoute(router.pathname);
  //   }
  // }, [router.isReady, router.pathname]);
  return (
    <div className="w-[26vh] flex flex-col bg-[#03637f] h-[100vh] text-center space-y-20 pt-5">
      <div>logo</div>
      <div className="px-3 text-left">
        {routes.map((route) => {
          const routePath = "/" + route.toLowerCase();
          const isActive = routePath === pathName;
          return (
            <Link href={routePath}>
              <div
                className={` ${
                  isActive
                    ? "bg-[#e9f2f4] text-[#03637f]"
                    : "bg-[#03637f] text-[#03637fe9f2f4]"
                } text-lg hover:bg-[#e9f2f4] ${
                  !isActive && "text-[#e9f2f4]"
                }  hover:text-[#03637f] p-3 my-1 rounded-lg`}
              >
                {route}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
