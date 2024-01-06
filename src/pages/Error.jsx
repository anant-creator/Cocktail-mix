import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
useRouteError;
import img from "../assets/not-found.svg";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="404" />
          <h3>Ohh!</h3>
          <p>We can't seem to find that page you are looking for</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Something Went Wrong</h1>
    </Wrapper>
  );
}
