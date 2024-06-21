import { TFeedbackItem } from "../../lib/types";
import { Header, FeedbackList } from "..";

type ContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddToFeedbackList: (text: string) => void;
};

function Container({ feedbackItems, isLoading, errorMessage, handleAddToFeedbackList }: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToFeedbackList={handleAddToFeedbackList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
}
export default Container;
