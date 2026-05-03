import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

const mockProject = {
  id: 1,
  title: 'Ember Identity System',
  client: 'Helio Foods',
  category: 'Branding',
  desc: 'A complete visual identity overhaul for an organic food brand.',
  year: 2025,
  emoji: '🔥',
  skills: ['Brand Strategy', 'Logo Design', 'Packaging'],
  color: '#c8501a',
};

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    expect(screen.getByText('Ember Identity System')).toBeInTheDocument();
  });

  it('renders the client name', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    expect(screen.getByText('Helio Foods')).toBeInTheDocument();
  });

  it('renders the category tag', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    expect(screen.getAllByText('Branding').length).toBeGreaterThan(0);
  });

  it('renders the year', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    expect(screen.getByText('2025')).toBeInTheDocument();
  });

  it('renders up to 3 skill tags', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    expect(screen.getByText('Brand Strategy')).toBeInTheDocument();
    expect(screen.getByText('Logo Design')).toBeInTheDocument();
    expect(screen.getByText('Packaging')).toBeInTheDocument();
  });

  it('truncates description longer than 115 characters', () => {
    const longDesc = 'A'.repeat(120);
    const project = { ...mockProject, desc: longDesc };
    render(<ProjectCard project={project} onClick={() => {}} />);
    const displayed = screen.getByText(/A+…/);
    expect(displayed).toBeInTheDocument();
    expect(displayed.textContent.length).toBeLessThanOrEqual(120);
  });

  it('does not truncate short descriptions', () => {
    const shortDesc = 'Short description.';
    const project = { ...mockProject, desc: shortDesc };
    render(<ProjectCard project={project} onClick={() => {}} />);
    expect(screen.getByText('Short description.')).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', () => {
    const handleClick = jest.fn();
    render(<ProjectCard project={mockProject} onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Enter key is pressed', () => {
    const handleClick = jest.fn();
    render(<ProjectCard project={mockProject} onClick={handleClick} />);
    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders fallback emoji when none provided', () => {
    const project = { ...mockProject, emoji: undefined };
    render(<ProjectCard project={project} onClick={() => {}} />);
    expect(screen.getByText('🎨')).toBeInTheDocument();
  });

  it('has accessible aria-label', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    expect(screen.getByLabelText(/View project: Ember Identity System/i)).toBeInTheDocument();
  });

  it('renders the View link', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);
    expect(screen.getByText(/View →/)).toBeInTheDocument();
  });
});
