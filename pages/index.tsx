export default function Home() {
  return (
    <div className="text-black w-auto flex justify-center flex-col items-center h-screen">
      <div className="border mb-4">
        <input type="text" placeholder="NAME" className="border p-2" />
      </div>

      <div className="border mb-4">
        <label className="block mb-2 text-sm font-medium">Age:</label>
        <select className="border p-2" defaultValue="">
          <option value="" disabled>
            Select Age
          </option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="border p-4">
        <label className="block mb-2 text-sm font-medium">Upload File:</label>
        <input type="file" className="border p-2" />
      </div>

  <button className="bg-red-500 p-2 border my-2 rounded-lg">SUBMIT</button>
    </div>
  );
}
