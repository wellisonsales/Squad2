import React, { useEffect, useState } from 'react'
import { getReservas } from '../../services/api'

const PageReservas = () => {
    const [data, setData] = useState("12-09-2022")
    const [reservas, setReservas] = useState([])
    async function req () {
        const response = await getReservas (`reservas/data/${data}`)
        setReservas (response)
    } 

  return (
    <div></div>
  )
}

export default PageReservas