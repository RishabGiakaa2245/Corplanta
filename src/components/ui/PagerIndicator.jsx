'use client';
import React from 'react';

const PagerIndicator = ({ 
  totalPages = 5,
  currentPage = 0,
  onPageChange,
  className = '',
  variant = 'dots',
  size = 'md',
  ...props
}) => {
  const sizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2 sm:w-3 sm:h-3',
    lg: 'w-3 h-3 sm:w-4 sm:h-4'
  };

  const handlePageClick = (pageIndex) => {
    if (onPageChange) {
      onPageChange(pageIndex);
    }
  };

  if (variant === 'dots') {
    return (
      <div className={`flex justify-center items-center space-x-2 sm:space-x-3 ${className}`} {...props}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index)}
            className={`
              ${sizes[size]}
              rounded-full 
              transition-all 
              duration-200 
              ease-in-out
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-opacity-50
              ${index === currentPage 
                ? 'bg-blue-600 scale-110' :'bg-gray-300 hover:bg-gray-400 hover:scale-105'
              }
            `}
            aria-label={`Go to page ${index + 1}`}
            aria-current={index === currentPage ? 'page' : undefined}
          />
        ))}
      </div>
    );
  }

  if (variant === 'numbers') {
    return (
      <div className={`flex justify-center items-center space-x-1 sm:space-x-2 ${className}`} {...props}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index)}
            className={`
              px-2 py-1 sm:px-3 sm:py-2
              text-xs sm:text-sm
              rounded
              transition-all 
              duration-200 
              ease-in-out
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-opacity-50
              ${index === currentPage 
                ? 'bg-blue-600 text-white' :'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }
            `}
            aria-label={`Go to page ${index + 1}`}
            aria-current={index === currentPage ? 'page' : undefined}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex justify-center items-center space-x-2 ${className}`} {...props}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`
            ${sizes[size]}
            rounded-full 
            transition-all 
            duration-200 
            ${index === currentPage 
              ? 'bg-blue-600' :'bg-gray-300'
            }
          `}
          aria-label={`Page ${index + 1} indicator`}
        />
      ))}
    </div>
  );
};

export default PagerIndicator;