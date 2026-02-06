import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Context
import { ReportProvider } from "./context/ReportContext";
import { AlertProvider } from "./context/AlertContext";

// Pages
import Home from "./pages/Home";
import ReportIncident from "./pages/ReportIncident";
import MyReports from "./pages/MyReports";
import ReportDetails from "./pages/ReportDetails";
import Alerts from "./pages/Alerts";
import CreateAlert from "./pages/CreateAlert";

function App() {
  return (
    <ReportProvider>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="report" element={<ReportIncident />} />
              <Route path="my-reports" element={<MyReports />} />
              <Route path="my-reports/:id" element={<ReportDetails />} />
              <Route path="alerts" element={<Alerts />} />
              <Route path="create-alert" element={<CreateAlert />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </ReportProvider>
  );
}

export default App;
