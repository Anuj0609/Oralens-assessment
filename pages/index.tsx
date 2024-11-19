import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleBackToHome = () => {
    setIsSubmitted(false);
    setName("");
    setAge("");
    setFile(null);
  };

  const isFormValid = name && age && file;

  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">
      {!isSubmitted ? (
        <div className="w-1/3 h-1/2 bg-teal-600 flex items-center justify-center flex-col rounded-sm">
          <div className="w-1/2 h-1/2 bg-teal-800 p-4 shadow-2xl rounded-xl">
            <input
              type="text"
              className="w-full px-2 py-1 mb-4 border"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="border w-full flex flex-col mb-4">
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border px-2 py-1"
              >
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

            <div className="w-full flex flex-col mb-4">
              <input
                type="file"
                className="w-full border px-2 py-1"
                onChange={(e) => {
                  if (e.target.files) {
                    setFile(e.target.files[0]);
                  }
                }}
              />
            </div>
          </div>
          <button
            className={`bg-green-600 w-1/2 p-2 text-xl mt-4 rounded-lg ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="w-1/3 h-1/2 bg-teal-600 flex items-center justify-center flex-col rounded-sm">
          <div className="w-1/2 h-1/2 bg-teal-800 p-4 shadow-2xl rounded-xl flex flex-col items-center justify-center">
            <p className="text-white text-sm mb-4 text-center">
              Your information has been sent successfully!
            </p>
            <button
              className="bg-blue-500 w-1/2 p-2 text-sm rounded-lg"
              onClick={handleBackToHome}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
