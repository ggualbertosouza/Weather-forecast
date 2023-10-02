// Pages
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="flex flex-col items-center mx-auto min-h-screen bg-gradient-to-b from-zinc-700 to-sky-800">
      <main className="grow flex items-center justify-center">
        <Card />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
