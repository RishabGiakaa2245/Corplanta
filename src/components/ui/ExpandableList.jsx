'use client';
import React, { useState } from 'react';

const ExpandableList = ({ 
  items = [],
  className = '',
  defaultExpanded = null,
  allowMultiple = false,
  ...props
}) => {
  const [expandedItems, setExpandedItems] = useState(
    defaultExpanded !== null ? [defaultExpanded] : []
  );

  const toggleItem = (index) => {
    setExpandedItems(prev => {
      if (allowMultiple) {
        return prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index];
      } else {
        return prev.includes(index) ? [] : [index];
      }
    });
  };

  const isExpanded = (index) => expandedItems.includes(index);

  return (
    <div className={`w-full ${className}`} {...props}>
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center py-4 px-0 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
            aria-expanded={isExpanded(index)}
            aria-controls={`content-${index}`}
          >
            <span className="text-lg sm:text-xl md:text-[22px] font-normal leading-6 md:leading-[26px] text-[#000000] pr-4">
              {item.title}
            </span>
            <div className="flex-shrink-0">
              <img 
                src="/images/img_arrow_down.svg" 
                alt="Toggle"
                className={`w-6 h-6 transition-transform duration-200 ${
                  isExpanded(index) ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>
          
          {isExpanded(index) && item.content && (
            <div 
              id={`content-${index}`}
              className="pb-4 px-0 text-gray-600 animate-fadeIn"
            >
              <div className="text-sm sm:text-base leading-6">
                {item.content}  
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableList;