import React from 'react';
import { BackNavHeader } from '../common/BackNavHeader';
import { Projects } from '../Projects';

interface ProjectsPageProps {
  onBack: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <BackNavHeader
        pageTitle="Galeri Proyek Lengkap"
        categoryLabel="Showcase Portofolio"
        onBack={onBack}
      />

      <div className="py-6">
        <Projects />
      </div>
    </div>
  );
};
