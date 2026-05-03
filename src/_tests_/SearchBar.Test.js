import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

const defaultProps = {
  searchQuery: '',
  onSearchChange: jest.fn(),
  categories: ['All', 'Branding', 'Motion', 'UI/UX'],
  activeFilter: 'All',
  onFilterChange: jest.fn(),
  resultCount: 6,
};

describe('SearchBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the search input', () => {
    render(<SearchBar {...defaultProps} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('renders all category pills', () => {
    render(<SearchBar {...defaultProps} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Branding')).toBeInTheDocument();
    expect(screen.getByText('Motion')).toBeInTheDocument();
    expect(screen.getByText('UI/UX')).toBeInTheDocument();
  });

  it('shows the correct result count', () => {
    render(<SearchBar {...defaultProps} />);
    expect(screen.getByText('6 projects')).toBeInTheDocument();
  });

  it('shows singular "project" for count of 1', () => {
    render(<SearchBar {...defaultProps} resultCount={1} />);
    expect(screen.getByText('1 project')).toBeInTheDocument();
  });

  it('calls onSearchChange when user types', () => {
    render(<SearchBar {...defaultProps} />);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'branding' } });
    expect(defaultProps.onSearchChange).toHaveBeenCalledWith('branding');
  });

  it('shows clear button when searchQuery is not empty', () => {
    render(<SearchBar {...defaultProps} searchQuery="test" />);
    expect(screen.getByLabelText('Clear search')).toBeInTheDocument();
  });

  it('does not show clear button when searchQuery is empty', () => {
    render(<SearchBar {...defaultProps} searchQuery="" />);
    expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
  });

  it('calls onSearchChange with empty string when clear button clicked', () => {
    render(<SearchBar {...defaultProps} searchQuery="test" />);
    fireEvent.click(screen.getByLabelText('Clear search'));
    expect(defaultProps.onSearchChange).toHaveBeenCalledWith('');
  });

  it('calls onFilterChange when a pill is clicked', () => {
    render(<SearchBar {...defaultProps} />);
    fireEvent.click(screen.getByText('Branding'));
    expect(defaultProps.onFilterChange).toHaveBeenCalledWith('Branding');
  });

  it('marks the active filter pill as active', () => {
    render(<SearchBar {...defaultProps} activeFilter="Motion" />);
    const motionPill = screen.getByText('Motion');
    expect(motionPill).toHaveAttribute('aria-pressed', 'true');
  });

  it('inactive pills have aria-pressed false', () => {
    render(<SearchBar {...defaultProps} activeFilter="All" />);
    const brandingPill = screen.getByText('Branding');
    expect(brandingPill).toHaveAttribute('aria-pressed', 'false');
  });

  it('displays the current search query value in input', () => {
    render(<SearchBar {...defaultProps} searchQuery="motion design" />);
    expect(screen.getByRole('searchbox')).toHaveValue('motion design');
  });
});
