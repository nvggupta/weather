import React from 'react'

function TableRow({elem}) {
  return (
   <>
    <tr className='flex justify-around border border-black grid grid-cols-6'>
        <td className='border border-black'>{elem.city}</td>
        <td className='border border-black'>{elem.Desc}</td>
        <td className='border border-black'>{elem.Temp}</td>
        <td className='border border-black'>{elem.pressure}</td>
        <td className='border border-black'>{elem.DataAge}</td>
        <td className='border border-black'><button>Delete</button></td>
    </tr>
   </>
  )
}

export default TableRow
