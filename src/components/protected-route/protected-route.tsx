import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../utils/redux-hooks";

type TProtectedProps = {
  onlyUnAuth?: boolean;
  component: JSX.Element;
};

const Protected: React.FC<TProtectedProps> = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useAppSelector((store) => store.user.isAuthChecked);
  const user = useAppSelector((store) => store.user.user);
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