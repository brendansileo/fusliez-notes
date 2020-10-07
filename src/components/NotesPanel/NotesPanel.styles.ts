import { createUseStyles } from "react-jss";

export default createUseStyles({
  NotesPanel: (props) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: props.isMobile ? "1rem" : "0",
    width: "100%",
  }),
  NotesHeader: {
    display: "flex",
    marginBottom: "0.5rem",
    "& h2": {
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "0.05em",
      marginRight: "1rem",
      flex: "1 0 auto",
    },
  },
  NotesReset: {
    flex: "1 1 0",
    whiteSpace: "nowrap",
  },
  Notepad: {
    flexGrow: 1,
    marginBottom: "1rem",
  },
  NotepadTextarea: {
    fontSize: "1.25rem",
    width: "100%",
    height: "100%",
  },
});
