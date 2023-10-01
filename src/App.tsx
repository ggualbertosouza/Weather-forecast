// Pages
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";

export default function App(){
  return(
    <div className="flex flex-col items-center mx-auto min-h-screen bg-gradient-to-br from-gray-300 via-sky-600 to-sky-700">
      <main className="grow flex items-center justify-center">
      <Card />
      </main>
      <div>
      <Footer/>
      </div>
    </div>
  )
}