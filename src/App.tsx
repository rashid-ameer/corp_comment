import { useEffect } from "react";
import { Container, Footer, HashtagList } from "./components";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const getFeedbackItems = useFeedbackItemsStore((state) => state.getFeedbackItems);

  useEffect(() => {
    getFeedbackItems();
  }, [getFeedbackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
