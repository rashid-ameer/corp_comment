import { useState } from "react";
import { FEEDBACK_MAX_CHARACTERS } from "../lib/constants";

function FeedbackForm() {
  const [feedbackText, setFeedbackText] = useState<string>("");
  const charCount = FEEDBACK_MAX_CHARACTERS - feedbackText.length;

  return (
    <form className="form">
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
