import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/ThemeContext";
import { store } from "./store";
import StudyPlannerPage from "./pages/StudyPlannerPage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StudyPlannerPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
