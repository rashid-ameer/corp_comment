import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";

type Store = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  addToFeedbackList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
  getFeedbackItems: () => Promise<void>;
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",

  addToFeedbackList: async (text: string) => {
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

    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

    await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
  },
  selectCompany: (company: string) => {
    set(() => ({ selectedCompany: company }));
  },
  getCompanyList: () => {
    const feedbackItems = get().feedbackItems;
    return feedbackItems
      .map((feedbackItem) => feedbackItem.company)
      .filter((company, index, array) => array.indexOf(company) === index);
  },
  getFilteredFeedbackItems: () => {
    const selectedCompany = get().selectedCompany;
    const feedbackItems = get().feedbackItems;

    return selectedCompany
      ? feedbackItems.filter((feedbackItem) => feedbackItem.company === selectedCompany)
      : feedbackItems;
  },
  getFeedbackItems: async () => {
    set(() => ({ isLoading: true }));
    set(() => ({ errorMessage: "" }));

    try {
      const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");
      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();
      set(() => ({ feedbackItems: data.feedbacks }));
    } catch (error) {
      set(() => ({ errorMessage: "Something went wrong!" }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
}));
