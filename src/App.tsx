import { AppRouter } from "./AppRouter";
import { FirebaseProvider } from "./context/firebase/firebaseContext";
import { ModalProvider } from "./context/modal/modalContext";
import { ScoreboardProvider } from "./context/scoreboard";

export const App = () => {
  return (
    <FirebaseProvider>
      <ScoreboardProvider>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </ScoreboardProvider>
    </FirebaseProvider>
  );
};
