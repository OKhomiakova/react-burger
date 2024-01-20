import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type TProtectedProps = {
  onlyUnAuth?: boolean;
  component: JSX.Element;
};

const Protected: React.FC<TProtectedProps> = ({ onlyUnAuth = false, component }) => {
  // @ts-ignore
  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  // @ts-ignore
  const user = useSelector((store) => store.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{component}</>;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: TProtectedProps) => (
  <Protected onlyUnAuth={true} component={component} />
);