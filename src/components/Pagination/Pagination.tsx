import ReactPaginate from 'react-paginate';
import css from"./Pagination.module.css";

interface paginationProps {
  totalPages: number,
  page:number,
  onChangePage:(page: number)=>void
}


const Pagination = ({ totalPages, page,onChangePage}:paginationProps) => {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onChangePage(selected + 1)}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
};

export default Pagination;
