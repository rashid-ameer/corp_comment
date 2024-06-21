import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [upvoteCount, setUpvoteCount] = useState<number>(feedbackItem.upvoteCount);

  const handleUpvoteCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.currentTarget.disabled = true;
    setUpvoteCount((prev) => prev + 1);
  };

  return (
    <li
      className={`feedback ${isOpen ? "feedback--expand" : ""}`}
      onClick={() => setIsOpen((prev) => !prev)}>
      <button onClick={handleUpvoteCount}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo === 0 ? "New" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
export default FeedbackItem;
