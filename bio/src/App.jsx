import { useState } from 'react'

const inputClass =
  'w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
const primaryBtn =
  'rounded-lg bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700 disabled:opacity-40'
const secondaryBtn =
  'rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-100'

function App() {
  // Which screen we are on: 1, 2, or 3 (summary)
  const [step, setStep] = useState(1)

  // All the form values live here, so they survive Next/Back
  const [form, setForm] = useState({ name: '', age: '', sleep: '', water: '', exercise: '' })

  // One handler for every input: the input's name matches a key in form
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-1 text-2xl font-bold text-teal-700">Wellness Tracker</h1>
        <p className="mb-6 text-sm text-gray-500">
          {step < 3 ? `Step ${step} of 2` : 'Summary'}
        </p>

        {step === 1 && (
          <div className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Name</span>
              <input
                className={inputClass}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Age</span>
              <input
                className={inputClass}
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
              />
            </label>
            <div className="flex justify-end pt-2">
              <button
                className={primaryBtn}
                disabled={!form.name || !form.age}
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Hours of sleep</span>
              <input
                className={inputClass}
                type="number"
                name="sleep"
                value={form.sleep}
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Glasses of water</span>
              <input
                className={inputClass}
                type="number"
                name="water"
                value={form.water}
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Daily exercise minutes</span>
              <input
                className={inputClass}
                type="number"
                name="exercise"
                value={form.exercise}
                onChange={handleChange}
              />
            </label>
            <div className="flex justify-between pt-2">
              <button className={secondaryBtn} onClick={() => setStep(1)}>
                Back
              </button>
              <button
                className={primaryBtn}
                disabled={!form.sleep || !form.water || !form.exercise}
                onClick={() => setStep(3)}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200">
              <li className="flex justify-between p-3"><span>Name</span><strong>{form.name}</strong></li>
              <li className="flex justify-between p-3"><span>Age</span><strong>{form.age}</strong></li>
              <li className="flex justify-between p-3"><span>Hours of sleep</span><strong>{form.sleep}</strong></li>
              <li className="flex justify-between p-3"><span>Glasses of water</span><strong>{form.water}</strong></li>
              <li className="flex justify-between p-3"><span>Daily exercise minutes</span><strong>{form.exercise}</strong></li>
            </ul>
            <div className="flex justify-start pt-2">
              <button className={secondaryBtn} onClick={() => setStep(2)}>
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App