import React from 'react';
import { BackNavHeader } from '../common/BackNavHeader';
import { CourseworkHub } from '../coursework/CourseworkHub';

interface CourseworkPageProps {
  onBack: () => void;
}

export const CourseworkPage: React.FC<CourseworkPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <BackNavHeader
        pageTitle="Dokumentasi Belajar Tiap Matkul Semester 5"
        categoryLabel="Kurikulum & Proyek Akademik"
        onBack={onBack}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <CourseworkHub />
      </div>
    </div>
  );
};
