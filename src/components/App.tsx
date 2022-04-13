import CounterClass from './Routes/Counter/CounterClass';
import CounterFn from '../components/Routes/Counter/CounterFn';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import ColorPicker from './Routes/ColorPicker/ColorPicker';
import { colorPickerOptions } from '../data/colorPickerOptions';
import Form from './Routes/Form/Form';
import Todos from './Routes/Todos/Todos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/counter-class"
          element={<CounterClass initialValue={0} />}
        />

        <Route path="/counter-fn" element={<CounterFn />} />

        <Route
          path="/color-picker"
          element={<ColorPicker options={colorPickerOptions} />}
        />

        <Route
          path="/form"
          element={<Form onSubmit={(cred) => console.log(cred)} />}
        />

        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
