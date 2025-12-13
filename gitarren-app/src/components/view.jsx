import React, { useState } from "react";
import { Bluetooth, BluetoothOff, Guitar } from "lucide-react";
import { Knob } from "primereact/knob";

const View = () => {
  // --- Bluetooth / UI States ---
  const [connected, setConnected] = useState(false); //false
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(true); //true
  const [message, setMessage] = useState(false);
  const [setting1, setSetting1] = useState(false); //false
  const [setting2, setSetting2] = useState(false); //false
  const [nav, setNav] = useState(false); //false


// --- Tone / Drive States ---
const [compressor, setCompressor] = useState(30);
const [overdrive, setOverdrive] = useState(20);    // hinzugefügt
const [distortion, setDistortion] = useState(20);
const [fuzz, setFuzz] = useState(15);
const [eq, setEq] = useState(50);                  // EQ / Tonregelung
const [noiseGate, setNoiseGate] = useState(10);    // optional, Rauschunterdrückung

// --- FX / Space States ---
const [chorus, setChorus] = useState(25);
const [phaser, setPhaser] = useState(20);         // hinzugefügt
const [flanger, setFlanger] = useState(15);       // hinzugefügt
const [delayFx, setDelayFx] = useState(35);
const [reverb, setReverb] = useState(40);
const [tremolo, setTremolo] = useState(20);       // hinzugefügt




  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const side1 = () => {
    setSetting1(true);
    setSetting2(false);
    }

  const side2 = () => {
    setSetting2(true);
    setSetting1(false)
  }

  const connect = async () => {
    setConnected(true);
    setLoading(true);
    await delay(2000);
    setLoading(false);
    setInfo(false);
    setMessage(true);
    await delay(1000);
    setMessage(false);
    setSetting1(true);
    setNav(true)
  };

  const disconnect = () => {
    setNav(false);
    setConnected(false);
    setSetting1(false);
    setSetting2(false)
    setInfo(true);
    setLoading(false);
    setMessage(false);
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
            onClick={disconnect}
            size={30}
            className="text-blue-500 bg-white border rounded-3xl shadow-xl"
          />
        ) : (
          <BluetoothOff
            onClick={connect}
            size={30}
            className="text-red-500 bg-white border rounded-3xl"
          />
        )}
      </div>

      {/* Not connected */}
      {info && (
        <div className="flex justify-center mt-48">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            You are not Connected
          </h1>
        </div>
      )}

      {info && (
        <div className="flex justify-center">
          <img className="flex justify mt-10 w-40 h-40 rounded-full  shadow-2xl shadow-cyan-500/100" src="/tenor.gif"></img>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex justify-center mt-4">
          <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Verbinde...
          </button>
        </div>
      )}

      {nav && (
        <div className="flex justify-center mt-3">
          <nav className="flex gap-4">
            <button onClick={side1} className="flex items-center justify-center h-14 w-40 text-3xl border gap-2 bg-white rounded-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Tone/Drive</button>
            <button onClick={side2} className="flex items-center  justify-center h-14 w-40 text-3xl border gap-2 bg-white rounded-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">FX/Space</button>
          </nav>
        </div>
      )}

      {/* Effekt-Regler */}

      {setting1 && (
        <div className="flex justify-center mt-10">
          <div className="flex flex-col w-full max-w-2xl items-center rounded-3xl bg-white border shadow-lg shadow-cyan-500/100 p-6 gap-10">

            {/* Reihe 1 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Compressor</p>
                <Knob value={compressor} onChange={(e) => setCompressor(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Overdrive</p>
                <Knob value={distortion} onChange={(e) => setOverdrive(e.value)} />
              </div>
            </div>

            {/* Reihe 2 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Distortion</p>
                <Knob value={reverb} onChange={(e) => setDistortion(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Fuzz</p>
                <Knob value={delayFx} onChange={(e) => setFuzz(e.value)} />
              </div>
            </div>

            {/* Reihe 3 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">EQ</p>
                <Knob value={chorus} onChange={(e) => setEq(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Noise Gate</p>
                <Knob value={fuzz} onChange={(e) => setNoiseGate(e.value)} />
              </div>
            </div>
          

          </div>
          </div>)}

        {setting2 && (
        <div className="flex justify-center mt-10">
          <div className="flex flex-col w-full max-w-2xl items-center rounded-3xl bg-white border shadow-lg shadow-cyan-500/100 p-6 gap-10">

            {/* Reihe 1 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Chorus</p>
                <Knob value={compressor} onChange={(e) => setChorus(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Phaser</p>
                <Knob value={distortion} onChange={(e) => setPhaser(e.value)} />
              </div>
            </div>

            {/* Reihe 2 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Flanger</p>
                <Knob value={reverb} onChange={(e) => setFlanger(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Delay</p>
                <Knob value={delayFx} onChange={(e) => setDelayFx(e.value)} />
              </div>
            </div>

            {/* Reihe 3 */}
            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Reverb</p>
                <Knob value={chorus} onChange={(e) => setReverb(e.value)} />
              </div>

              <div className="flex flex-col items-center">
                <p className="mb-2 font-semibold text-lg">Tremolo</p>
                <Knob value={fuzz} onChange={(e) => setTremolo(e.value)} />
              </div>
            </div>
          

          </div>
          </div>)}
  </>
  )
};

export default View;