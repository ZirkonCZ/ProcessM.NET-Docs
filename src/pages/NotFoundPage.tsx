import {FC} from "react";
import {Link} from "react-router-dom";

const NotFoundPage: FC = () => {
    return (
        <div className="not-found-page fixed-height">
            <h1 className="content__header">Oops...</h1>
            <p className="content__link-back">
                404 Not Found
                <Link to="/">
                    <b>Go to homepage</b>
                </Link>
            </p>
        </div>
    );
};

export default NotFoundPage;
