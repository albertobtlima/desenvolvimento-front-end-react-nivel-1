import { Provider } from "react-redux";
import { TaskProvider } from "./contexts/TaskContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { store } from "./store";
import StudyPlannerPage from "./pages/StudyPlannerPage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <TaskProvider>
          <StudyPlannerPage />
        </TaskProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
