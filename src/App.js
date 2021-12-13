import React, { Fragment } from "react";

import ProjectProvider from "./context/projectContext";
import Projects from "./containers/Projects";
import AddProject from "./components/AddProject/AddProject";

function App() {
  return (
    <ProjectProvider>
      <AddProject />
      <Projects />
    </ProjectProvider>
  );
}

export default App;
