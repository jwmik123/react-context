import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, dispatch] = useReducer(reducer, [
    { id: 1, title: "project 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "project 2", body: "Quisque cursus, metus vitae pharetra" },
  ]);

  return (
    <ProjectContext.Provider value={{ projects, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
