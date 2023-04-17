import Foods from "./components/Foods"
import menu from "./data"
const App = () => {
  return (
    <main>
      <Foods foods={menu} />
    </main>
  )
}
export default App
