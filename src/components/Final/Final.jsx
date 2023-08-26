import { useState } from "react";
import acceptedStudentsData from "./data.js";

function App() {
  const [nationalId, setNationalId] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkAcceptance = () => {
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      if (!/^\d{10}$/.test(nationalId)) {
        setError("فرمت کد ملی وارد شده صحیح نیست.");
      } else if (acceptedStudentsData[nationalId]) {
        const studentName = acceptedStudentsData[nationalId];
        setResult(
          <p className='text-lg font-semibold my-6'>
            تبریک میگم{" "}
            <span className='text-green-600'>{studentName} عزیز!</span>
            {" "}شما در آموزشگاه ورودی قبول شدین 😍
          </p>
        );
      } else {
        setResult("متاسفم دوست من 🥲 شما قبول نشدین");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='w-2/6 container mx-auto my-12 flex flex-col justify-center items-center border border-slate-700/40 rounded-xl'>
      <div>
        <img src='https://www.uniref.ir/media/lo/1782.webp' alt='' />
      </div>
      <h1 className='mb-12'>سلام! به سامانه مشاهده وضعیت دانشگاه هاتف خوش آمدید</h1>
      <label htmlFor='nationalId' className='block mb-4'>
        لطفا کد ملی خود را وارد کنید{" "}
      </label>
      <input
        type='text'
        id='nationalId'
        value={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
        className='outline-slate-800/30 border p-3 rounded-md w-5/6'
      />
      {error && <p className='text-red-500'>{error}</p>}
      <button onClick={checkAcceptance} className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md m-4 w-5/6 transition duration-300'>
        <div className="flex justify-center gap-4">
          {isLoading ? (
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6 animate-spin'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
              </svg>
            </span>
          ) : (
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
              </svg>
            </span>
          )}
          <span>بررسی وضعیت</span>
        </div>
      </button>

      {isLoading ? (
        <div className='text-xl font-semibold my-6'>
          در حال بررسی...
        </div>
      ) : (
        result
      )}
    </div>
  );
}

export default App;
