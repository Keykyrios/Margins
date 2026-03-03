import React, { useState, useEffect, useRef } from 'react';

// Inject Tailwind Directives (Vite handles this if loaded in App.jsx or main.jsx)
// However, for a true 'all-in-one' feel within Vite, we keep these in index.css 
// and import them here, or use a style tag for the custom animations.



// ==========================================

// 🎨 CUSTOM SVG ASSETS

// ==========================================



const CatNeutralSVG = ({ className }) => (

  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill="#fef08a" rx="20" border="4px solid black" />

    <path d="M 40 100 Q 40 40 100 40 Q 160 40 160 100 Q 160 160 100 160 Q 40 160 40 100 Z" fill="#ffffff" stroke="#000"
      strokeWidth="8" />

    <path d="M 40 80 L 20 20 L 80 50 Z" fill="#ffffff" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

    <path d="M 160 80 L 180 20 L 120 50 Z" fill="#ffffff" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

    <circle cx="75" cy="90" r="10" fill="#000" />

    <circle cx="125" cy="90" r="10" fill="#000" />

    <path d="M 95 110 L 105 110 L 100 115 Z" fill="#ff79c6" stroke="#000" strokeWidth="4" strokeLinejoin="round" />

    <path d="M 100 115 Q 90 125 80 120" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />

    <path d="M 100 115 Q 110 125 120 120" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />

    <line x1="20" y1="90" x2="50" y2="95" stroke="#000" strokeWidth="4" strokeLinecap="round" />

    <line x1="20" y1="105" x2="50" y2="105" stroke="#000" strokeWidth="4" strokeLinecap="round" />

    <line x1="180" y1="90" x2="150" y2="95" stroke="#000" strokeWidth="4" strokeLinecap="round" />

    <line x1="180" y1="105" x2="150" y2="105" stroke="#000" strokeWidth="4" strokeLinecap="round" />

  </svg>

);



const CatHappySVG = ({ className }) => (

  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill="#86efac" rx="20" />

    <path d="M 20 40 L 30 20 L 40 40 L 60 50 L 40 60 L 30 80 L 20 60 L 0 50 Z" fill="#fbbf24" stroke="#000"
      strokeWidth="4" />

    <path d="M 170 140 L 175 120 L 180 140 L 200 145 L 180 150 L 175 170 L 170 150 L 150 145 Z" fill="#fbbf24"
      stroke="#000" strokeWidth="4" />

    <path d="M 40 100 Q 40 40 100 40 Q 160 40 160 100 Q 160 160 100 160 Q 40 160 40 100 Z" fill="#ffffff" stroke="#000"
      strokeWidth="8" />

    <path d="M 45 65 L 20 10 L 85 45 Z" fill="#ffffff" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

    <path d="M 155 65 L 180 10 L 115 45 Z" fill="#ffffff" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

    <path d="M 60 90 Q 75 75 90 90" fill="none" stroke="#000" strokeWidth="8" strokeLinecap="round" />

    <path d="M 110 90 Q 125 75 140 90" fill="none" stroke="#000" strokeWidth="8" strokeLinecap="round" />

    <path d="M 95 110 L 105 110 L 100 115 Z" fill="#ff79c6" stroke="#000" strokeWidth="4" strokeLinejoin="round" />

    <path d="M 70 115 Q 100 150 130 115" fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" />

    <circle cx="65" cy="110" r="12" fill="#fca5a5" opacity="0.8" />

    <circle cx="135" cy="110" r="12" fill="#fca5a5" opacity="0.8" />

  </svg>

);



const CatSweatingSVG = ({ className }) => (

  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill="#fdba74" rx="20" />

    <path d="M 40 110 Q 40 50 100 50 Q 160 50 160 110 Q 160 170 100 170 Q 40 170 40 110 Z" fill="#ffffff" stroke="#000"
      strokeWidth="8" />

    <path d="M 40 80 L 10 40 L 70 60 Z" fill="#ffffff" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

    <path d="M 160 80 L 190 40 L 130 60 Z" fill="#ffffff" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

    <circle cx="75" cy="100" r="14" fill="#fff" stroke="#000" strokeWidth="6" />

    <circle cx="75" cy="100" r="4" fill="#000" />

    <circle cx="125" cy="100" r="14" fill="#fff" stroke="#000" strokeWidth="6" />

    <circle cx="125" cy="100" r="4" fill="#000" />

    <path d="M 85 130 Q 100 120 115 130" fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" />

    <path d="M 150 40 Q 160 60 150 70 Q 140 60 150 40 Z" fill="#60a5fa" stroke="#000" strokeWidth="3" />

    <path d="M 40 30 Q 50 50 40 60 Q 30 50 40 30 Z" fill="#60a5fa" stroke="#000" strokeWidth="3" />

  </svg>

);



const CatCookedSVG = ({ className }) => (

  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill="#f87171" rx="20" />

    <path d="M 0 200 Q 20 150 40 200 Q 60 120 80 200 Q 100 160 120 200 Q 140 130 160 200 Q 180 170 200 200 Z"
      fill="#ef4444" stroke="#000" strokeWidth="4" />

    <path d="M 20 200 Q 40 170 60 200 Q 80 140 100 200 Q 120 180 140 200 Q 160 150 180 200 Z" fill="#f97316" stroke="#000"
      strokeWidth="4" />

    <path d="M 30 120 Q 50 60 100 70 Q 150 50 170 120 Q 180 180 100 170 Q 20 180 30 120 Z" fill="#d1d5db" stroke="#000"
      strokeWidth="8" />

    <path d="M 35 90 Q 20 40 70 75 Z" fill="#d1d5db" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

    <path d="M 165 90 Q 180 30 120 70 Z" fill="#d1d5db" stroke="#000" strokeWidth="8" strokeLinejoin="round" />

    <line x1="60" y1="95" x2="85" y2="120" stroke="#000" strokeWidth="8" strokeLinecap="round" />

    <line x1="85" y1="95" x2="60" y2="120" stroke="#000" strokeWidth="8" strokeLinecap="round" />

    <line x1="115" y1="95" x2="140" y2="120" stroke="#000" strokeWidth="8" strokeLinecap="round" />

    <line x1="140" y1="95" x2="115" y2="120" stroke="#000" strokeWidth="8" strokeLinecap="round" />

    <ellipse cx="100" cy="145" rx="15" ry="20" fill="#000" />

    <path d="M 50 130 Q 55 150 50 160 Q 45 150 50 130 Z" fill="#60a5fa" stroke="#000" strokeWidth="3" />

    <path d="M 150 135 Q 155 155 150 165 Q 145 155 150 135 Z" fill="#60a5fa" stroke="#000" strokeWidth="3" />

  </svg>

);



// Wrapper for image with SVG fallback

const DynamicImage = ({ src, alt, FallbackSVG, className }) => {

  const [imgError, setImgError] = useState(false);

  return (

    <>

      {!imgError ? (

        <img src={src} alt={alt} onError={() => setImgError(true)}

          className={`object-contain rounded-xl border-4 border-black ${className}`}

        />

      ) : (

        <FallbackSVG className={className} />

      )}

    </>

  );

};





// ==========================================

// 🧱 BRUTALIST UI COMPONENTS

// ==========================================



const BrutalContainer = ({ children, className = "" }) => (

  <div className={`border-[6px] border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] rounded-xl p-6 md:p-10
  ${className}`}>

    {children}

  </div>

);



const BrutalInput = ({ label, value, onChange, placeholder, type = "number", min = "0" }) => {

  const [isFocused, setIsFocused] = useState(false);



  return (

    <div className="flex flex-col mb-6 group">

      <label
        className="font-black text-xl mb-2 uppercase tracking-tight transform -skew-x-6 w-fit bg-black text-white px-2 py-1">

        {label}

      </label>

      <div className="relative">

        <input type={type} min={min} value={value} onChange={onChange} placeholder={placeholder} onFocus={() =>
          setIsFocused(true)}

          onBlur={() => setIsFocused(false)}

          className={`

    w-full text-2xl font-bold p-4

    border-[4px] border-black rounded-lg

    outline-none transition-all duration-200

    ${isFocused ? 'bg-yellow-200 shadow-[8px_8px_0_0_rgba(0,0,0,1)] -translate-y-1 -translate-x-1' : 'bg-gray-50
    shadow-[4px_4px_0_0_rgba(0,0,0,1)]'}

    `}

    />

        <div className={`absolute -bottom-2 -right-2 w-4 h-4 bg-black rounded-full transition-transform ${isFocused
          ? 'scale-150' : ''}`} />

      </div>

    </div>

  );

};



const BrutalButton = ({ onClick, children, disabled, variant = 'primary' }) => {

  const variants = {

    primary: 'bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500',

    danger: 'bg-red-400 hover:bg-red-300 active:bg-red-500',

    warning: 'bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500',

  };



  return (

    <button onClick={onClick} disabled={disabled} className={` relative w-full text-2xl md:text-3xl font-black uppercase
  tracking-wider py-5 px-8 border-[6px] border-black rounded-xl transition-all duration-150
  shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:shadow-[14px_14px_0_0_rgba(0,0,0,1)] hover:-translate-y-1
  hover:-translate-x-1 active:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-2
  ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''} overflow-hidden group `}>

      <span className="relative z-10">{children}</span>

      <div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />

    </button>

  );

};



const BrutalBadge = ({ children, color = "bg-white" }) => (

  <span className={` inline-block font-black text-sm md:text-base px-3 py-1 border-[3px] border-black rounded-full
  shadow-[3px_3px_0_0_rgba(0,0,0,1)] uppercase tracking-widest ${color} `}>

    {children}

  </span>

);



// ==========================================

// 🧠 CORE LOGIC & CALCULATION ENGINE

// ==========================================



const analyzeAttendance = (conducted, attended, requiredPercent) => {

  if (conducted === 0) return null;



  const currentPercent = (attended / conducted) * 100;

  const isSafe = currentPercent >= requiredPercent;



  let classesToBunk = 0;

  let classesToAttend = 0;



  if (isSafe) {

    const x = (attended * 100 - requiredPercent * conducted) / requiredPercent;

    classesToBunk = Math.floor(x);

  } else {

    if (requiredPercent >= 100) {
      // If 100% is required and user is not already at 100%, it is impossible
      if (currentPercent < 100) { classesToAttend = Infinity; } else { classesToAttend = 0; }
    } else {
      const denominator = 100 -
        requiredPercent; if (denominator <= 0) { classesToAttend = Infinity; } else {
          const x = Math.ceil((requiredPercent *
            conducted - attended * 100) / denominator); classesToAttend = Math.max(0, x);
        }
    }
  } let level = "neutral"; if
    (currentPercent >= requiredPercent + 5) {

    level = "good";

  } else if (currentPercent >= requiredPercent) {

    level = "borderline";

  } else {

    level = "cooked";

  }



  if (requiredPercent === 100 && currentPercent < 100) { level = "cooked"; } return {
    currentPercent:
      currentPercent.toFixed(2), isSafe, classesToBunk, classesToAttend, level, deficit: conducted - attended // used to
    render explanation
  };
}; //==========================================// 🚀 MAIN APP COMPONENT
    //==========================================export default function App() { const [conductedStr,
    setConductedStr]=useState(""); const [attendedStr, setAttendedStr] = useState(""); const [requiredStr,
  setRequiredStr] = useState("75"); const [result, setResult] = useState(null); const [isCalculating,
    setIsCalculating] = useState(false); const [error, setError] = useState(""); const [shake, setShake] = useState(false);
const resultRef = useRef(null); const handleCalculate = () => {

  setError("");

  setResult(null);



  const conducted = parseInt(conductedStr, 10);

  const attended = parseInt(attendedStr, 10);

  const required = parseFloat(requiredStr);



  if (isNaN(conducted) || isNaN(attended) || isNaN(required)) {

    setError("Bruh, enter actual numbers. Don't leave fields blank.");

    triggerShake();

    return;

  }

  if (conducted < 0 || attended < 0 || required < 0) {
    setError("Negative numbers? Are you time traveling to skip
      classes ? "); triggerShake(); return; } if (attended> conducted) {

      setError("You attended more classes than conducted? Stop the cap. 🧢");

    triggerShake();

    return;

  }

  if (required > 100) {

    setError("Requirement > 100%? What kind of dictatorial college is this?");

    triggerShake();

    return;

  }

  if (conducted === 0) {

    setError("0 classes conducted? Go back to sleep, term hasn't started.");

    triggerShake();

    return;

  }



  setIsCalculating(true);



  setTimeout(() => {

    const analysis = analyzeAttendance(conducted, attended, required);

    setResult(analysis);

    setIsCalculating(false);



    setTimeout(() => {

      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }, 100);



  }, 800);

};



const triggerShake = () => {

  setShake(true);

  setTimeout(() => setShake(false), 500);

};



const resetApp = () => {

  setConductedStr("");

  setAttendedStr("");

  setResult(null);

  setError("");

  window.scrollTo({ top: 0, behavior: 'smooth' });

};



const addClass = (type) => {

  const c = parseInt(conductedStr || "0", 10);

  const a = parseInt(attendedStr || "0", 10);



  if (type === 'attend') {

    setConductedStr((c + 1).toString());

    setAttendedStr((a + 1).toString());

  } else if (type === 'bunk') {

    setConductedStr((c + 1).toString());

  }

  setResult(null);

};



const renderCat = () => {

  if (!result && !isCalculating) {

    return
    <DynamicImage src="https://ik.imagekit.io/zti35iikw/neutral.jpg?tr=w-400" alt="Neutral"
      FallbackSVG={CatNeutralSVG}
      className="w-full max-w-[250px] mx-auto drop-shadow-[8px_8px_0_rgba(0,0,0,1)] transition-transform hover:scale-105" />
      ;

  }

  if (isCalculating) {

    return
    <DynamicImage src="https://ik.imagekit.io/zti35iikw/neutral.jpg?tr=w-400" alt="Spinning Neutral"
      FallbackSVG={CatNeutralSVG}
      className="w-full max-w-[250px] mx-auto animate-spin drop-shadow-[8px_8px_0_rgba(0,0,0,1)]" />;

  }



  switch (result.level) {

    case 'good':

      return
      <DynamicImage src="https://ik.imagekit.io/zti35iikw/Good.png?tr=w-400" alt="Good" FallbackSVG={CatHappySVG}
        className="w-full max-w-[250px] mx-auto drop-shadow-[8px_8px_0_rgba(0,0,0,1)] animate-bounce" />;

    case 'borderline':

      return
      <DynamicImage src="https://ik.imagekit.io/zti35iikw/border.png?tr=w-400" alt="Borderline"
        FallbackSVG={CatSweatingSVG}
        className="w-full max-w-[250px] mx-auto drop-shadow-[8px_8px_0_rgba(0,0,0,1)] animate-pulse" />;

    case 'cooked':

      return
      <DynamicImage src="https://i.imgur.com/uZ7OK8i.jpeg" alt="Cooked" FallbackSVG={CatCookedSVG}
        className="w-full max-w-[250px] mx-auto drop-shadow-[8px_8px_0_rgba(0,0,0,1)] animate-wiggle" />;

    default:

      return
      <DynamicImage src="https://ik.imagekit.io/zti35iikw/neutral.jpg?tr=w-400" alt="Neutral"
        FallbackSVG={CatNeutralSVG} className="w-full max-w-[250px] mx-auto drop-shadow-[8px_8px_0_rgba(0,0,0,1)]" />;

  }

};



const getThemeData = () => {

  if (!result) return { bg: 'bg-[#f4f4f5]', text: 'Ready to face reality?' };

  switch (result.level) {

    case 'good': return { bg: 'bg-[#bbf7d0]', border: 'border-green-600', title: 'W. TOUCH GRASS NOW.' };

    case 'borderline': return { bg: 'bg-[#fef08a]', border: 'border-yellow-600', title: 'LIVING ON THE EDGE.' };

    case 'cooked': return { bg: 'bg-[#fecaca]', border: 'border-red-600', title: 'IT IS SO OVER FOR YOU.' };

    default: return { bg: 'bg-[#f4f4f5]' };

  }

};



const theme = getThemeData();



return (

  <div className={`min-h-screen font-sans selection:bg-pink-400 selection:text-black transition-colors duration-500
        ${isCalculating ? 'bg-black' : theme.bg} p-4 md:p-8 flex flex-col items-center justify-start
        overflow-x-hidden`}>



    {/* BACKGROUND NOISE / PATTERN */}

    <div className="fixed inset-0 pointer-events-none opacity-20" style={{
      backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px'
    }}></div>



    {/* HEADER SECTION */}

    <header className="w-full max-w-4xl text-center mb-10 mt-6 relative z-10">

      <div className="inline-block relative">

        <h1 className={` text-5xl md:text-7xl font-black uppercase tracking-tighter text-white p-4 border-[6px]
              border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] transform -rotate-2 ${isCalculating
            ? 'bg-pink-500 animate-pulse' : 'bg-indigo-500'} transition-colors duration-300 `}>

          MARGINS

        </h1>

        <div className="absolute -top-6 -right-8 rotate-12">

          <BrutalBadge color="bg-yellow-300">v3.0 💀</BrutalBadge>

        </div>

      </div>

      <p
        className="mt-8 text-xl md:text-2xl font-bold bg-white inline-block px-4 py-2 border-[4px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform rotate-1">

        Stop calculating in your head. Face the reality.

      </p>

    </header>



    {/* MAIN CONTAINER */}

    <main className={`w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 ${shake ? 'animate-shake'
      : ''}`}>



      {/* LEFT COL: INPUTS */}

      <BrutalContainer className="flex flex-col justify-between">

        <div>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2 inline-block">The Stats</h2>

            <button onClick={resetApp}
              className="text-sm font-bold underline hover:text-red-500 transition-colors">Clear All</button>

          </div>



          <BrutalInput label="Classes Conducted" placeholder="e.g. 40" value={conductedStr} onChange={(e) => {
            setConductedStr(e.target.value); setResult(null);
          }}

          />



          <BrutalInput label="Classes Attended" placeholder="e.g. 25" value={attendedStr} onChange={(e) => {
            setAttendedStr(e.target.value); setResult(null);
          }}

          />



          <BrutalInput label="Required %" placeholder="e.g. 75" value={requiredStr} onChange={(e) => {
            setRequiredStr(e.target.value); setResult(null);
          }}

          />



          {/* Quick Actions */}

          <div className="mb-8">

            <label className="font-bold text-sm uppercase tracking-wider mb-2 block text-gray-600">Quick
              Actions (What if today...)</label>

            <div className="flex gap-4">

              <button onClick={() => addClass('attend')}

                className="flex-1 border-[3px] border-black bg-green-300 hover:bg-green-400 font-bold py-2
                          shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1
                          active:shadow-[0_0_0_0_rgba(0,0,0,1)] transition-all"

              >

                + Attended

              </button>

              <button onClick={() => addClass('bunk')}

                className="flex-1 border-[3px] border-black bg-red-300 hover:bg-red-400 font-bold py-2
                          shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1
                          active:shadow-[0_0_0_0_rgba(0,0,0,1)] transition-all"

              >

                + Bunked

              </button>

            </div>

          </div>

        </div>



        {/* Error Message Display */}

        {error && (

          <div
            className="bg-red-500 text-white border-[4px] border-black p-4 mb-6 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform -skew-y-1 animate-bounce">

            ⚠️ {error}

          </div>

        )}



        <BrutalButton onClick={handleCalculate} disabled={isCalculating}>

          {isCalculating ? "Crunching..." : "DO I PASS? 🎲"}

        </BrutalButton>

      </BrutalContainer>



      {/* RIGHT COL: VISUAL STATUS */}

      <BrutalContainer
        className="flex flex-col items-center justify-center text-center bg-white relative overflow-hidden">

        <div className="absolute top-4 left-4 text-4xl opacity-20">✨</div>

        <div className="absolute bottom-4 right-4 text-4xl opacity-20">🔥</div>



        <div className="mb-8 relative z-10 w-full">

          {renderCat()}

        </div>



        {!result && !isCalculating && (

          <div
            className="font-bold text-2xl border-4 border-dashed border-gray-300 p-6 w-full text-gray-400 rotate-1">

            Waiting for inputs... <br /> Don't be scared.

          </div>

        )}



        {isCalculating && (

          <div className="font-black text-3xl animate-pulse text-pink-500 tracking-widest uppercase">

            Calculating Fate...

          </div>

        )}



        {result && !isCalculating && (

          <div className="w-full flex flex-col items-center animate-fade-in-up">

            <h3 className="text-4xl font-black uppercase mb-2">{theme.title}</h3>

            <div className="text-6xl font-black mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-white" style={{
              WebkitTextStroke: '2px black'
            }}>

              {result.currentPercent}%

            </div>

            <BrutalBadge color={result.isSafe ? "bg-green-300" : "bg-red-300"}>

              {result.isSafe ? "SAFE ZONE" : "DANGER ZONE"}

            </BrutalBadge>

          </div>

        )}

      </BrutalContainer>



    </main>



    {/* RESULTS DEEP DIVE SECTION */}

    {result && !isCalculating && (

      <section ref={resultRef} className="w-full max-w-4xl mt-12 mb-20 relative z-10 animate-fade-in-up delay-200">



        <div
          className="bg-black text-white border-[6px] border-black p-2 mb-6 transform -rotate-1 shadow-[10px_10px_0_0_rgba(0,0,0,0.5)]">

          <h2 className="text-3xl font-black uppercase text-center tracking-widest text-yellow-300">The Brutal
            Breakdown</h2>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">



          {/* The Verdict Card */}

          <BrutalContainer className={`bg-white ${theme.border}`}>

            <h3 className="text-2xl font-black border-b-4 border-black pb-2 mb-6 uppercase">The Verdict</h3>



            <div className="space-y-6 text-xl font-bold">

              {result.isSafe ? (

                <>

                  <div className="flex items-start gap-4">

                    <span className="text-4xl">😎</span>

                    <p>You have a buffer. You can legally bunk the next <span
                      className="bg-green-300 px-2 py-1 border-2 border-black inline-block transform -skew-x-6 text-2xl">{result.classesToBunk}</span>
                      classes without dropping below {requiredStr}%.</p>

                  </div>

                  {result.classesToBunk > 5 && (

                    <div className="bg-yellow-200 border-l-[6px] border-black p-4 text-base">

                      <strong>Pro Tip:</strong> Don't blow them all at once. Save them for when the prof schedules a
                      surprise test or when a new game drops.

                    </div>

                  )}

                  {result.classesToBunk === 0 && (

                    <div className="bg-orange-200 border-l-[6px] border-black p-4 text-base">

                      <strong>Warning:</strong> You are EXACTLY on the border. If you breathe outside class tomorrow, you
                      drop.

                    </div>

                  )}

                </>

              ) : (

                <>

                  <div className="flex items-start gap-4">

                    <span className="text-4xl">💀</span>

                    {result.classesToAttend === Infinity ? (

                      <p>It's mathematically impossible to reach {requiredStr}% even if you attend every class until the
                        end of time. Rip.</p>

                    ) : (

                      <p>You need to attend the next <span
                        className="bg-red-400 text-white px-2 py-1 border-2 border-black inline-block transform skew-x-6 text-2xl shadow-[2px_2px_0_0_#000]">{result.classesToAttend}</span>
                        classes in a row just to hit {requiredStr}%.</p>

                    )}

                  </div>

                  {result.classesToAttend > 0 && result.classesToAttend !== Infinity && (

                    <div className="bg-red-100 border-[4px] border-red-500 p-4 text-sm transform rotate-1">

                      <strong>The Math behind the Madness:</strong> Wondering why you need {result.classesToAttend}
                      classes to make up for skipping {result.deficit}? <br /><br />

                      Because every future class you attend doesn't give you a "100% boost". It only gives you an
                      effective net gain of <strong>{100 - requiredStr}%</strong> against your debt! The deeper your
                      deficit, the harder the climb! This is academia cooking you right now. 🍳

                    </div>

                  )}

                </>

              )}

            </div>

          </BrutalContainer>



          {/* The Math Card */}

          <BrutalContainer className="bg-white">

            <h3 className="text-2xl font-black border-b-4 border-black pb-2 mb-6 uppercase">The Math</h3>



            <div className="flex flex-col gap-6">

              <div>

                <div className="flex justify-between font-bold mb-2 uppercase text-sm">

                  <span>Attendance Bar</span>

                  <span>{result.currentPercent}%</span>

                </div>

                <div className="h-10 w-full border-[4px] border-black bg-gray-200 relative overflow-hidden p-1">

                  <div className={`h-full border-2 border-black ${result.isSafe ? 'bg-green-400' : 'bg-red-400'}
                      transition-all duration-1000 ease-out`} style={{
                      width: `${Math.min(100, Math.max(0,
                        result.currentPercent))}%`
                    }} />

                  <div className="absolute top-0 bottom-0 w-2 bg-black z-10" style={{
                    left: `${requiredStr}%`,
                    transform: 'translateX(-50%)'
                  }}>

                    <div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-black bg-black text-white px-1">
                      REQ</div>

                  </div>

                </div>

              </div>



              <table className="w-full text-left font-bold text-lg border-collapse">

                <tbody>

                  <tr className="border-b-[3px] border-black">

                    <td className="py-3">Conducted</td>

                    <td className="py-3 text-right text-2xl">{conductedStr}</td>

                  </tr>

                  <tr className="border-b-[3px] border-black">

                    <td className="py-3">Attended</td>

                    <td className="py-3 text-right text-2xl">{attendedStr}</td>

                  </tr>

                  <tr className="border-b-[3px] border-black">

                    <td className="py-3">Missed</td>

                    <td className="py-3 text-right text-2xl text-red-500">{conductedStr - attendedStr}</td>

                  </tr>

                </tbody>

              </table>

            </div>

          </BrutalContainer>



        </div>

      </section>

    )}



    {/* FOOTER */}

    <footer
      className="mt-auto py-8 text-center font-bold text-sm uppercase tracking-widest relative z-10 border-t-4 border-black w-full max-w-4xl">

      <a href="https://keykyrios.github.io/" target="_blank" rel="noopener noreferrer"
        className="bg-white inline-block px-4 py-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-yellow-200 transition-colors">

        Built by Mitrajit Ghorui. ☕

      </a>

    </footer>



    {/* --- INJECTED CSS STYLES FOR ANIMATIONS --- */}

    <style dangerouslySetInnerHTML={{
      __html: ` @keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% {
          transform: rotate(3deg); } } @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90%
          { transform: translateX(-10px); } 20%, 40%, 60%, 80% { transform: translateX(10px); } } @keyframes fade-in-up
          { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          .animate-wiggle { animation: wiggle 0.5s ease-in-out infinite; } .animate-shake { animation: shake 0.5s
          cubic-bezier(.36,.07,.19,.97) both; } .animate-fade-in-up { animation: fade-in-up 0.6s cubic-bezier(0.16, 1,
          0.3, 1) forwards; } .delay-200 { animation-delay: 0.2s; } ::-webkit-scrollbar { width: 16px; }
          ::-webkit-scrollbar-track { background: #f4f4f5; border-left: 4px solid black; } ::-webkit-scrollbar-thumb {
          background: #fbbf24; border-left: 4px solid black; border-bottom: 4px solid black; }
          ::-webkit-scrollbar-thumb:hover { background: #f59e0b; } `}} />



  </div>

);

      }