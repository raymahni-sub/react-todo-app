import "./TaskTable.css";

// Component Imports
import ActionDropdown from "../../shared/ActionDropdown/ActionDropdown";
import TableFilterDropdown from "../../shared/TableFilterDropdown/TableFilterDropdown";

function TaskTable() {
  return (
    <div className="Task-table-card">
      <div className="Task-table-header d-flex justify-between align-center m-b-4">
        <h2 className="text-green">Task</h2>
        <div className="Task-table-filter d-flex">
          <TableFilterDropdown />
        </div>
      </div>

      <div className="Task-table">
        <table>
          <tr>
            <th>Name Of Task</th>
            <th>Start Date</th>
            <th>End date</th>
            <th>Hours</th>
            <th>Progress</th>
            <th></th>
          </tr>
          <tr>
            <td>User journey of the project</td>
            <td>Jan 1, 2022</td>
            <td>Jan 31, 2022</td>
            <td>80</td>
            <td>
              <p className="font-1 text-lighter-green m-y-0">60% Complete</p>
              <div className="Table-progress-bar">
                <div className="Table-progress-bar-loaded"></div>
              </div>
            </td>
            <td>
              <ActionDropdown />
            </td>
          </tr>
          <tr>
            <td>Wireframing the project</td>
            <td>Feb 1, 2022</td>
            <td>Feb 8, 2022</td>
            <td>80</td>
            <td>
              <p className="font-1 text-lighter-green m-y-0">60% Complete</p>
              <div className="Table-progress-bar">
                <div className="Table-progress-bar-loaded"></div>
              </div>
            </td>
            <td>
              <ActionDropdown />
            </td>
          </tr>
          <tr>
            <td>User interface design</td>
            <td>March 1, 2022</td>
            <td>March 31, 2022</td>
            <td>80</td>
            <td>
              <p className="font-1 text-lighter-green m-y-0">60% Complete</p>
              <div className="Table-progress-bar">
                <div className="Table-progress-bar-loaded"></div>
              </div>
            </td>
            <td>
              <ActionDropdown />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default TaskTable;
