import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"

export default function home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
      <Sidebar />
      <Feed/>
      <Rightbar/>
    </div>
  </>
  )
  
}