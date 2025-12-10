import React, { Component, useState } from 'react';
import { Bluetooth, BluetoothOff, Guitar } from 'lucide-react';
import { Knob } from 'primereact/knob';
        

    const View = () => {
    const [connected, setConnected] = useState(true); //false
    const [value, setValue] = useState(40);
    const [loading, setLoading] = useState(false); 
    const [info, setInfo] = useState(false); //true
    const [message, setMessage] = useState(false);
    const [setting, setSetting] = useState(true); //false

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const value1 = async () => {
        setConnected(true);
        setLoading(true);
        await delay(2000)
        console.log('Connected');
        setLoading(false);
        setInfo(false);
        setMessage(true);
        await delay(1000);
        setMessage(false);
        setSetting(true);

    }

    const value2 = () => {
        setConnected(false);
        setSetting(false);
        setInfo(true);
        setLoading(false);
        setMessage(false);
        console.log('Not Connected');
    }


    return (
      <>
      {message && <div className='absolute mt-10 inset-0 flex items-center justify-center'>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
            Erfolgreich verbunden
            </div>

    </div>}
      <div className='flex justify-center gap-1'>
          <p className='flex text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'>Hybrid Guitars </p>
          <Guitar size={25} strokeWidth={3} className='mt-2 text-purple-500'  />
      </div>
      <div className='flex justify-end mr-5'>
        {connected && <div>
        <Bluetooth onClick={value2} size={30} className='text-blue-500 text-3xl h-auto w-auto bg-white border border-1xl shadow-2xl shadow-cyan-500%50 rounded-3xl'/>
        </div>
        }
        {!connected && <div>
        <BluetoothOff onClick={value1} size={30} className='text-red-500 text-3xl h-auto w-auto bg-white border border-1xl rounded-3xl' />
        </div>}
        </div>
        {info && 
        <div className='flex justify-center mt-64'>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'>You are not Connected</h1>
        </div>}

        {loading && <div className='flex justify-center'>
        <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Verbinde...
        </button>


        </div>}
        {setting && (
  <div className="flex justify-center mt-10">
    <div className="flex flex-col w-full max-w-4xl w-auto items-center rounded-3xl bg-white border shadow-lg shadow-cyan-500/100 p-6 gap-5">

      {/* Reihe 1: 2 Knobs */}
      <div className="flex justify-between gap-5">
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold text-lg">Volumen</p>
          <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold text-lg">Compressor</p>
          <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
      </div>

      {/* Reihe 2: 2 Knobs */}
      <div className="flex justify-between gap-5">
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold text-lg">Test 1</p>
          <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold text-lg">Test 2</p>
          <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
      </div>

      {/* Reihe 3: 2 Knobs */}
      <div className="flex justify-between gap-5">
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold text-lg">Test 3</p>
          <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold text-lg">Test 4</p>
          <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
      </div>

    </div>
  </div>
)}









      </>
    )
}

export default View;
