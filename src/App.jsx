import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import PLMedicalLoan from "./pages/pl-medical/PLMedicalLoan";
import PLDentalLoan from "./pages/pl-dental/PLDentalLoan";
import MentalHealth from "./pages/pl-mentalHealth/MentalHealth";
import PlasticSurgery from "./pages/pl-plasricSurgery/PlasticSurgery";
import FertilityTreatment from "./pages/pl-fertility/FertilityTreatment";
import useAutoLogout from "./useAutoLogOut";
import PLBariatric from "./pages/pl-weightloss/PLBariatric";
import CheckYourRate from "./pages/check-your-rate/CheckYourRate";
import LogIn from "./pages/login/LogIn";
import Registration from "./pages/login/Registration";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <PLMedicalLoan />,
      },
      {
        path: "/fertility",
        element: <FertilityTreatment />,
      },
      {
        path: "/dental",
        element: <PLDentalLoan />,
      },
      {
        path: "/mental-health",
        element: <MentalHealth />,
      },
      {
        path: "/plastic-surgery",
        element: <PlasticSurgery />,
      },
      {
        path: "/weight-loss",
        element: <PLBariatric />,
      },
    ],
  },
  {
    path: "/check-rate",
    element: <CheckYourRate />,
  },
  {
    path: "/auth/login",
    element: <LogIn />,
  },
  {
    path: "/auth/registration",
    element: <Registration />,
  },
]);
function App() {
  useAutoLogout();
  return <RouterProvider router={router} />;
}

export default App;
