import React from 'react';
import { BackNavHeader } from '../common/BackNavHeader';
import { Contact } from '../Contact';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <BackNavHeader
        pageTitle="Informasi Kontak & Kolaborasi"
        categoryLabel="Terhubung Langsung"
        onBack={onBack}
      />

      <div className="py-6">
        <Contact />
      </div>
    </div>
  );
};
