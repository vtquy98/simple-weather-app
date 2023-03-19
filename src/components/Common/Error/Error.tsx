import React from "react";
import "./Error.scss";

interface ErrorProps {
  error: Error;
}

export const Error = ({ error }: ErrorProps) => {
  return (
    <>
      <div className="error-container">
        <div className="error-title">Error</div>
        <div className="error-message">{error.message}</div>
      </div>
    </>
  );
};

export const ErrorHandler = (
  error: Error,
  info: { componentStack: string }
) => {
  console.error(error);
};
