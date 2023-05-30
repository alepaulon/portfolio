import Nav from "./components/Nav/Nav"
import Homepage from "./components/Home/Homepage"

export default function Home() {
  return (
    <div className="flex m-12 flex-col lg:flex-row lg:m-24">
      <Nav />
      <Homepage />
    </div>
    
  )
}
