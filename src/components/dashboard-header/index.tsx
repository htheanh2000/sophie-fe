
"use client"
import { useAppSelector } from "@/store/hooks"
import Icon from "../icon"
import Notification from '@/components/notification'
const DashboardHeader = () => {
    const {data: user} = useAppSelector(state => state.user)
    if(!user) return <> </>
    return (
        <div className="p-7 border-violet-600/20 border-b-[1px] flex justify-between">
            <h2 className="">Hello, {user.name} !</h2>
            <div className="flex">
                <Notification/>
                <Icon name="user" size="md"/>
            </div>
        </div>
    )
}

export default DashboardHeader