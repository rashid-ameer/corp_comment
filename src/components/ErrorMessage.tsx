type Props = {
  message: string;
};
function ErrorMessage({ message }: Props) {
  return <div>{message}</div>;
}
export default ErrorMessage;
