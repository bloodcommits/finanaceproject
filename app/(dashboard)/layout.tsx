import Header from "@/components/Header";

type Props = {
    children: React.ReactNode;
}

const DashboardLayout = (
    {children}:Props
) =>{

    return (
        <>

{/* I am the dashboard layout */}

        <Header/>
        <main className="px-3 lg:px-14">
            {children}
        </main>
        </>
    
    
    )

}


export default DashboardLayout