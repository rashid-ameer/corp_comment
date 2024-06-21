import { FeedbackForm, Logo, PageHeading, Pattern } from "..";

type HeaderProps = {
  handleAddToFeedbackList: (text: string) => void;
};

function Header({ handleAddToFeedbackList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToFeedbackList={handleAddToFeedbackList} />
    </header>
  );
}
export default Header;
