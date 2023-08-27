import { useState } from "react";
import acceptedStudentsData from "./data.js";

function App() {
  // 🌟 State variables to keep track of the magic
  const [nationalId, setNationalId] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✨ The grand ceremony to check acceptance
  const checkAcceptance = () => {
    setError(null); // 🚫 Clear any previous errors
    setIsLoading(true); // 🌀 Start the enchanting spinner

    setTimeout(() => {
      if (!/^\d{10}$/.test(nationalId)) {
        setError("فرمت کد ملی وارد شده صحیح نیست."); // ❌ Oops, the incantation was incorrect
      } else if (acceptedStudentsData[nationalId]) {
        const studentName = acceptedStudentsData[nationalId];
        setResult(
          <p className='text-center font-semibold my-6 px-4'>
            تبریک می‌گویم <span className='text-green-600'>{studentName} عزیز!</span> شما در آزمون ورودی قبول شدید 😍
          </p>
        ); // 🎉 Hooray! The stars have aligned, and acceptance shines upon you
      } else {
        setResult(<p className='text-center font-semibold my-6 px-4'>متاسفم دوست من 🥲 شما قبول نشدید</p>); // 😔 Alas, the enchantment did not favor you
      }
      setIsLoading(false); // 🛑 The magical spinner rests
    }, 3000);
  };

  return (
    <div className='bg-white shadow-lg lg:w-2/6 w-full container mx-auto my-12 lg:my-2 flex flex-col justify-center items-center  rounded-xl'>
      <div className='w-full flex justify-center py-8'>
        <img src='https://s6.uupload.ir/files/شسیشسیشسیش_9s1y.png' alt='' />
      </div>
      <h1 className='mb-12 text-base md:text-lg lg:text-lg px-6 text-center text-slate-800'>سلام! به سامانه مشاهده نتایج دانشگاه هاتف خوش آمدید</h1>
      <label htmlFor='nationalId' className='block mb-4 text-slate-500 text-sm md:text-base lg:text-base'>
        لطفا کد ملی خود را وارد کنید به صورت اعداد لاتین{" "}
      </label>
      <input type='text' id='nationalId' value={nationalId} onChange={(e) => setNationalId(e.target.value)} className='outline-slate-600 border border-slate-500 p-3 rounded-md w-5/6' />
      {error && <p className='text-red-500'>{error}</p>}
      <button onClick={checkAcceptance} className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md m-4 w-5/6 transition duration-300'>
        <div className='flex justify-center gap-4'>
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

      {isLoading ? <div className='text-xl font-semibold my-6'>در حال بررسی...</div> : result}
    </div>
  );
}

export default App;
