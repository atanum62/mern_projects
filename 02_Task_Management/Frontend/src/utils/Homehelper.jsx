import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotesOff } from "react-icons/tb";

export const sidebardata = [
  {
    title: "All tasks",
    icon: <CgNotes />,
    link: "/",
  },
  {
    title: "Important tasks",
    icon: <MdLabelImportant />,
    link: "/importanttasks",
  },
  {
    title: "Completed tasks",
    icon: <FaCheckDouble />,
    link: "/completedtasks",
  },
  {
    title: "Incompleted tasks",
    icon: <TbNotesOff />,
    link: "/incompletedtasks",
  },
];
