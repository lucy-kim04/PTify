import BedCard from './BedCard';

export default function BedGrid() {
  const beds = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      {beds.map((num) => (
        <BedCard key={num} bedNumber={num} />
      ))}
    </>
  );
}
