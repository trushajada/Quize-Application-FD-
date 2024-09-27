import { Route, Router, Routes } from 'react-router'
import './App.css'
import QuizList from './Componets/QuizList/QuizList'
import QuizPage from './Componets/QuizPage/QuizPage'
import ScoreSummary from './Componets/ScoreSummary/ScoreSummary'
import SignInPage from './Componets/SignInPage/SignInPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignInPage/>}></Route>
        <Route path='/quiz-list' element={<QuizList/>}></Route>
        <Route path='/quiz/:quizId' element={<QuizPage/>}></Route>
        <Route path='/summary' element={<ScoreSummary/>}></Route>
          
      </Routes>
    </>
  )
}

export default App
