type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loding...";
  } else if (props.status === "success") {
    message = "Data Fetched Successfully";
  } else if (props.status === "error") {
    message = "Error Fetching";
  }
  return <div>Status - {message}</div>;
};

export default Status;
