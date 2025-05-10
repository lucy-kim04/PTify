import { useState } from 'react';
import { usePatientStore } from '../../stores/patientStore';

const treatmentOptions = ['적외선', '전기치료', '온열치료', '도수치료'];

export default function RegisterPatient() {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const addPatient = usePatientStore((state) => state.addPatient);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || selected.length === 0)
      return alert('이름과 처방을 입력하세요!');
    addPatient(name, selected as any);
    setName('');
    setSelected([]);
  };

  const toggleTreatment = (t: string) => {
    setSelected((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium">환자 이름</label>
        <input
          type="text"
          className="mt-1 block w-full border px-3 py-2 rounded"
          placeholder="예: 김희주"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">처방 선택</label>
        <div className="flex flex-col gap-1">
          {treatmentOptions.map((t) => (
            <label key={t}>
              <input
                type="checkbox"
                checked={selected.includes(t)}
                onChange={() => toggleTreatment(t)}
              />{' '}
              {t}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        등록
      </button>
    </form>
  );
}
