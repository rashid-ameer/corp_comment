import { Container, Footer, HashtagList } from "./components";
import FeedbackItemsProvider from "./context/FeedbackItemsProvider";

function App() {
  return (
    <div className="app">
      <Footer />
      <FeedbackItemsProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsProvider>
    </div>
  );
}

export default App;
