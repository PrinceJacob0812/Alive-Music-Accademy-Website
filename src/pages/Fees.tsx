import { useMemo, useState } from 'react';
import { Calculator, CheckCircle2, Clock3, MapPin } from 'lucide-react';

type Level = 'Beginner' | 'Intermediate' | 'Advanced';
type Frequency = 1 | 2;
type Duration = 45 | 60;

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
  'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
  'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir',
  'Ladakh', 'Lakshadweep', 'Puducherry'
];

const fees: Record<Level, Record<Frequency, Record<Duration, number>>> = {
  Beginner: {
    1: { 45: 2800, 60: 3000 },
    2: { 45: 5000, 60: 5400 },
  },
  Intermediate: {
    1: { 45: 3200, 60: 3500 },
    2: { 45: 5500, 60: 5800 },
  },
  Advanced: {
    1: { 45: 3500, 60: 4000 },
    2: { 45: 6000, 60: 6500 },
  },
};

const levelDescription: Record<Level, string> = {
  Beginner: 'Grades 1–3',
  Intermediate: 'Grades 4–6',
  Advanced: 'Grades 7–8',
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

const Fees = () => {
  const [state, setState] = useState('Tamil Nadu');
  const [level, setLevel] = useState<Level>('Beginner');
  const [frequency, setFrequency] = useState<Frequency>(1);
  const [duration, setDuration] = useState<Duration>(45);
  const [showFullTable, setShowFullTable] = useState(false);

  const selectedFee = fees[level][frequency][duration];
  const classesPerMonth = frequency * 4;
  const hoursPerMonth = classesPerMonth * (duration / 60);


  const levelRows = useMemo(
    () =>
      ([45, 60] as Duration[]).flatMap((durationOption) =>
        ([1, 2] as Frequency[]).map((frequencyOption) => ({
          duration: durationOption,
          frequency: frequencyOption,
          fee: fees[level][frequencyOption][durationOption],
        }))
      ),
    [level]
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 mb-4">
            <Calculator className="h-4 w-4" />
            Transparent Pricing
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Fees Details
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Select your state, learning level, class frequency and duration to view your monthly fee.
            Fees are the same across all Indian states.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-orange-100 p-5 sm:p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-orange-100 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Choose your class</h2>
                <p className="text-sm text-gray-500">State is collected for verification only.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">State</span>
                <select value={state} onChange={(e) => setState(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
                  {states.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Level</span>
                <select value={level} onChange={(e) => setLevel(e.target.value as Level)} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Frequency</span>
                <select value={frequency} onChange={(e) => setFrequency(Number(e.target.value) as Frequency)} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
                  <option value={1}>1 class per week</option>
                  <option value={2}>2 classes per week</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Duration</span>
                <select value={duration} onChange={(e) => setDuration(Number(e.target.value) as Duration)} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
                  <option value={45}>45 minutes</option>
                  <option value={60}>1 hour</option>
                </select>
              </label>
            </div>

            <div className="mt-7 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-orange-100">Monthly fee</p>
                  <p className="text-4xl font-extrabold mt-1">{formatCurrency(selectedFee)}</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <Clock3 className="h-5 w-5 text-orange-500 mb-2" />
                <p className="text-xs text-gray-500">Class duration</p>
                <p className="font-semibold text-gray-900">{duration === 60 ? '1 hour' : '45 minutes'}</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <CheckCircle2 className="h-5 w-5 text-orange-500 mb-2" />
                <p className="text-xs text-gray-500">Classes / month</p>
                <p className="font-semibold text-gray-900">{classesPerMonth} classes</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <Calculator className="h-5 w-5 text-orange-500 mb-2" />
                <p className="text-xs text-gray-500">Monthly fee</p>
                <p className="font-semibold text-gray-900">{formatCurrency(selectedFee)}</p>
              </div>
            </div>

            <button onClick={() => setShowFullTable(!showFullTable)} className="mt-6 w-full rounded-xl border-2 border-orange-500 px-4 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition-colors">
              {showFullTable ? 'Hide fee table' : 'View full fee details'}
            </button>

            {showFullTable && (
              <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-orange-50 text-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left">Frequency</th>
                      <th className="px-4 py-3 text-left">Duration</th>
                      <th className="px-4 py-3 text-right">Monthly fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {levelRows.map((row) => (
                      <tr key={`${row.frequency}-${row.duration}`} className="border-t border-gray-100">
                        <td className="px-4 py-3">{row.frequency} class{row.frequency > 1 ? 'es' : ''}/week</td>
                        <td className="px-4 py-3">{row.duration === 60 ? '1 hour' : '45 minutes'}</td>
                        <td className="px-4 py-3 text-right font-semibold">{formatCurrency(row.fee)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <aside className="lg:col-span-2 rounded-2xl bg-gray-900 text-white p-6 sm:p-7 shadow-xl">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Selected plan</p>
            <h2 className="text-2xl font-bold mt-2">{level}</h2>
            <p className="text-gray-400 mt-1">{levelDescription[level]}</p>
            <div className="h-px bg-gray-700 my-6" />
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-gray-400">State</dt><dd className="font-medium text-right">{state}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gray-400">Frequency</dt><dd className="font-medium text-right">{frequency} class{frequency > 1 ? 'es' : ''}/week</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gray-400">Duration</dt><dd className="font-medium text-right">{duration === 60 ? '1 hour' : '45 minutes'}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gray-400">Monthly fee</dt><dd className="font-bold text-orange-400">{formatCurrency(selectedFee)}</dd></div>
            </dl>
            <div className="mt-7 rounded-xl bg-white/10 p-4 text-sm text-gray-300">
              <strong className="text-white">Note:</strong> State selection does not change the fee. It is requested only for student verification and registration purposes.
            </div>
          </aside>
        </div>

        {showFullTable && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4" onClick={() => setShowFullTable(false)}>
            <div className="hidden" aria-hidden="true"><X /></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Fees;
