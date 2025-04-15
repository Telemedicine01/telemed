import { BrowserRouter, Routes, Route } from "react-router";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/doc" element={<DocLayout />}>
          <Route path="dochome" element={<DocHome />} />
          <Route path="docprofile" element={<DocProfile />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="myposts" element={<MyPosts />} />
        </Route>

        <Route path="/patient" element={<PatLayout />}>
          <Route path="pathome" element={<PatHome />} />
          <Route path="feed" element={<Feed />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="patprofile" element={<PatProfile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
