import { Route, Routes } from "react-router-dom"
import QuizForm from "./componets/QuizForm"
import Result from "./componets/Result"

function App() {

  return (
    <>
       <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <Routes>
        <Route path="/" element={<QuizForm />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
    </>
  )
}

export default App
