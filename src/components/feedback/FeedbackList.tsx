import { ErrorMessage, FeedbackItem, Spinner } from "..";
import { TFeedbackItem } from "../../lib/types";

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

function FeedbackList({ feedbackItems, isLoading, errorMessage }: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {feedbackItems.map((feedbackItem) => (
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
