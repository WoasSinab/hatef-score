import { useState } from "react";
import StudentsData from "./data.js";

function App() {
  const [nationalId, setNationalId] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkAcceptance = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (StudentsData.includes(nationalId)) {
        setResult("تبریک میگم شما در آموزشگاه ورودی قبول شدین 😍");
      } else {
        setResult("متاسفم دوست من 🥲 شما قبول نشدین");
      }
      setIsLoading(false);
    }, 3000); // شبیه‌سازی یک تاخیر ۳ ثانیه‌ای برای نمایش وضعیت لودینگ
  };

  return (
    <div className='w-2/6 container mx-auto my-12 flex flex-col justify-center items-center border border-slate-700/40 rounded-xl'>
      <div>
        <img src='https://www.uniref.ir/media/lo/1782.webp' alt='' />
      </div>
      <h1 className='mb-8 mt-3'>سلام! به سامانه مشاهده وضعیت دانشگاه هاتف خوش آمدید</h1>
      <label htmlFor='nationalId' className='block mb-2 items-end'>
        لطفا کد ملی خود را وارد کنید{" "}
      </label>
      <input type='text' id='nationalId' value={nationalId} onChange={(e) => setNationalId(e.target.value)} className='border p-2 rounded-md w-5/6' />
      <button onClick={checkAcceptance} className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md m-4 w-5/6'>
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
        <p id='result' className='text-lg font-semibold my-6'>
          {result}
        </p>
      )}
    </div>
  );
}

export default App;