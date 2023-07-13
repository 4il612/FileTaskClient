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
  const [isModalOpened, setIsModalOpened] = useState(false);
  useEffect(() => {}, [isLoading]); //реализация аджакс запроса с поулчением списка задач
  return (
    <>
      <button className="updateBTN">UPD</button>
      <button
        className="addFileBTN"
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        ADD
      </button>
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
      </div>
      <Navbar />
      {isModalOpened && (
        <div className="addModal">
          <div className="addModal__window">
            {/* здесь должны быть инпуты с выбором из файлов и алгоритмов
            обработки */}
            <button
              onClick={() => {
                setIsModalOpened(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TasksPage;
