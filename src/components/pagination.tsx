interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    
    const handleClick = (page: number) => {
        if (page >= 0 && page < totalPages) {
            onPageChange(page);
        }
    };
    
    return (
        <div className="pagination">
            {pageNumbers.map((pageNumber) => (
                <button 
                    key={pageNumber}
                    onClick={() => handleClick(pageNumber -1)}
                    className={pageNumber - 1 === currentPage ? 'active' : ''}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
}

export default Pagination;