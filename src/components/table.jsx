const Table = (tableItems) => {
  return (
    <div className="table-wrapper">
      <div className="table">{tableItems.children}</div>
    </div>
  );
};

export default Table;
