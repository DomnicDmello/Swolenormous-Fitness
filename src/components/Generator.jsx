import { React, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

const Generator = (props) => {
  const {muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props
  const [showModal, setshowModal] = useState(false);

  function toggleModal() {
    setshowModal(!showModal);  
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
        setMuscles(muscles.filter((val) => val !== muscleGroup));
        return;
      }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setshowModal(false)
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if(muscles.length === 2) {
        setshowModal(false)
    }
  }

  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([])
                setPoison(type);
              }}
              key={typeIndex}
              className={
                "border rounded-lg py-3 bg-slate-950 px-4 duration-200 border-blue-400 hover:border-blue-800" +
                (type === poison ? " border-blue-800 " : " border-blue-400 ")
              }
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged fir annihilation"}
      />
      <div className="bg-slate-950 flex flex-col border border-solid border-blue-400 hover:border-blue-800 rounded-lg">
        <button
          onClick={toggleModal}
          className="relative flex p-3 items-center justify-center"
        >
          <p className="capitalize">{muscles.length == 0 ? "Select muscle groups" : muscles.join(' ') }</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-blue-800 duration-200 " +
                    (muscles.includes(muscleGroup) ? " text-blue-600" : " ")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              key={schemeIndex}
              className={
                "border rounded-lg py-3 px-4 bg-slate-950 duration-200 border-blue-400 hover:border-blue-800" +
                (scheme === goal ? " border-blue-800 " : " border-blue-400 ")
              }
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text="Formulate" />
    </SectionWrapper>
  );
};

export default Generator;
