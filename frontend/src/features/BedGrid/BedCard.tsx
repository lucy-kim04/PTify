import { useDroppable } from '@dnd-kit/core';
import { usePatientStore } from '../../stores/patientStore';

type Props = {
  bedNumber: number;
};

export default function BedCard({ bedNumber }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: `bed-${bedNumber}`,
  });

  const assignedPatient = usePatientStore((s) =>
    s.patients.find((p) => p.assignedBed === bedNumber && p.status === '진행중')
  );

  return (
    <div
      ref={setNodeRef}
      className={`bg-white border rounded p-3 shadow-sm h-[100px] flex flex-col justify-between transition ${
        isOver ? 'bg-blue-100' : ''
      }`}
    >
      <div className="text-sm font-semibold">🛏️ {bedNumber}번 베드</div>
      <div className="text-sm text-gray-600">
        {assignedPatient ? `👤 ${assignedPatient.name}` : '비어 있음'}
      </div>
    </div>
  );
}
