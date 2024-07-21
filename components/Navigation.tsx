'use client'
import { usePathname } from "next/navigation"
import Navbutton from "./Navbutton"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMedia } from "react-use"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"

const route = [
    {
        href:"/",
        label:"Overview"
    },
    {
        href:"/transaction",
        label:"Transaction"
    },
    {
        href:"/account",
        label:"Account"
    },
    {
        href:"/categories",
        label:"Categories"
    },
    {
        href:"/settings",
        label:"Settings"
    },
]

const Navigation = () => {
    const pathname = usePathname()
    
    const[open , setopen]= useState(false)
    const router = useRouter()
    const isMobile = useMedia("(max-width:1024px)", false);

    const onClick = (href:string)=>{
       router.push(href)
       setopen(false)

    }
    if(isMobile){
        return(
            <Sheet>
                <SheetTrigger>
                    <Button variant="outline" size="sm" className="font-nprmal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition">
<Menu  className="size-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <nav className="flex flex-col gap-y-2 pt-6">
                {route.map(route=>(
                    <Button variant={route.href==pathname?"secondary":"ghost"}  key={route.href} 
                    onClick={()=>onClick(route.href)}>
{
    route.label
}
                            </Button>
                        ))}
                        </nav>

  </SheetContent>
            </Sheet>

        )
    }




    return (
    <nav className="hidden items-center gap-x-2 lg:flex">
{route.map((route)=>(
    <Navbutton 
    href={route.href} 
    key={route.href} 
    label={route.label}
    isActive={pathname==route.href} 
    />

))}
    </nav>
  )
}

export default Navigation