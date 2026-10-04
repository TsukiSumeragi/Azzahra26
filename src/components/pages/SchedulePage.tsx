import React from 'react';
import { BackNavHeader } from '../common/BackNavHeader';
import { WorkingHoursSchedule } from '../schedule/WorkingHoursSchedule';

interface SchedulePageProps {
  onBack: () => void;
  onNavigateToMatkul?: () => void;
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ onBack, onNavigateToMatkul }) => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <BackNavHeader
        pageTitle="Jam Kerja Aktif & Jadwal Kuliah"
        categoryLabel="Ketersediaan Waktu"
        onBack={onBack}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <WorkingHoursSchedule onNavigateToMatkul={onNavigateToMatkul} />
      </div>
    </div>
  );
};
