import Stepper from "./components/Stepper/Stepper";

const stepsFromBackend = ["Customer info", "Shipping info", "Payment"];

function App() {
  return (
    <main className='max-w-7xl p-8 text-center'>
      <Stepper steps={stepsFromBackend} />
    </main>
  );
}

export default App;
