import HomePageHeader from "../../components/host/HomePageHeader";
import {useContext} from "react";
import DataContext from "../../components/context/DataContext";

function HomePage() {
    const context = useContext(DataContext);

    const forms = context.forms;

    return (
        <div className={"homepage"}>
            <div className={"header"}>
                <HomePageHeader />
                {forms.map((form, index) => (
                    <div key={index}>
                        {form.id}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HomePage;