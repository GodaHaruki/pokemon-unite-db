import React, { useEffect, useRef, useState } from 'react';

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

  // const tableBody = stats.map((stat) => {
  //   key.map(k => (
  //     <>
  //       <td>
  //         {stats[k]}
  //       </td>
  //     </>
  //   ))
  // })
  const head = key.map((k, i) => <th key={i}>{k}</th>)
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

        <div className="flex m-2">

          {
            info.type.map(t => <div className={`rounded-full border border-${info.color} text-xl text-primary`}>
              <div className="px-2 py-1">Support</div>
            </div>)
          }

        </div>
      </div>
    </>
  )
}

const Stats = () => {
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

  // const stats = useRef([{ level: 1, hp: 1000, atk: 80 }, { level: 2, hp: 2000, atk: 160 }]);
  // const [statsTable, setStatsTable] = useState([])

  // useEffect(() => {

  // }, [stats])
  return (
    <>
      <div className="flex m-2 sm:m-3 md:m-5 lg:m-8 bg-gray-600 rounded-lg">
        <Description info={{ name: "Clefable", type: [{color:"primary", }] }} />
        <StatsTable stats={tableInfo} />
      </div>
    </>
  )
}

export default App;
