import "./App.css";
import Header from "./components/Header";

/* loggedIn prop for <Header /> set to true for now.
  We are not sure where that piece of state will come from yet.
*/

function App() {
  return (
    <div className="App">
      <Header loggedIn={true} />
      <Routes>
        <Route path="/profile/:username/*" element={<Profile />} />
        <Route path="/" element={state.loggedIn ? <Home /> : <HomeGuest />} />
        <Route path="/post/:id" element={<ViewSinglePost />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
