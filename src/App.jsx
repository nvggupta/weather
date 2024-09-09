import { useEffect, useState } from "react";
import TableRow from "./TableRow";

function App() {
  const Data = [
    {
      id:1,
      city: "London",
      Desc: "Beautiful",
      Temp: "32",
      pressure: "1004",
      DataAge: "Last Two Minute",
    },
    {
      id:2,
      city: "los - Angles",
      Desc: "Beautiful",
      Temp: "32",
      pressure: "1004",
      DataAge: "Last Two Minute",
    },
    {
      id:3,
      city: "USA",
      Desc: "Beautiful",
      Temp: "32",
      pressure: "1004",
      DataAge: "Last Two Minute",
    },
    {
      id:4,
      city: "INDIA",
      Desc: "Beautiful",
      Temp: "32",
      pressure: "1004",
      DataAge: "Last Two Minute",
    },
  ];
  const [data , setData] = useState([])
  const [ind , setInd] = useState(0)
  const handleGetWeather = ()=>{
    console.log("trigerred");
     (ind<Data.length) && setData(prev=>[...prev , Data[ind]]);
      setInd(ind+1);
  }


  return (
    <>
      <div className="h-24 bg-slate-600 flex items-center justify-center">
        <h1 className="text-blue-500 text-center text-4xl font-[600]">
          Weather APP
        </h1>
      </div>
      <div className="flex border border-black h-[80vh] py-10">
        <div className="w-[25vw] h-full border-black border-r-4 flex flex-col items-center gap-10">
          <button className="p-5 bg-blue-500 rounded-lg w-48 text-white" onClick={handleGetWeather}>
            Get Weather
          </button>
          <div>
            <p className=" bg-blue-500  w-48 p-2 ">CITY</p>
            <p className={`border border-black w-48 p-2 ${data.find((elem) => elem.id===1)&& "active" }`}>London</p>
            <p className={`border border-black w-48 p-2 ${data.find((elem) => elem.id===2)&& "active" }`}>LOS ANGLES</p>
            <p className={`border border-black w-48 p-2 ${data.find((elem) => elem.id===3)&& "active" }`}>USA</p>
            <p className={`border border-black w-48 p-2 ${data.find((elem) => elem.id===4)&& "active" }`}>India</p>
          </div>
        </div>
        <div className="border border-black w-full p-10 flex flex-col flex-end gap-5 items-end">
          <div className="border-[2px] border-black w-fit rounded-sm">
            <input className="border-none p-4 w-[30vw] outline-none" type="text" />
            <button className="p-4 bg-blue-500 w-32 rounded-sm">Submit</button>
          </div>
          <table className="flex flex-col w-full">
            <tr className="grid grid-cols-6 border border-black">
              <th className='border border-black'>city</th>
              <th className='border border-black'>Description</th>
              <th className='border border-black'>Temprature</th>
              <th className='border border-black'> Pressure</th>
              <th className='border border-black'>Data age(hrs)</th>
              <th className='border border-black'>Delete</th>
            </tr>
           {
            (!data.length) ? <p className="border border-black h-10 rounded-md text-center text-3xl text-blue-400">No Data</p> : data.map(elem => <TableRow elem = {elem}/>)
           }
          </table>
        </div>
      </div>
    </>
  );
}
export default App;
