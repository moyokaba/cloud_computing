"use client";

import WorkshopSection from '@/components/Workshop/workshopSection';
import StructuredDataWorkshops from '@/components/Workshop/StructuredDataWorkshops';

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkshopSection />
      <StructuredDataWorkshops />
    </div>
  );
}