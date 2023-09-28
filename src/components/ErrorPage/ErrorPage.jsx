import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 items-center">
                <h3 className="text-5xl font-extrabold my-24">Oops! Page Not Found</h3>
                <Link to={-1}><button className="btn">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;