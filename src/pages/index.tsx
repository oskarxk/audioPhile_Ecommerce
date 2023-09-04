import dynamic from 'next/dynamic'

const AppComponent = dynamic(() => import('../App'), { ssr: false })

function App() {
  return (
    <div className="app">
      <AppComponent></AppComponent>
      <div></div>
    </div>
  )
}

export default App
