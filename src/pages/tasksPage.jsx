import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import TaskCard from "../components/taskCard";

const TasksPage = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [selectedFileID, setSelectedFileID] = useState(0);
  const [cards, setCards] = useState([]);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);
  useEffect(() => {
    if (isModalOpened === true) {
      fetch(`${process.env.HOST}/file-server`).then((r) =>
        r.json().then((data) => setFiles(data))
      );
    }
  }, [isModalOpened]);
  useEffect(() => {
    fetch(`${process.env.HOST}/image-processing/`).then((r) => {
      r.json().then((data) => {
        setCards(data);
      });
    });
  }, [isLoading]);
  return (
    <>
      <button className="updateBTN" onClick={() => setIsLoading(!isLoading)}>
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
          {cards.map((card) => {
            return (
              <TaskCard
                id={card.id}
                task={card.algorithm}
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
                <select
                  onChange={(e) => {
                    setSelectedFileID(e.target.value);
                  }}
                  name="file"
                >
                  {files.map((file) => {
                    return <option value={file.id}>{file.id}</option>;
                  })}
                </select>
              </div>
            </div>
            <button
              onClick={() => {
                fetch(`${process.env.HOST}/image-processing`, {
                  method: "POST",
                  body: JSON.stringify({
                    file_ids: [Number(selectedFileID)],
                    algorithm: selectedAlgorithm,
                    params: {
                      width: 128,
                      height: 128,
                    },
                  }),
                });
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
