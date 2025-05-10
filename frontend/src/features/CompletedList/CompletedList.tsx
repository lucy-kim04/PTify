import { usePatientStore } from '../../stores/patientStore';

export default function CompletedList() {
  const patients = usePatientStore((state) => state.patients);
  const completed = patients.filter((p) => p.status === '종료됨');

  return (
    <div className="space-y-2">
      {completed.length === 0 ? (
        <p className="text-sm text-gray-500">아직 완료된 환자가 없습니다.</p>
      ) : (
        completed.map((patient) => (
          <div
            key={patient.id}
            className="p-2 bg-green-100 border border-green-300 rounded text-sm shadow-sm"
          >
            <div className="font-medium">{patient.name}</div>
            <div className="text-xs text-gray-700">
              완료한 처방: {patient.treatments.join(', ')}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
