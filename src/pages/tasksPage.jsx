import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import TaskCard from "../components/taskCard";

const TasksPage = () => {
  const cardsTMP = [
    { id: 1, task: "resizing", status: "pending", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "pending", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "pending", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "pending", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "pending", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "pending", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "pending", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "pending", source: "img1.jpg" },
  ];
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, [isLoading]); //реализация аджакс запроса с поулчением списка задач
  return (
    <>
      <button className="updateBTN">UPD</button>
      <button className="addFileBTN">ADD</button>
      <div className="layout">
        <Table>
          {cardsTMP.map((card) => {
            return (
              <TaskCard
                id={card.id}
                task={card.task}
                status={card.status}
                sourceImage={card.source}
              />
            );
          })}
        </Table>

        <Navbar />
      </div>
    </>
  );
};

export default TasksPage;
