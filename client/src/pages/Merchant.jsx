import React from 'react'
import { useQuery } from '@apollo/client'
import { getMerchant, getCategory } from '../queries/queryMerchant'

export default function Merchant() {

  const { data } = useQuery(getMerchant)
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
        <div className="md:hidden absolute right-0 bottom-0 flex flex-col bg-list z-10 p-1.5 rounded-lg">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div>F</div>
          <div>G</div>
          <div>H</div>
          <div>I</div>
          <div>J</div>
          <div>K</div>
          <div>L</div>
          <div>M</div>
          <div>N</div>
          <div>O</div>
          <div>P</div>
          <div>Q</div>
          <div>R</div>
          <div>S</div>
          <div>T</div>
          <div>U</div>
          <div>V</div>
          <div>W</div>
          <div>X</div>
          <div>Y</div>
          <div>Z</div>
        </div>
        <div className="flex-1 md:hidden">All Merchant</div>
        <div className="flex-end filter">Filter</div>
      </div>
      <div className="grid relative grid-flow-row auto-rows-max">
        <div className="bg-gradient-to-r from-black to-gray-800">
          <div className="p-4 txt-cat">Category Merchant</div>
          <div className="grid grid-cols-4 gap-2 m-3">
            {dataCategory?.Categories.data.map((category) => {
              return (
                <div className="h-16 bg-gray-300 rounded-md">{category.name}</div>
              )
            })}
          </div>
        </div>
        <div className="flex p-5">
          <div className="hidden md:flex flex-1 bg-list z-10 p-1.5 rounded-lg">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z </div>
          <div className="flex-end ml-6">Filter</div>
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">A</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'A') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">B</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'B') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">C</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'C') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">D</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'D') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">E</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'E') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">F</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'F') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>        
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">G</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'G') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">H</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'H') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">I</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'I') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">J</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'J') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">K</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'K') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">L</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'L') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">M</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'M') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">N</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'N') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">O</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'O') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">P</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'P') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">Q</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'Q') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">R</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'R') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">S</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'S') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">T</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'T') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">U</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'U') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">V</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'V') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">W</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'W') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">X</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'X') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">Y</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'Y') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-red-500 text-2xl">Z</h3>
          {data?.Merchants.data.map((merchant) => {
            if (merchant.name[0] === 'Z') {
              return (
                <div className="border-b-2">
                  <p>{merchant.name}</p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}