import Navbar from "../components/navbar";
import Table from "../components/table";
import TaskCard from "../components/taskCard";

const TasksPage = () => {
  return (
    <>
      <button className="updateBTN">UPD</button>
      <div className="layout">
        <Table>
          <TaskCard id={1} task={"resize"} status={"processing"} />
          <TaskCard id={2} task={"resize"} status={"processing"} />
          <TaskCard id={3} status={"processing"} task={"resize"} />
          <TaskCard id={4} status={"processing"} task={"resize"} />
          <TaskCard id={5} status={"processing"} task={"resize"} />
          <TaskCard id={6} status={"processing"} task={"resize"} />
        </Table>

        <Navbar />
      </div>
    </>
  );
};

export default TasksPage;
