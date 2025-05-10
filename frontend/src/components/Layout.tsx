import RegisterPatient from '../features/RegisterPatient/RegisterPatient';
import WaitingList from '../features/WaitingList/WaitingList';

export default function Layout() {
  return (
    <div className="w-screen h-screen flex bg-gray-100">
      <aside className="w-[300px] p-4 border-r bg-white">
        <h2 className="text-xl font-bold mb-4">📋 환자 등록</h2>
        <RegisterPatient />
      </aside>

      <main className="flex-1 p-4 grid grid-cols-5 grid-rows-2 gap-4">
        <WaitingList />
      </main>

      <aside className="w-[300px] p-4 border-l bg-white">
        <h2 className="text-xl font-bold mb-4">✅ 치료 완료</h2>
      </aside>
    </div>
  );
}
