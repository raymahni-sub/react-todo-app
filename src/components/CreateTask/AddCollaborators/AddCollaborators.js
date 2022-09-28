import "./AddCollaborators.css";
import person1 from "../../../assets/images/thumb-1.jpg";
import person2 from "../../../assets/images/thumb-2.jpg";

// Icon Imports
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

// Component Imports
import BaseInput from "../../base/BaseInput/BaseInput";

function getRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `rgba(${x}, ${y}, ${z}, 0.2)`;
}

// Add New Collaborator
const AddNewCollaborator = () => (
  <div className="Add-new-collaborator d-flex">
    <BaseInput
      hideTitle
      noMarginBottom
      placeholder="Enter name"
      customWidth="w-50"
    />

    <div className="Add-button text-center">
      <FiChevronRight />
    </div>
  </div>
);

// Collaborators List
const CollaboratorsList = () => (
  <div className="Collaborators-list d-flex">
    <div
      className="List-item d-flex align-center"
      style={{ background: getRandomColor() }}
    >
      <img src={person1} alt="Person 1" className="m-r-1" />
      <p className="font-1 m-r-1 m-y-0">Angela</p>
      <GrFormClose />
    </div>
    <div
      className="List-item d-flex align-center"
      style={{ background: getRandomColor() }}
    >
      <img src={person2} alt="Person 1" className="m-r-1" />
      <p className="font-1 m-r-1 m-y-0">Chris</p>
      <GrFormClose />
    </div>
    <div
      className="List-item d-flex align-center"
      style={{ background: "#e7ecf2", padding: "0 0.5rem" }}
    >
      <AiOutlinePlus />
    </div>
  </div>
);

function AddCollaborators() {
  return (
    <div className="Add-collaborators">
      <p className="Title">Add Collaborators</p>

      {false ? <AddNewCollaborator /> : <CollaboratorsList />}
    </div>
  );
}

export default AddCollaborators;
