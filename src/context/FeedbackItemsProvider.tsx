import { createContext, useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../lib/types";

type FeedbackItemsProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsProvider = {
  filteredFeedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToFeedbackList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsProvider | null>(null);

function FeedbackItemsProvider({ children }: FeedbackItemsProviderProps) {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((feedbackItem) => feedbackItem.company === selectedCompany)
        : feedbackItems,
    [selectedCompany, feedbackItems]
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((feedbackItem) => feedbackItem.company)
        .filter((company, index, array) => array.indexOf(company) === index),
    [feedbackItems]
  );

  const handleAddToFeedbackList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

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
    <FeedbackItemsContext.Provider
      value={{
        filteredFeedbackItems,
        isLoading,
        errorMessage,
        companyList,
        handleAddToFeedbackList,
        handleSelectCompany,
      }}>
      {children}
    </FeedbackItemsContext.Provider>
  );
}

export default FeedbackItemsProvider;
