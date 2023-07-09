import FileCard from "../components/fileCard";
import Navbar from "../components/navbar";
import Table from "../components/table";

const FilesPage = () => {
  return (
    <>
      <div className="layout">
        <Table>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
          <FileCard></FileCard>
        </Table>
      </div>
      <Navbar />
    </>
  );
};

export default FilesPage;
