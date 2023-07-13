import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import TaskCard from "../components/taskCard";

const TasksPage = () => {
  const filesTMP = [
    { id: 1, title: "asd" },
    { id: 2, title: "asd" },
    { id: 3, title: "asd" },
    { id: 4, title: "asd" },
    { id: 5, title: "asd" },
    { id: 6, title: "asd" },
    { id: 7, title: "asd" },
    { id: 8, title: "asd" },
  ];
  const cardsTMP = [
    { id: 1, task: "resizing", status: "finished", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "finished", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "finished", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "finished", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "finished", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "finished", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "finished", source: "img1.jpg" },
    { id: 1, task: "resizing", status: "finished", source: "img1.jpg" },
  ];
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);
  useEffect(() => {}, [isLoading]); //реализация аджакс запроса с поулчением списка задач
  return (
    <>
      <button className="updateBTN" onClick={() => setIsLoading(true)}>
        UPD
      </button>
      <button
        className="addFileBTN"
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        ADD
      </button>
      <div className="layout">
        <div className="clickAttention">Click on any card to see more...</div>
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
            <div className="addModal__optionsWrapper">
              <div className="addModal__selectWrapper">
                <label for="action">action</label>
                <select name="action">
                  <option value="resize">resize</option>
                  <option value="crop">crop</option>
                  <option value="rotate">rotate</option>
                </select>
              </div>
              <div className="addModal__selectWrapper">
                <label for="action">action</label>
                <select name="file">
                  {filesTMP.map((file) => {
                    return <option value={file.id}>{file.id}</option>;
                  })}
                </select>
              </div>
            </div>
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
