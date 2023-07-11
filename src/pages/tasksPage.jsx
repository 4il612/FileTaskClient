import Navbar from "../components/navbar";
import Table from "../components/table";
import TaskCard from "../components/taskCard";

const TasksPage = () => {
  return (
    <>
      <div className="layout">
        <Table>
          <TaskCard id={1} status={"processing"} />
          <TaskCard id={2} status={"processing"} />
          <TaskCard id={3} status={"processing"} />
          <TaskCard id={4} status={"processing"} />
          <TaskCard id={5} status={"processing"} />
          <TaskCard id={6} status={"processing"} />
        </Table>

        <Navbar />
      </div>
    </>
  );
};

export default TasksPage;
