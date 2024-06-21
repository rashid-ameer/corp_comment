import { FeedbackForm, Logo, PageHeading, Pattern } from "..";
import { useFeedbackItemsContext } from "../../lib/hooks";

function Header() {
  const { handleAddToFeedbackList } = useFeedbackItemsContext();

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
