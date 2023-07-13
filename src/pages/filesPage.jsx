import FileCard from "../components/fileCard";
import Navbar from "../components/navbar";
import Table from "../components/table";
import { useEffect, useState } from "react";

const FilesPage = () => {
  const cardsTMP = [
    { id: 1, title: "asd" },
    { id: 1, title: "asd" },
    { id: 1, title: "asd" },
    { id: 1, title: "asd" },
    { id: 1, title: "asd" },
    { id: 1, title: "asd" },
    { id: 1, title: "asd" },
    { id: 1, title: "asd" },
  ];
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, [isLoading]); //реализация аджакс запроса с поулчением списка задач

  const [isModalOpened, setIsModalOpened] = useState(false);
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
            return <FileCard title={card.title} id={card.id} />;
          })}
        </Table>
      </div>
      <Navbar />
      {isModalOpened && (
        <div className="addModal">
          <div className="addModal__window">
            <input type="file" />
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

export default FilesPage;
