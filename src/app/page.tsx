export default function Home() {
  return (
    <main className="bg-gray-300 flex items-center justify-center h-screen w-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-100">
        <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
        <p className="text-sm text-gray-500 mb-6 border-b pb-4">Set or customize your preferences for the system</p>

        <div className="mb-6 border-b pb-4">
          <div className="flex items-center mb-1 justify-between">
            <label className="text-sm font-medium mr-4">Language</label>
            <select className="p-1 border rounded-md w-28">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <p className="text-sm text-gray-500">Select the language of the platform</p>
        </div>

        <div className="mb-6 border-b pb-4">
          <label className="block text-sm font-medium mb-1">Interface theme</label>
          <p className="text-sm text-gray-500 mt-2">Customize your application appearance</p>
          <div className="flex gap-4 mt-2">
            <div className="flex flex-col flex-1 items-center">
              <div className="w-full h-20 bg-purple-100 rounded-md"></div>
              <span className="text-xs mt-1">Auto</span>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <div className="w-full h-20 bg-gray-100 rounded-md border-2 border-blue-500"></div>
              <span className="text-xs mt-1">Light</span>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <div className="w-full h-20 bg-purple-700 rounded-md"></div>
              <span className="text-xs mt-1">Dark</span>
            </div>
          </div>
          
        </div>

        <div className="mb-6 border-b pb-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Accent color</label>
            <div className="flex gap-2 ml-auto">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Pick your platform's main color</p>
        </div>

        <div className="mb-4 border-b pb-4 flex justify-between items-center">
          <label className="flex items-center gap-2">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvYWRlciI+PHBhdGggZD0iTTEyIDJ2NCIvPjxwYXRoIGQ9Im0xNi4yIDcuOCAyLjktMi45Ii8+PHBhdGggZD0iTTE4IDEyaDQiLz48cGF0aCBkPSJtMTYuMiAxNi4yIDIuOSAyLjkiLz48cGF0aCBkPSJNMTIgMTh2NCIvPjxwYXRoIGQ9Im00LjkgMTkuMSAyLjktMi45Ii8+PHBhdGggZD0iTTIgMTJoNCIvPjxwYXRoIGQ9Im00LjkgNC45IDIuOSAyLjkiLz48L3N2Zz4=" className="w-6 h-6" />
            Reduce motion</label>
          <div className="mb-3">
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="Blue" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                </label>
            </div>
            <span className="font-medium text-gray-400">
            </span>
        </div>
        </div>

        <div className="mb-4 border-b pb-4 flex justify-between items-center">
          <label className="flex items-center gap-2">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsYXkiPjxwb2x5Z29uIHBvaW50cz0iNiAzIDIwIDEyIDYgMjEgNiAzIi8+PC9zdmc+" className="w-6 h-6" />
          Auto play</label>
          <div className="mb-3">
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="Blue" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                </label>
            </div>
            <span className="font-medium text-gray-400">
            </span>
        </div>
        </div>

        <div className="mb-6 border-b pb-4 flex justify-between items-center">
          <label className="flex items-center gap-2">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWltYWdlIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIi8+PHBhdGggZD0ibTIxIDE1LTMuMDg2LTMuMDg2YTIgMiAwIDAgMC0yLjgyOCAwTDYgMjEiLz48L3N2Zz4=" className="w-6 h-6" />
            High quality photo</label>
            <div className="mb-3">
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="Blue" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                </label>
            </div>
            <span className="font-medium text-gray-400">
            </span>
        </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500 mr-8">Reset to default</p>
          <div className="flex gap-4 ml-auto">
            <button className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Preferences</button>
          </div>
        </div>
      </div>
    </main>
  );
}
