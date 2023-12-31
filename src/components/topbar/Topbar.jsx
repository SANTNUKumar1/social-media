import "./topbar.css"
import {Search,Person,Chat,Notifications } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
         <div className="topbarLeft">
          <span className="logo">SantuSocial</span>
         </div>
         <div className="topbarCenter">
          <div className="searchbar">
            <Search/>
            <input placeholder="Search for friends" className="searchInput" />
          </div>
         </div>
         <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">9</span>
            </div>

            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">69</span>
            </div>

            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="refresh" className="topbarImg" />
         </div>
         
    </div>
  )
}
