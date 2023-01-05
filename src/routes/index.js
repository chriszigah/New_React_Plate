import AppRoutes from "./appRoutes";
import { Route } from "react-router-dom";

const mainroutes = AppRoutes.map((routeItem, index) => (
  <Route index key={index} path={routeItem.path} element={routeItem.element} />
));

export default mainroutes;
