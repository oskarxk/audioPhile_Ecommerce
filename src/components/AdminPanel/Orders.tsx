import React from 'react'
import { AdminPanelNav } from './AdminPanelNav'

type Props = {}

export const Orders = (props: Props) => {
  return (
    <div className='w-full'>
      <AdminPanelNav />
      <p>Orders history near future</p>
    </div>
  )
}