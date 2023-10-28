import PageHeader from "../PageHeader";
import {Router} from "react-router";
import {Route} from "react-router-dom";
import PageTitle from "../PageTitle";

function HomePage() {
    return (
        <div>
            <PageHeader></PageHeader>
            <PageTitle text="HOMEPAGE"></PageTitle>
        </div>
    )
}

export default HomePage;