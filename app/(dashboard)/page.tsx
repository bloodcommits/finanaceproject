import { UserButton } from "@clerk/nextjs"

const Home = () => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
dashboard page
    </div>
  )
}

export default Home