import "./lessonmodule.css";

const LessonCard = ({ name, age, image }) => {
  return (
    <div className="card-div">
      <img className="card-img" src={image} alt="" />
      <p className="card-p">
        Lesson name: <span>{name}</span>
      </p>
      <p className="card-p">
        Lesson hour: <span>{age}</span>
      </p>
    </div>
  );
};

export default LessonCard;
