import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocLayout from "./layout/DocLayout";
import PatLayout from "./layout/PatLayout";
import RootLayout from "./layout/RootLayout";
import About from "./pages/apphome/About";
import Contact from "./pages/apphome/Contact";
import Home from "./pages/apphome/Home";
import Services from "./pages/apphome/Services";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DocHome from "./pages/doctor/DocHome";
import DocProfile from "./pages/doctor/DocProfile";
import CreatePost from "./pages/doctor/CreatePost";
import MyPosts from "./pages/doctor/MyPosts";
import Feed from "./pages/patient/Feed";
import MyAppointments from "./pages/patient/MyAppointments";
import PatHome from "./pages/patient/PatHome";
import PatProfile from "./pages/patient/PatProfile";
import Appointments from "./pages/doctor/Appointments";
import DocChat from "./pages/doctor/DocChat";
import PatChat from "./pages/patient/PatChat";
import PatDash from "./pages/patient/PatDash";
import AllPatients from "./pages/doctor/AllPatients";
import AllDocs from "./pages/patient/AllDocs"
import DocDash from "./pages/doctor/DocDash";
import PatMessages from "./pages/patient/PatMessages";
import PatInfo from "./pages/doctor/PatInfo";
import BookAppointment from "./pages/patient/BookAppointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root public layout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        

      

        {/* Doctor dashboard */}
        <Route path="/doc" element={<DocLayout />}>
          <Route index element={<DocHome />} />
          <Route path="docdash" element={<DocDash />} />
          <Route path="docprofile" element={<DocProfile />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="myposts" element={<MyPosts />} />
          <Route path="docappointments" element={<Appointments />} />
          <Route path="docchat" element={<DocChat />} />
          <Route path="mypatients" element={<AllPatients />} />
          <Route path="patinfo" element={<PatInfo />} />
        </Route>

        {/* Patient dashboard */}
        <Route path="/patient" element={<PatLayout />}>
          <Route index element={<PatHome />} />
          <Route path="feed" element={<Feed />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="bkappointment" element={<BookAppointment />} />
          <Route path="patprofile" element={<PatProfile />} />
          <Route path="alldocs" element={<AllDocs />} />
          <Route path="patchat" element={<PatChat />} />
          <Route path="patdash" element={<PatDash />} />
          <Route path="patmessages" element={<PatMessages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
