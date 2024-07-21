"use client"

import { useUser } from "@clerk/nextjs"

const WelcomMsg = () => {
 const {user , isLoaded} = useUser()
    return (

    <div className="space-y-2 mb-4">
        <h2 className="text-2xl text-white font-medium lg:text-4xl">
            Welcome Back
            {
                isLoaded?",":" "
            }{
                user?.fullName 
            }
        </h2>
        <p className="text-sm text-[#89b6fd] bg:text-base">
Tis is your Fine ass overview report
        </p>

        </div>

  )
}

export default WelcomMsg