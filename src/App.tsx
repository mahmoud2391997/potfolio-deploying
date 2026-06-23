import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Technologies from "@/pages/Technologies";
import Skills from "@/pages/Skills";
import Works from "@/pages/Works";
import Contact from "@/pages/Contact";
import Certificates from "@/pages/Certificates";
import Services from "@/pages/Services";
import CVPage from "@/pages/CV";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/technologies" component={Technologies} />
      <Route path="/skills" component={Skills} />
      <Route path="/works" component={Works} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/certificates" component={Certificates} />
      <Route path="/cv-page" component={CVPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
