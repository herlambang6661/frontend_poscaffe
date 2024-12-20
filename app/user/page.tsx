import type { Metadata } from "next"
import UserTable from "@/components/table/user-table"

export const metadata: Metadata = {
    title: "Users",
}

export const UserPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-screen-md mx-auto py-10">
                <h1 className="text-2xl font-bold">User List</h1>
                <UserTable/> 
            </div>
        </div>
    )
}

export default UserPage