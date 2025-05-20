"use client";

import { useState } from "react";

export default function Home() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [highQuality, setHighQuality] = useState(false);

  return (
    <main className="bg-gray-300 flex items-center justify-center h-screen w-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-100">
        <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
        <p className="text-sm text-gray-500 mb-6 border-b pb-4">
          Set or customize your preferences for the system
        </p>

        {/* Language */}
        <div className="mb-6 border-b pb-4">
          <div className="flex items-center mb-1 justify-between">
            <label htmlFor="language" className="text-sm font-medium mr-4">
              Language
            </label>
            <select id="language" className="p-1 border rounded-md w-28">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <p className="text-sm text-gray-500">Select the language of the platform</p>
        </div>

        {/* Theme */}
        <div className="mb-6 border-b pb-4">
          <label className="block text-sm font-medium mb-1">Interface theme</label>
          <p className="text-sm text-gray-500 mt-2">Customize your application appearance</p>
          <div className="flex gap-4 mt-2">
            {["Auto", "Light", "Dark"].map((theme, idx) => (
              <div key={idx} className="flex flex-col flex-1 items-center">
                <div
                  className={`w-full h-20 rounded-md ${
                    theme === "Auto"
                      ? "bg-purple-100"
                      : theme === "Light"
                      ? "bg-gray-100 border-2 border-blue-500"
                      : "bg-purple-700"
                  }`}
                ></div>
                <span className="text-xs mt-1">{theme}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent color */}
        <div className="mb-6 border-b pb-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Accent color</label>
            <div className="flex gap-2 ml-auto">
              {["red", "yellow", "green", "blue", "purple"].map((color) => (
                <div key={color} className={`w-6 h-6 rounded-full bg-${color}-500`} />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Pick your platform&apos;s main color</p>
        </div>

        {/* Toggles */}
        {[
          { id: "reduceMotion", label: "Reduce motion", value: reduceMotion, setter: setReduceMotion },
          { id: "autoPlay", label: "Auto play", value: autoPlay, setter: setAutoPlay },
          { id: "highQuality", label: "High quality photo", value: highQuality, setter: setHighQuality },
        ].map(({ id, label, value, setter }) => (
          <div key={id} className="mb-4 border-b pb-4 flex justify-between items-center">
            <label htmlFor={id} className="flex items-center gap-2">
              <span>{label}</span>
            </label>
            <div className="mb-3">
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  id={id}
                  checked={value}
                  onChange={() => setter(!value)}
                  className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label htmlFor={id} className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"></label>
              </div>
            </div>
          </div>
        ))}

        {/* Action buttons */}
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
