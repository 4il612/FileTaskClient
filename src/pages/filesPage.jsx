import FileCard from "../components/fileCard";
import Navbar from "../components/navbar";
import Table from "../components/table";
import { useEffect, useState } from "react";

const FilesPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.HOST}/file-server/`).then((r) => {
      r.json().then((data) => {
        setCards(data);
      });
    });
  }, [isLoading]); //реализация аджакс запроса с поулчением списка задач

  const [isModalOpened, setIsModalOpened] = useState(false);
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
        <Table>
          {cards.map((card) => {
            return <FileCard title={card.name} id={card.id} />;
          })}
        </Table>
      </div>
      <Navbar />
      {isModalOpened && (
        <div className="addModal">
          <div className="addModal__window">
            <input name="file" type="file" />
            <button
              onClick={() => {
                const inputFile = document.querySelector('input[type="file"]');
                const formData = new FormData();
                formData.append("file", inputFile.files[0]);
                fetch(`${process.env.HOST}/file-server/`, {
                  method: "POST",
                  body: formData,
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

export default FilesPage;
