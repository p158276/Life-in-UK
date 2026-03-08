import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import FlashcardPage from "./pages/FlashcardPage";

function AppRouter() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/flashcards"} component={FlashcardPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Detect if running on GitHub Pages with /Life-in-UK/ base path
const base = window.location.pathname.startsWith('/Life-in-UK') ? '/Life-in-UK' : '';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <WouterRouter base={base}>
              <AppRouter />
            </WouterRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
