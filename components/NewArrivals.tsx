import SectionHeader from './SectionHeader';

export default function NewArrivals() {
  return (
    <div>
      <SectionHeader title="New Arrival" subtitle="Featured" />
      <div className="w-full flex gap-4">
        <div className="bg-slate-300 w-full p-2">Play Station</div>
        <div className="bg-slate-600 w-full flex flex-col gap-4 p-2">
          <div className="bg-slate-400 p-2">Women's Collection</div>
          <div className="flex gap-2">
            <div className="bg-slate-300 w-full p-2">Speakers</div>
            <div className="bg-slate-300 w-full p-2">Perfume</div>
          </div>
        </div>
      </div>
    </div>
  );
}
