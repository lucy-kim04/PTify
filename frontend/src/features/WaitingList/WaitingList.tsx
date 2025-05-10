import { usePatientStore } from '../../stores/patientStore';

export default function WaitingList() {
  const patients = usePatientStore((state) => state.patients);

  const waiting = patients.filter((p) => p.status === '대기중');

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-2">🟡 대기 중 환자</h3>
      {waiting.length === 0 ? (
        <p className="text-sm text-gray-500">대기 중인 환자가 없습니다.</p>
      ) : (
        waiting.map((patient) => (
          <div
            key={patient.id}
            className="p-2 bg-white border rounded shadow-sm"
          >
            <div className="font-medium">{patient.name}</div>
            <div className="text-xs text-gray-600">
              처방: {patient.treatments.join(', ')}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
