import React, { useState } from "react";
import { FEEDBACK_MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToFeedbackList: (text: string) => void;
};

function FeedbackForm({ onAddToFeedbackList }: FeedbackFormProps) {
  const [feedbackText, setFeedbackText] = useState<string>("");
  const [showValidIndicator, setShowValidIndicator] = useState<boolean>(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState<boolean>(false);
  const charCount = FEEDBACK_MAX_CHARACTERS - feedbackText.length;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (feedbackText.includes("#") && feedbackText.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      return;
    }

    onAddToFeedbackList(feedbackText);
    setFeedbackText("");
  };

  return (
    <form
      className={`form ${showValidIndicator ? "form--valid" : ""} ${showInvalidIndicator ? "form--invalid" : ""}`}
      onSubmit={handleSubmit}>
      <textarea
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        id="feedback-textarea"
        placeholder="empty"
        spellCheck="false"
        maxLength={FEEDBACK_MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">Enter your feedback here, remember to #hashtag company</label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
export default FeedbackForm;
