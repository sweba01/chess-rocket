import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TitleContainer from './components/TitleContainer'
import SignUpContainer from './components/SignUpContainer'
import SignUpLink from './components/SignUpLink'
import Dashboard from './pages/Dashboard'
import Training from './pages/Training'
import Topics from './pages/Topics'
import TopicExpanded from './pages/TopicExpanded'
import Puzzles from './pages/Puzzles'
import PuzzleRocketSelect from './pages/PuzzleRocketSelect'

function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] relative overflow-x-hidden">
      {/* Top link - centered on mobile, right-aligned on desktop */}
      <div className="w-full flex justify-center md:justify-end pt-6 sm:pt-8 px-4 sm:px-8">
        <SignUpLink />
      </div>

      {/* Main content */}
      <div className="flex items-start md:items-center justify-start md:justify-center min-h-[calc(100vh-80px)] px-4 sm:px-8">
        <div className="flex flex-col items-start md:items-center gap-8 md:gap-10 w-full max-w-full sm:max-w-77.75 md:max-w-119.5 pt-16 sm:pt-24.75 md:pt-0">
          <TitleContainer />
          <SignUpContainer />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/training" element={<Training />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topic-expanded" element={<TopicExpanded />} />
        <Route path="/puzzles" element={<Puzzles />} />
        <Route path="/puzzle-rocket-select" element={<PuzzleRocketSelect />} />
      </Routes>
    </Router>
  )
}

export default App
