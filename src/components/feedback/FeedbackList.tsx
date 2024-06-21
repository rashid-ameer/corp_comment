import { ErrorMessage, FeedbackItem, Spinner } from "..";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemsStore((state) => state.getFilteredFeedbackItems());

  return (
    <ol className="feedback-list">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {filteredFeedbackItems.map((feedbackItem) => (
            <FeedbackItem
              key={feedbackItem.id}
              feedbackItem={feedbackItem}
            />
          ))}
        </>
      )}
    </ol>
  );
}
export default FeedbackList;
