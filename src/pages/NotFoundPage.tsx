import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
    return (
        <div className="not-found-page fixed-height flex flex-col gap-8 text-center">
            <h1 className="content__header text-3xl">Oops...</h1>
            <p className="content__code">404</p>
            <p className="content__desc">Page not found</p>
            <Link to="/" className="routelink">
                Go to homepage
            </Link>
        </div>
    );
};

export default NotFoundPage;
