import RegisterPatient from '../features/RegisterPatient/RegisterPatient';
import CompletedList from '../features/CompletedList/CompletedList';
import BedGrid from '../features/BedGrid/BedGrid';

export default function Layout() {
  return (
    <div className="w-screen h-screen flex bg-gray-100">
      <aside className="w-[300px] p-4 border-r bg-white overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">📋 환자 등록</h2>
        <RegisterPatient />
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">🟡 대기 중</h3>
        </div>
      </aside>

      <main className="flex-1 p-4 grid grid-cols-5 grid-rows-2 gap-4 overflow-y-auto">
        <BedGrid />
      </main>

      <aside className="w-[300px] p-4 border-l bg-white overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">✅ 치료 완료</h2>
        <CompletedList />
      </aside>
    </div>
  );
}
