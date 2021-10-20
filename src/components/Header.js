import React from "react";
import Navbar from "./Navbar";

class Header extends React.Component {
    
    render() {
        return (
            <div className="ui header">
                <div className="ui small images">
                    <img id="logo" className="ui image" alt="Animal Crossing" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8fe0719-55c2-4775-9ea5-fa68ad28d089/dd98bnh-cdaa0e7e-c5f1-45f9-99fb-5a22d3c2974b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZmUwNzE5LTU1YzItNDc3NS05ZWE1LWZhNjhhZDI4ZDA4OVwvZGQ5OGJuaC1jZGFhMGU3ZS1jNWYxLTQ1ZjktOTlmYi01YTIyZDNjMjk3NGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H5-GEp9jfOrDQHz79paU8SrDzpRUBT1_lw85MCM2Ra8"/>
                    <img className="ui image" alt="nook brothers" src="https://mypotatogames.com/wp-content/uploads/2019/12/Animal_Crossing_New_Horizons_-_Timmy_and_Tommy.png"/>
                </div>
                <h1>Tracker!</h1>
                <Navbar />
            </div>
        )
    }
}

export default Header;