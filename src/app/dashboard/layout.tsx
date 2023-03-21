"use client"
import Sidebar from "@/components/sidebar";
import useDevice from "@/hook/useDevice";
import { setUser } from "@/store/features/user/userSlice";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

export default function DashboardLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: {
      tag: string;
      item: string;
    }
  }) {
    const dispatch = useAppDispatch()
    useEffect(() => {
      const userString = localStorage.getItem('user');
      if(!userString) return
      const user = JSON.parse(userString)
      dispatch(setUser(user))
    },[])
    const DEVICE = useDevice()
    if(DEVICE === "MOBILE") return <div className="w-screen h-screen flex items-center justify-center"><span className="text-center max-w-sm">This website don't support for mobile device, please change your device</span></div>
    return (
        <div className="flex">
            <Sidebar/>
            {children}
        </div>
    )
  }
  
