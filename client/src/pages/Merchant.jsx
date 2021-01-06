import React from 'react'
import { useQuery } from '@apollo/client'
import { getMerchant, getCategory } from '../queries/queryMerchant'

export default function Merchant() {

  const { data: dataMerchants } = useQuery(getMerchant)
  const { data: dataCategory } = useQuery(getCategory)

  return (
    <div className="container">
      <div className="flex md:hidden">
        <div className="flex-none my-4 ml-4 bg-input px-2 rounded-l-md">aA</div>
        <div className="flex-1 my-4">
          <input type="text" />
        </div>
        <div className="flex-none my-4 mr-4 bg-input px-2 rounded-r-md">x</div>
      </div>
      <div className="flex p-5 md:hidden">
        <div className="md:hidden absolute right-0 bottom-0 flex flex-col">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div>F</div>
        </div>
        <div className="flex-1 md:hidden">All Merchant</div>
        <div className="flex-end">Filter</div>
      </div>
      <div className="grid relative grid-flow-row auto-rows-max">
        <div className="bg-gray-500">
          <div className="p-4">Kategory Merchant</div>
          <div className="grid grid-cols-4 gap-2 m-3">
            <div className="h-16 bg-gray-300 rounded-md">1</div>
            <div className="h-16 bg-gray-300 rounded-md">2</div>
            <div className="h-16 bg-gray-300 rounded-md">3</div>
            <div className="h-16 bg-gray-300 rounded-md">4</div>
            <div className="h-16 bg-gray-300 rounded-md">5</div>
            <div className="h-16 bg-gray-300 rounded-md">6</div>
          </div>
        </div>
        <div className="flex p-5">
          <div className="hidden md:flex flex-1">A B C D E F </div>
          <div className="flex-end">Filter</div>
        </div>
        <div className="grid grid-flow-row auto-rows-max  ">
          <h3 className="text-red-500 text-2xl">A</h3>
          <div className="border-b-2">
            <p>Chizmill</p>
          </div>
        </div>
      </div>
    </div>
  )
}