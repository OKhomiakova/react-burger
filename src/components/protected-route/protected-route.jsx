import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";
// import PropTypes from 'prop-types';

const Protected = ({onlyUnAuth = false, component}) => {
    const isAuthChecked = useSelector(store => store.user.isAuthChecked);
    const user = useSelector(store => store.user.user);
    const location = useLocation();

    if (!isAuthChecked) {
        return null;
    }

    if (onlyUnAuth && user) {
        console.log("location.state", location.state);
        const { from } = location.state || { from: { pathname: "/" }};
        return <Navigate to={from}/>;
    }

    if (!onlyUnAuth && !user) {
        console.log('location', location);
        return <Navigate to="/login" state={{from: location}} />;
    }

    return component;
}

export const OnlyAuth = Protected;

export const OnlyUnAuth = ({component}) => <Protected onlyUnAuth={true} component={component} />;

// Protected.propTypes = {
//     onlyUnAuth: PropTypes.bool,
//     component: PropTypes.oneOfType([
//       PropTypes.arrayOf(PropTypes.element),
//       PropTypes.element,
//       PropTypes.elementType,
//     ]),
//   };
  
// OnlyUnAuth.propTypes = {
//     component: PropTypes.oneOfType([
//       PropTypes.arrayOf(PropTypes.element),
//       PropTypes.element,
//       PropTypes.elementType,
//     ]),
// };