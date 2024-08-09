import React from "react";
interface PaginationProps {
    totalElements: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination = ({ totalElements, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalElements / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    
    const handleClick = (pageNumber: number) => {
        if (pageNumber >= 0 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };
    console.log(onPageChange)
    return (
        <div className="pagination">
            {pageNumbers.map((pageNumber) => (
                <button 
                    key={pageNumber}
                    onClick={() => handleClick(pageNumber)}
                    className={pageNumber - 1 === currentPage ? 'active' : ''}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
}

export default Pagination;