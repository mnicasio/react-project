import React from "react";
import Loading from "../loading/loading-component";

const withLoading = (WrappedComponent) => {
    return function ComponentWithLoading(props) {
        const { isLoading } = props;

        if (isLoading) return <Loading />;
        return <WrappedComponent {...props} />;
    };
};

export default withLoading;
