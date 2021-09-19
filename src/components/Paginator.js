import "../styles/Paginator.css";

const Paginator = ({ currentPage, onPageChanged }) => {
  const decrementPage = () => {
    if (currentPage > 1) {
      onPageChanged(currentPage - 1);
    }
  };

  const incrementPage = () => {
    if (currentPage < 100) {
      onPageChanged(currentPage + 1);
    }
  };

  return (
    <div className="paginator">
      <button onClick={decrementPage}>&lt;</button>
      <button onClick={incrementPage}>&gt;</button>
    </div>
  );
};

export default Paginator;
