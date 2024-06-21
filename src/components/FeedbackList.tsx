import { useEffect, useState } from "react";
import { ErrorMessage, FeedbackItem, Spinner } from "./";
import { TFeedbackItem } from "../lib/types";

function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const getFeedbackItems = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");
        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    getFeedbackItems();
  }, []);

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
