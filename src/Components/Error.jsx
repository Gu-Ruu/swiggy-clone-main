import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      {/* <h2>OOPS!</h2>
      <h2>SomeThing Went Wrong</h2> */}
      <h1>
        {err.status}:{err.statusText}
      </h1>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
