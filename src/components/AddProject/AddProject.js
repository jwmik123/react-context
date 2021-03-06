import { useState, useContext } from "react";
import "./AddProject.css";
import { ProjectContext } from "../../context/projectContext";

const AddProject = () => {
  const { dispatch } = useContext(ProjectContext);
  const [project, setProject] = useState();

  const handleProjectData = (e) => {
    setProject({
      ...project,
      [e.target.id]: e.target.value,
    });
  };

  const addNewProject = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_PROJECT", project });
  };

  return (
    <form onSubmit={addNewProject} className="add-project">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleProjectData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleProjectData}
      />
      <button>Add project</button>
    </form>
  );
};

export default AddProject;
