import { FeedbackForm, Logo, PageHeading, Pattern } from "..";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

function Header() {
  const addToFeedbackList = useFeedbackItemsStore((state) => state.addToFeedbackList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToFeedbackList={addToFeedbackList} />
    </header>
  );
}
export default Header;
