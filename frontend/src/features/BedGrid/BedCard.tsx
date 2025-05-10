type BedCardProps = {
  bedNumber: number;
  patientName?: string;
};

export default function BedCard({ bedNumber, patientName }: BedCardProps) {
  return (
    <div className="bg-white border rounded p-3 shadow-sm h-[100px] flex flex-col justify-between">
      <div className="text-sm font-semibold">🛏️ {bedNumber}번 베드</div>
      <div className="text-sm text-gray-600">
        {patientName ? `👤 ${patientName}` : '비어 있음'}
      </div>
    </div>
  );
}
