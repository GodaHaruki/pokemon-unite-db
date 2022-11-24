import React, { useEffect, useRef, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';

const App = () => {
  return (
    <>
      {/* <StatsTable key={keyExample} stats={statsExample} /> */}
      <Stats />
    </>
  )
}

const StatsTable = (props) => {
  const stats = props.stats.stats
  const key = props.stats.key
  const margin = props.margin
  const open = props.openModal
  const addIndex = props.addIndex

  const [head, setHead] = useState(key.map((k, i) =>
    <th key={i}>
      {k}
      <button
        className='bg-green-600 ml-2 rounded-full w-5'
        onClick={() => {
          addIndex.current = i
          open()
        }}
      >
        <div className='flex justify-center items-center'>+</div>
      </button>
    </th>
  ))
  return (
    <table className="table table-zebra table-compact w-full m-2 sm:m-2 md:m-3 lg:m-4">
      <thead>
        <tr>
          {head}
        </tr>
      </thead>
      <tbody>
        {
          stats.map((stat) => {
            return (
              <tr>
                {key.map(k => (
                  <td>
                    {stat[k]}
                  </td>
                ))}
              </tr>
            )
          })
        }
      </tbody>

    </table>
  )
}

const Description = (props) => {
  const info = props.info;
  console.log(info.type.map(t => t.color))
  return (
    <>
      {/* <div className="mockup-phone">
        <div className="camera" />
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <img src="https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Clefable.png" />
            <p className="text-4xl text-white">{props.info.name}</p>
          </div>
        </div>
      </div> */}

      <div className="w-1/4 bg-gray-800 rounded-lg m-2 sm:m-2 md:m-3 lg:m-4">
        <div className="flex justify-center items-center">
          <img src="https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Clefable.png" />
        </div>
        <p className="mt-1 sm:text-md md:text-3xl lg:text-4xl text-center text-gray-100">{info.name}</p>

        <div className="flex justify-center items-center m-2">

          {
            info.type.map(t =>
              <div className='px-1'>
                <div className={`rounded-full border border-${t.color} text-sm text-primary`}>
                  <div className="px-2 py-1">{t.type}</div>
                </div>
              </div>)
          }

        </div>
      </div>
    </>
  )
}

const Stats = () => {
  const addIndex = useRef(0)
  const makeStatsExample = (times) => {
    let a = []
    for (let i = 0; i < times; i++) {
      a.push({ level: 1 * i, hp: 1000 * i, atk: 100 * i })
    }
    return a;
  }
  console.log(makeStatsExample(15))
  const statsExample = makeStatsExample(15);
  const keyExample = ["level", "hp", "atk"];
  const tableInfo = { key: keyExample, stats: statsExample }

  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  });

  return (
    <>
      <div>
        <Modal>
          <div className='bg-white w-200 rounded-lg text-black'>
            <div className='px-5 py-5'>
              <div className='flex justify-end items-end'>
                <button className='w-4 text-gray-500 text-xl rounded-full' onClick={close}>×</button>
              </div>
              <p className='text-sm'>Head Name</p>
              <input type="text" placeholder="Type here" className="p-1.5 rounded-md border border-black w-full max-w-xs" />

              <br />

              <p className='text-sm'>Value Expression</p>
              <input type="text" placeholder="${level} * 10 + ${Atk} * 0.75 + 750" className="p-1.5 rounded-md border border-black w-full max-w-xs" />
            </div>
          </div>
        </Modal>
      </div>

      <div className="flex m-2 sm:m-3 md:m-5 lg:m-8 bg-gray-600 rounded-lg">
        <Description info={{ name: "Clefable", type: [{ color: "primary", type: "Support" }, { color: "primary", type: "Sp.Atk" }] }} />
        <StatsTable addIndex={addIndex} openModal={open} stats={tableInfo} />
      </div>
    </>
  )
}

export default App;
