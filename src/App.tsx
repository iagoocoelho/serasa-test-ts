import SectionContainer from "./components/container/sectionContainer";
import ToastProvider from "./context/toastContext";
import FeedbackForm from "./pages/feedback/feedbackForm";

const App = () => {
  return (
    <main>
      <SectionContainer>
        <div className="relative">
          <ToastProvider>
            <FeedbackForm />
          </ToastProvider>
        </div>
      </SectionContainer>
    </main>
  );
};

export default App;
