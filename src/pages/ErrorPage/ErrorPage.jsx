import { Helmet } from "react-helmet";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div className="flex items-center h-screen p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <img
            className="w-4/5 md:w-1/2 rounded-lg"
            src="https://i.gifer.com/origin/3e/3e739108dbd56c80f211c0b6f9af6081_w200.webp"
            alt="error image"
          />
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl">
              <span className="title-text">{status || 404}</span>
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link to="/" className="btn-primary">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
