import "./App.css";
/* import "./components/LessonCard/lessonmodule.css" */
import Header from "./components/Header/Header";
import Lesson from "./pages/Lesson";
import { data } from "./helper/data.js";

function App() {
  /* const { name, age, image } = data; */
  return (
    <div className="App">
      <Header />
      <div className="Lesson">
        <h2 className="title">Lesson Reminder</h2>

        <div className="block">
          {data.map(({ name, age, image }) => {
            return <Lesson name={name} age={age} image={image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
