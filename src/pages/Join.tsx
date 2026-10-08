import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, Globe2, MapPin, Music2 } from 'lucide-react';

type Region = 'india' | 'international' | null;
type IndiaArea = 'tamilNadu' | 'otherState' | null;
type TamilMode = 'group' | 'offline' | 'online';

type Row = {
  label: string;
  frequency: string;
  fee: number;
};

const indianStates = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh',
  'Uttarakhand','West Bengal','Andaman and Nicobar Islands','Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh',
  'Lakshadweep','Puducherry'
];

const tnGroup: Record<string, Row[]> = {
  'Foundation · Under 6 years · First 3 months': [
    { label: 'Kids', frequency: 'Weekly 1 · 1 Hour', fee: 800 },
    { label: 'Kids', frequency: 'Weekly 2 · 1 Hour', fee: 1200 },
  ],
  'Beginner · Grade 1 & 2': [
    { label: 'General Category', frequency: 'Weekly 1 · 1 Hour', fee: 1200 },
    { label: 'General Category', frequency: 'Weekly 2 · 1 Hour', fee: 2000 },
    { label: 'College Student', frequency: 'Weekly 1 · 1 Hour', fee: 1000 },
    { label: 'College Student', frequency: 'Weekly 2 · 1 Hour', fee: 1800 },
    { label: 'School Student', frequency: 'Weekly 1 · 1 Hour', fee: 1000 },
    { label: 'School Student', frequency: 'Weekly 2 · 1 Hour', fee: 1600 },
  ],
  'Intermediate · Grade 3 & 4': [
    { label: 'General / College / School Student', frequency: 'Weekly 1 · 1 Hour', fee: 1200 },
    { label: 'General / College / School Student', frequency: 'Weekly 2 · 1 Hour', fee: 2000 },
  ],
  'Advanced · Grade 5 & 6': [
    { label: 'General / College / School Student', frequency: 'Weekly 1 · 1 Hour', fee: 1500 },
    { label: 'General / College / School Student', frequency: 'Weekly 2 · 1 Hour', fee: 2500 },
  ],
  'Professional · Grade 7 & 8': [
    { label: 'General / College / School Student', frequency: 'Weekly 1 · 1 Hour', fee: 1800 },
    { label: 'General / College / School Student', frequency: 'Weekly 2 · 1 Hour', fee: 3000 },
  ],
};

const tnOffline: Record<string, Row[]> = {
  'Beginner · Grade 1 to 3': [
    { label: 'Personal Class', frequency: 'Weekly 1 · 1 Hour', fee: 3000 },
    { label: 'Personal Class', frequency: 'Weekly 2 · 1 Hour', fee: 5000 },
  ],
  'Intermediate · Grade 4 to 6': [
    { label: 'Personal Class', frequency: 'Weekly 1 · 1 Hour', fee: 3500 },
    { label: 'Personal Class', frequency: 'Weekly 2 · 1 Hour', fee: 6000 },
  ],
  'Advanced · Grade 7 & 8': [
    { label: 'Personal Class', frequency: 'Weekly 1 · 1 Hour', fee: 4000 },
    { label: 'Personal Class', frequency: 'Weekly 2 · 1 Hour', fee: 7000 },
  ],
};

const tnOnline: Record<string, Row[]> = {
  'Beginner · Grade 1 to 3': [
    { label: 'Online Personal', frequency: 'Weekly 1 · 45 Minutes', fee: 2800 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 45 Minutes', fee: 5000 },
    { label: 'Online Personal', frequency: 'Weekly 1 · 1 Hour', fee: 3000 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 1 Hour', fee: 5400 },
  ],
  'Intermediate · Grade 4 to 6': [
    { label: 'Online Personal', frequency: 'Weekly 1 · 45 Minutes', fee: 3200 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 45 Minutes', fee: 5500 },
    { label: 'Online Personal', frequency: 'Weekly 1 · 1 Hour', fee: 3500 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 1 Hour', fee: 5800 },
  ],
  'Advanced · Grade 7 to 8': [
    { label: 'Online Personal', frequency: 'Weekly 1 · 45 Minutes', fee: 3500 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 45 Minutes', fee: 6000 },
    { label: 'Online Personal', frequency: 'Weekly 1 · 1 Hour', fee: 4000 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 1 Hour', fee: 6500 },
  ],
};

const otherStatesFees: Record<string, Row[]> = {
  'Beginner · Grade 1 to 3': [
    { label: 'Online Personal', frequency: 'Weekly 1 · 45 Minutes', fee: 3000 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 45 Minutes', fee: 5400 },
    { label: 'Online Personal', frequency: 'Weekly 1 · 1 Hour', fee: 3300 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 1 Hour', fee: 6000 },
  ],
  'Intermediate · Grade 4 to 6': [
    { label: 'Online Personal', frequency: 'Weekly 1 · 45 Minutes', fee: 3500 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 45 Minutes', fee: 6000 },
    { label: 'Online Personal', frequency: 'Weekly 1 · 1 Hour', fee: 3800 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 1 Hour', fee: 6400 },
  ],
  'Advanced · Grade 7 to 8': [
    { label: 'Online Personal', frequency: 'Weekly 1 · 45 Minutes', fee: 4000 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 45 Minutes', fee: 6500 },
    { label: 'Online Personal', frequency: 'Weekly 1 · 1 Hour', fee: 4500 },
    { label: 'Online Personal', frequency: 'Weekly 2 · 1 Hour', fee: 7000 },
  ],
};

const internationalFees: Record<string, Row[]> = {
  'Beginner · Grade 1 to 3': [
    { label: 'International Online', frequency: 'Weekly 1 · 45 Minutes', fee: 4000 },
    { label: 'International Online', frequency: 'Weekly 2 · 45 Minutes', fee: 7500 },
    { label: 'International Online', frequency: 'Weekly 1 · 1 Hour', fee: 4500 },
    { label: 'International Online', frequency: 'Weekly 2 · 1 Hour', fee: 8500 },
  ],
  'Intermediate · Grade 4 to 6': [
    { label: 'International Online', frequency: 'Weekly 1 · 45 Minutes', fee: 4500 },
    { label: 'International Online', frequency: 'Weekly 2 · 45 Minutes', fee: 8000 },
    { label: 'International Online', frequency: 'Weekly 1 · 1 Hour', fee: 5000 },
    { label: 'International Online', frequency: 'Weekly 2 · 1 Hour', fee: 9500 },
  ],
  'Advanced · Grade 7 to 8': [
    { label: 'International Online', frequency: 'Weekly 1 · 45 Minutes', fee: 5000 },
    { label: 'International Online', frequency: 'Weekly 2 · 45 Minutes', fee: 9000 },
    { label: 'International Online', frequency: 'Weekly 1 · 1 Hour', fee: 5500 },
    { label: 'International Online', frequency: 'Weekly 2 · 1 Hour', fee: 10500 },
  ],
};

const currency = (value: number) => new Intl.NumberFormat('en-IN', {
  style: 'currency', currency: 'INR', maximumFractionDigits: 0,
}).format(value);

const FeeTable = ({ title, rows }: { title: string; rows: Row[] }) => (
  <div className="rounded-2xl border border-orange-100 bg-white shadow-sm overflow-hidden">
    <div className="bg-gradient-to-r from-orange-50 to-red-50 px-5 py-4">
      <h3 className="font-bold text-gray-900">{title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Class</th>
            <th className="px-4 py-3 text-left">Frequency / Duration</th>
            <th className="px-4 py-3 text-right">Monthly Fee</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`${row.label}-${row.frequency}-${i}`} className="border-t border-gray-100">
              <td className="px-4 py-3">{row.label}</td>
              <td className="px-4 py-3">{row.frequency}</td>
              <td className="px-4 py-3 text-right font-bold text-orange-600">{currency(row.fee)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Join = () => {
  const [region, setRegion] = useState<Region>(null);
  const [indiaArea, setIndiaArea] = useState<IndiaArea>(null);
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [tnMode, setTnMode] = useState<TamilMode>('online');
  const [level, setLevel] = useState('');

  const resetAfterRegion = (next: Region) => {
    setRegion(next);
    setIndiaArea(null);
    setState('');
    setCountry('');
    setLevel('');
  };

  const data = useMemo(() => {
    if (region === 'international') return internationalFees;
    if (region === 'india' && indiaArea === 'otherState') return otherStatesFees;
    if (region === 'india' && indiaArea === 'tamilNadu') {
      if (tnMode === 'group') return tnGroup;
      if (tnMode === 'offline') return tnOffline;
      return tnOnline;
    }
    return {};
  }, [region, indiaArea, tnMode]);

  const levelKeys = Object.keys(data);
  const rows = level ? data[level] : undefined;

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 mb-4">
            <Music2 className="h-4 w-4" /> Join Alive Music Academy
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">Choose Your Location</h1>
          <p className="mt-4 text-gray-600 text-lg">Select where you are located to view the correct 2026 monthly fee structure.</p>
        </div>

        {region && (
          <button onClick={() => resetAfterRegion(null)} className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
            <ArrowLeft className="h-4 w-4" /> Start over
          </button>
        )}

        {!region && (
          <div className="grid md:grid-cols-2 gap-6">
            <button onClick={() => resetAfterRegion('india')} className="group rounded-3xl bg-white border-2 border-orange-100 hover:border-orange-500 p-8 text-left shadow-lg transition-all hover:-translate-y-1">
              <MapPin className="h-10 w-10 text-orange-500 mb-5" />
              <h2 className="text-2xl font-bold text-gray-900">India</h2>
              <p className="mt-2 text-gray-600">Choose Tamil Nadu or another Indian state to see the applicable fees.</p>
              <span className="mt-5 inline-block font-semibold text-orange-600">Continue →</span>
            </button>
            <button onClick={() => resetAfterRegion('international')} className="group rounded-3xl bg-white border-2 border-orange-100 hover:border-orange-500 p-8 text-left shadow-lg transition-all hover:-translate-y-1">
              <Globe2 className="h-10 w-10 text-orange-500 mb-5" />
              <h2 className="text-2xl font-bold text-gray-900">Other Countries</h2>
              <p className="mt-2 text-gray-600">For students residing outside India. International online class fees apply.</p>
              <span className="mt-5 inline-block font-semibold text-orange-600">Continue →</span>
            </button>
          </div>
        )}

        {region === 'india' && !indiaArea && (
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900">Select your Indian location</h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <button onClick={() => setIndiaArea('tamilNadu')} className="rounded-2xl border-2 border-orange-200 p-6 text-left hover:border-orange-500 hover:bg-orange-50 transition">
                <h3 className="text-xl font-bold">Tamil Nadu</h3>
                <p className="text-gray-500 mt-1">View Tamil Nadu fee structures.</p>
              </button>
              <button onClick={() => setIndiaArea('otherState')} className="rounded-2xl border-2 border-gray-200 p-6 text-left hover:border-orange-500 hover:bg-orange-50 transition">
                <h3 className="text-xl font-bold">Other State</h3>
                <p className="text-gray-500 mt-1">Enter your state to continue.</p>
              </button>
            </div>
          </div>
        )}

        {region === 'india' && indiaArea === 'otherState' && (
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900">Enter your state</h2>
            <p className="text-gray-500 mt-2">The other-state online fee structure applies to Indian states outside Tamil Nadu.</p>
            <input
              list="indian-states"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Type your state name..."
              className="mt-6 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
            <datalist id="indian-states">{indianStates.filter(s => s !== 'Tamil Nadu').map(s => <option key={s} value={s} />)}</datalist>
            {state && (
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-orange-50 p-4 text-sm text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                <span><strong>{state}</strong> selected. Choose your level below.</span>
              </div>
            )}
          </div>
        )}

        {region === 'india' && indiaArea === 'tamilNadu' && (
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Tamil Nadu fee structure</h2>
            <p className="text-gray-500 mt-2">Choose the class type and then your grade level.</p>
            <div className="grid md:grid-cols-3 gap-3 mt-6">
              {([
                ['online', 'Online 1-to-1'],
                ['offline', 'Offline 1-to-1'],
                ['group', 'Group Classes'],
              ] as [TamilMode, string][]).map(([value, label]) => (
                <button key={value} onClick={() => { setTnMode(value); setLevel(''); }} className={`rounded-xl px-4 py-3 font-semibold border-2 transition ${tnMode === value ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 text-gray-700 hover:border-orange-300'}`}>
                  {label}
                </button>
              ))}
            </div>
            <label className="block mt-6">
              <span className="text-sm font-semibold text-gray-700">Level / Grade</span>
              <select value={level} onChange={(e) => setLevel(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3">
                <option value="">Select level</option>
                {levelKeys.map(key => <option key={key} value={key}>{key}</option>)}
              </select>
            </label>
          </div>
        )}

        {region === 'international' && (
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">International online classes</h2>
            <p className="text-gray-500 mt-2">For students residing outside India. Enter your country and choose your grade level.</p>
            <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Type your country..." className="mt-6 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
            <label className="block mt-5">
              <span className="text-sm font-semibold text-gray-700">Level / Grade</span>
              <select value={level} onChange={(e) => setLevel(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3">
                <option value="">Select level</option>
                {levelKeys.map(key => <option key={key} value={key}>{key}</option>)}
              </select>
            </label>
          </div>
        )}

        {region === 'india' && indiaArea === 'otherState' && state && (
          <div className="mt-6 bg-white rounded-3xl shadow-xl border border-orange-100 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Online classes for {state}</h2>
            <label className="block mt-5">
              <span className="text-sm font-semibold text-gray-700">Level / Grade</span>
              <select value={level} onChange={(e) => setLevel(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3">
                <option value="">Select level</option>
                {levelKeys.map(key => <option key={key} value={key}>{key}</option>)}
              </select>
            </label>
          </div>
        )}

        {rows && (
          <div className="mt-6 space-y-4">
            <FeeTable title={`${level}${country ? ` · ${country}` : state ? ` · ${state}` : ''}`} rows={rows} />
            <p className="text-center text-sm text-gray-500">All fees shown are monthly fees. Class frequency and duration are as specified above.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Join;
