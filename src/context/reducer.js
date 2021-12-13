export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.project.title,
          body: action.project.body,
        },
      ];
    default:
      return state;
  }
};
