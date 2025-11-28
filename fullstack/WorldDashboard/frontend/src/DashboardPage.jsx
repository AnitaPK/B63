import React from 'react'
import TotalPopulation from './components/TotalPopulation'
import TOPTenConPopulation from './components/TOPTenConPopulation'
import AllContinent from './components/AllContinent'

const DashboardPage = () => {
  return (
    <div>
      <h1 className='display-2'>World Popualation Dashboard</h1>
      <TotalPopulation />
      <TOPTenConPopulation />
      <AllContinent />
    </div>
  )
}

export default DashboardPage
