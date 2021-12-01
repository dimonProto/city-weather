import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CitiesList from "./pages/CitiesList";
import City from "./pages/City";
import NotFound from "./pages/NotFound";
import {Provider} from "react-redux";
import store from "./redux/store";
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/city-weather" element={<CitiesList />}/>
                  <Route path="/city/:id" element={<City />}/>
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
