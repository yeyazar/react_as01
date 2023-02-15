import LessonCard from "../components/LessonCard/LessonCard";

const Lesson = ({ name, age, image }) => {
  return (
    <div>
      <LessonCard name={name} age={age} image={image}/>
    </div>
  );
};

export default Lesson;
