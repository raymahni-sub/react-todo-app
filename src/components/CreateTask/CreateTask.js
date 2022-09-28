import "./CreateTask.css";
import emojis from "../../assets/images/emojis.png";

// Icon Imports
import { GrAppsRounded, GrCalendar } from "react-icons/gr";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// Component Imports
import BaseInput from "../base/BaseInput/BaseInput";
import BaseDatePicker from "../base/BaseDatePicker/BaseDatePicker";
import BaseButton from "../base/BaseButton/BaseButton";
import BaseDivider from "../base/BaseDivider/BaseDivider";
import Messages from "../shared/Messages/Messages";
import AddCollaborators from "./AddCollaborators/AddCollaborators";

function CreateTask() {
  return (
    <div className="Create-task-area">
      {/* Main Title */}
      <div className="Main-title-area d-flex align-center justify-between m-b-6">
        <h3 className="text-green">Today's Schedule</h3>
        <div className="Title-toggle d-flex justify-between">
          <GrAppsRounded className="lighter" />
          <GrCalendar />
        </div>
      </div>

      {/* Create Task Form Area */}
      <div className="Create-task-form">
        <h3 className="text-green m-b-5">New Task</h3>

        <BaseInput title="Task Title" placeholder="Create new" />

        {/* Smiley Select */}
        <div className="Emoji-list d-flex align-center">
          <FiChevronLeft />
          <img src={emojis} alt="Emojis" />
          <FiChevronRight />
        </div>

        <BaseDivider />
        <AddCollaborators />
        <BaseDivider />

        <BaseDatePicker title="Time To Complete" />
        <BaseDatePicker title="End Date" />

        <BaseDivider />

        <BaseInput title="Hours Budgeted" placeholder="Enter Hours" />
        <BaseButton
          type="button"
          title="Save"
          extraClass="text-right"
          disabled
        />

        <BaseDivider />

        {/* Messages Area */}
        <Messages />
      </div>
    </div>
  );
}

export default CreateTask;
