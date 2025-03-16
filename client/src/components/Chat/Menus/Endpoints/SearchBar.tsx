import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '~/utils';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, className }) => {
  return (
    <div className={cn('relative py-1.5', className)}>
      <Search
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-primary"
        aria-hidden="true"
      />
      <input
        type="text"
        placeholder="Search endpoints and models"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-md bg-surface-secondary py-2 pl-9 pr-3 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Search endpoints and models"
      />
    </div>
  );
};

export default React.memo(SearchBar);
