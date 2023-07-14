const FileCard = ({ id, title }) => {
  return (
    <div className="fileCard">
      <div className="fileCard__title">{title}</div>
      <div className="fileCard__buttonWrapper">
        <button className="fileCard__BTN-delete">DELETE</button>
        <button
          className="fileCard__BTN"
          onClick={() => {
            fetch(`${host}/file-server/${id}/download`);
          }}
        >
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default FileCard;
