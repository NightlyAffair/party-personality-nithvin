import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import DataContext from "../context/DataContext";

function HomePageHeader() {
    const context = useContext(DataContext);
    const username = context.username;


    return (
        <div className="home-page-header">
            <div className="name-container">
                Welcome {username}
            </div>
            <div className={"profile-container"}>
                <button>profile</button>
            </div>
        </div>
    )
}

export default HomePageHeader;