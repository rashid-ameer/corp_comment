import { useContext } from "react";
import { FeedbackItemsContext } from "../context/FeedbackItemsProvider";

export const useFeedbackItemsContext = () => {
  const context = useContext(FeedbackItemsContext);

  if (!context) {
    throw new Error("useFeedbackItemsContext must be used withing FeedbackItemsProvider");
  }

  return context;
};
