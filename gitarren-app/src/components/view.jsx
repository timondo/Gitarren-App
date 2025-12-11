import React, { useState } from "react";
import { Bluetooth, BluetoothOff, Guitar } from "lucide-react";
import { Knob } from "primereact/knob";

const View = () => {
  // --- Bluetooth / UI States ---
  const [connected, setConnected] = useState(true);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(false);
  const [message, setMessage] = useState(false);
  const [setting, setSetting] = useState(true);

  // --- Gitarren-Regler States ---
  const [volume, setVolume] = useState(50);
  const [tone, setTone] = useState(60);
  const [gain, setGain] = useState(40);
  const [bass, setBass] = useState(55);
  const [mid, setMid] = useState(45);
  const [treble, setTreble] = useState(70);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const value1 = async () => {
    setConnected(true);
    setLoading(true);
    await delay(2000);
    console.log("Connected");
    setLoading(false);
    setInfo(false);
    setMessage(true);
    await delay(1000);
    setMessage(false);
    setSetting(true);
  };

  const value2 = () => {
    setConnected(false);
    setSetting(false);
    setInfo(true);
    setLoading(false);
    setMessage(false);
    console.log("Not Connected");
  };

  return (
    <>
      {/* Erfolgreich verbunden */}
      {message && (
        <div className="absolute mt-10 inset-0 flex items-center justify-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
            Erfolgreich verbunden
          </div>
        </div>
      )}

      {/* Titel */}
      <div className="flex justify-center gap-1">
        <p className="flex text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Hybrid Guitars
        </p>
        <Guitar size={25} strokeWidth={3} className="mt-2 text-purple-500" />
      </div>

      {/* Bluetooth Buttons */}
      <div className="flex justify-end mr-5">
        {connected ? (
          <Bluetooth
            onClick={value2}
            size={30}
            className="text-blue-500 bg-white border rounded-3xl shadow-xl"
          />
        ) : (
          <BluetoothOff
            onClick={value1}
            size={30}
            className="text-red-500 bg-white border rounded-3xl"
          />
        )}
      </div>

      {/* Not connected */}
      {info && (
        <div className="flex justify-center mt-64">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            You are not Connected
          </h1>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex justify-center">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Verbinde...
          </button>
        </div>
      )}

      {/* Guitar Settings */}
      {setting && (
        <div className="flex justify-center mt-10">
          <div className="flex flex-col w-full max-w-4xl items-center rounded-3xl bg-white border shadow-lg shadow-cyan-500/100 p-6 gap-8">
            {/* Reihe 1 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Volume</p>
                <Knob value={volume} onChange={(e) => setVolume(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Tone</p>
                <Knob value={tone} onChange={(e) => setTone(e.value)} />
              </div>
            </div>

            {/* Reihe 2 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Gain</p>
                <Knob value={gain} onChange={(e) => setGain(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Bass</p>
                <Knob value={bass} onChange={(e) => setBass(e.value)} />
              </div>
            </div>

            {/* Reihe 3 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Mid</p>
                <Knob value={mid} onChange={(e) => setMid(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Treble</p>
                <Knob value={treble} onChange={(e) => setTreble(e.value)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default View;
