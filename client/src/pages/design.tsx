import React from 'react'
import Table from '../components/table/table'

type Props = {}

const Design = (props: Props) => {
  return (
    <>
        <h1>finGlide</h1>
        <p>this is the main design page to house our various designs</p>
        <Table data={[
            { name: "Apple", price: 150 },
            { name: "Tesla", price: 250 },
            ]} 
        />
    </>
  )
}

export default Design