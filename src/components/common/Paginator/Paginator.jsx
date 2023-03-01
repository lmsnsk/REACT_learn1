import React from "react";
import stl from "./Paginator.module.css";

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (i < props.currentPage + 5 && i > props.currentPage - 5) pages.push(i);
  }
  return (
    <div className={stl.switcher}>
      <button
        onClick={(e) => {
          props.onPageChanged(1);
        }}
      >
        &laquo;
      </button>
      {pages.map((page) => {
        return (
          <span
            className={props.currentPage === page && stl.selectedPage}
            onClick={(e) => {
              props.onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
      <button
        onClick={(e) => {
          props.onPageChanged(pagesCount);
        }}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Paginator;
