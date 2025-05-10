import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { Patient } from '../../stores/patientStore';

type Props = {
  patient: Patient;
};

export default function DraggablePatient({ patient }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: patient.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-2 bg-white border rounded shadow-sm cursor-grab"
    >
      <div className="font-medium">{patient.name}</div>
      <div className="text-xs text-gray-600">
        처방: {patient.treatments.join(', ')}
      </div>
    </div>
  );
}
