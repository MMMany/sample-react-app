export const NotFound = () => {
  return <h3>Page Not Found</h3>;
};

export const Crash = ({ message, reason }) => {
  return (
    <div>
      <h3>Crash Error</h3>
      {message ? <p>{message}</p> : <p />}
      {reason ? <p>Reason {reason}</p> : <p />}
    </div>
  );
};
