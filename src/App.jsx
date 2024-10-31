import { useState } from 'react'
import './App.css'

const returnHeight = (height, setHeight) => {
  return (
    <div className="flex flex-col my-4">
      <label className="text-center bg-blue-400">Digite sua altura: </label>
      <input
        className="border p-2 text-center"
        id="inputHeight"
        type="text"
        value={height}
        onChange={event => {
          setHeight(event.target.value);
        }}
      />
    </div>  
  );
}

const returnWeight = (weight, setWeight) => {
  return (
    <div className="flex flex-col my-4">
      <label className="text-center bg-blue-400">Digite seu peso: </label>
      <input
        className="border p-2 text-center"
        id="inputWeight"
        type="text"
        value={weight}
        onChange={event => {
          setWeight(event.target.value);
        }}
      />
    </div>
  );
};

const calcIMC = (weight, height, setResult) => {
  const calculation = () => {
    setResult(weight / (height * height));
  };
  return (
    <div className="flex flex-col my-4">
      <br />
      <button className="border p-2 bg-green-400" onClick={calculation}>
        Calcular
      </button>
    </div>
  );
};

const resultIMC = setResult => {
  if (setResult > 0) {
    if (setResult < 18.5) {
      let element = document.getElementById('1');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('1');
      element.style.color = 'black';
    }

    if (setResult >= 18.50 && setResult <= 24.99) {
      let element = document.getElementById('2');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('2');
      element.style.color = 'black';
    }

    if (setResult >= 25 && setResult <= 29.99) {
      let element = document.getElementById('3');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('3');
      element.style.color = 'black';
    }

    if (setResult > 30.0 && setResult <= 39.99) {
      let element = document.getElementById('4');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('4');
      element.style.color = 'black';
    }

    if (setResult > 40.0) {
      let element = document.getElementById('5');
      element.style.color = 'red';
    } else {
      let element = document.getElementById('5');
      element.style.color = 'black';
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-center bg-blue-400">Resultado</label>
      <p className="border p-2 text-center">{setResult.toFixed(2)}</p>
    </div>
  );
}

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <header>Cálculo de IMC</header>

      <main>
        <div className="grid grid-cols-4 gap-4 p-4">
            {returnHeight(height, setHeight)}
            <br />
            {returnWeight(weight, setWeight)}
            {calcIMC(weight, height, setResult)}
            {resultIMC(result)}
        </div>
        <div className="w-full p-4">
          <h2 className="text-center text-sm my-2">
            VEJA A INTERPRETAÇÃO DO IMC
          </h2>
          <table id="0" className="w-full border">
            <thead>
              <tr>
                <th>IMC</th>
                <th>CLASSIFICAÇÃO</th>
                <th>OBESIDADE (GRAU)</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr id="1">
                <td>MENOR QUE 18,5</td>
                <td>MAGREZA</td>
                <td>0</td>
              </tr>
              <tr id="2">
                <td>ENTRE 18,5 E 24,9</td>
                <td>NORMAL</td>
                <td>0</td>
              </tr>
              <tr id="3">
                <td>ENTRE 25,0 E 29,9</td>
                <td>SOBREPESO</td>
                <td>I</td>
              </tr>
              <tr id="4">
                <td>ENTRE 30,0 E 39,9</td>
                <td>OBESIDADE</td>
                <td>II</td>
              </tr>
              <tr id="5">
                <td>MAIOR QUE 40,0</td>
                <td>OBESIDADE GRAVE</td>
                <td>III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default App
