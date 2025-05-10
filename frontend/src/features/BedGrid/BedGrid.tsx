import BedCard from './BedCard';
import { DndContext } from '@dnd-kit/core';
import { usePatientStore } from '../../stores/patientStore';

export default function BedGrid() {
  const beds = Array.from({ length: 10 }, (_, i) => i + 1);
  const assignBed = usePatientStore((s) => s.assignBed);

  const handleDrop = (event: any) => {
    const { over, active } = event;
    if (over && active) {
      const bedNumber = parseInt(over.id.replace('bed-', ''));
      assignBed(active.id, bedNumber);
    }
  };

  return (
    <DndContext onDragEnd={handleDrop}>
      {beds.map((num) => (
        <BedCard key={num} bedNumber={num} />
      ))}
    </DndContext>
  );
}
