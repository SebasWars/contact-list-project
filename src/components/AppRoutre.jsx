import { Routes, Route } from "react-router-dom";
import AddNewContact from "./addNewContact";
import Homepage from "./Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/AddNewContact" element={<AddNewContact />} />
    </Routes>
  );
};

export default AppRouter;
