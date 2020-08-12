import React from 'react'
import CardsList from '../components/listCard/'
import issues from '../repository/issuesRepository'
import { AppContainer } from './style'
import CircularProgressBar from '../components/progressRing/style'

const App = () => {
  return <div className="App">
    <AppContainer>
      <CardsList>
        {issues.map((issue, index) => <CircularProgressBar percentage={issue.percent} key={index} />)}
      </CardsList>
    </AppContainer>
  </div>
}

export default App
