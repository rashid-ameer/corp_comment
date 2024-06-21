import { ErrorMessage, FeedbackItem, Spinner } from "..";
import { useFeedbackItemsContext } from "../../lib/hooks";

function FeedbackList() {
  const { isLoading, errorMessage, filteredFeedbackItems } = useFeedbackItemsContext();

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
