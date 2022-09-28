import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/auth/SignupPage";
import Login from "./pages/auth/LoginPage";
import MyEvents from "./pages/MyEventsPage";
import Search from "./pages/SearchPage";
import CreateEvent from "./pages/CreateEventPage";
import Profile from "./pages/ProfilePage";
import Attendees from "./pages/AttendeesPage";
import Chat from "./pages/ChatPage";
import Event from "./pages/EventPage";
import ProtectedLayout from "./pages/ProtectedLayoutPage";
import MainLayout from "./pages/MainLayoutPage";
import EventLayout from "./pages/EventLayoutPage";
import Verify from "./pages/VerifyPage";
import NotFound from "./pages/NotFoundPage";
import Oops from "./pages/OopsPage";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import NavbarHome from "./components/NavbarHome";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: localStorage.username,
    authToken: localStorage.authToken,
  });

  const { username, authToken } = currentUser;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* <Route path="/" element={<ProtectedLayout {...{ authToken }} />}>
            <Route path="" element={<MainLayout currentUser={username} />}>
              <Route path="users/:username" element={<Profile />} />
              <Route path="events/mine" element={<MyEvents />} />
              <Route path="events/find" element={<Search />} />
              <Route path="events/create" element={<CreateEvent />} />
            </Route>

            <Route path="/" element={<EventLayout />}>
              <Route
                path="events/:id"
                element={<Event currentUser={username} />}
              />
              <Route
                path="events/:id/attendees"
                element={<Attendees currentUser={username} />}
              />
              <Route path="events/:id/chat" element={<Chat />} />
            </Route>
          </Route>


          <Route path="*" element={<NotFound />} />
          <Route path="500" element={<Oops />} /> */}
      </Routes>
    </div>
  );
}

export default App;
