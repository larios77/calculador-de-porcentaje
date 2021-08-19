import React from 'react'
import dollar from '../../images/icon-dollar.svg'
import people from '../../images/icon-person.svg'
import './style.css'

function calculator() {
  //function para sacar el %
  const calcular = () => {
    let porcentaje = Number(document.getElementById('pt').value)
    let cantidad = Number(document.getElementById('ct').value)
    let resultado = cantidad * (porcentaje / 100)

    document.getElementById('resul').value = resultado
    //permite sacar la cantidad de personas
    let people = Number(document.getElementById('people').value)
    let resultadoPeople = resultado * people

    document.getElementById('totalPeople').value = resultadoPeople
  }
  //function que permite calcular el 5%
  const buttonFive = () => {
    let porcentaje = 5
    let cantidad = Number(document.getElementById('ct').value)
    let resultado = cantidad * (porcentaje / 100)

    document.getElementById('resul').value = resultado
    let people = Number(document.getElementById('people').value)
    let resultadoPeople = resultado * people

    document.getElementById('totalPeople').value = resultadoPeople
  }
  //function que permite calcular el 10%
  const buttonTen = () => {
    let porcentaje = 10
    let cantidad = Number(document.getElementById('ct').value)
    let resultado = cantidad * (porcentaje / 100)

    document.getElementById('resul').value = resultado
    let people = Number(document.getElementById('people').value)
    let resultadoPeople = resultado * people

    document.getElementById('totalPeople').value = resultadoPeople
  }
  //function que permite calcular el 15%
  const buttonFifthen = () => {
    let porcentaje = 15
    let cantidad = Number(document.getElementById('ct').value)
    let resultado = cantidad * (porcentaje / 100)

    document.getElementById('resul').value = resultado
    let people = Number(document.getElementById('people').value)
    let resultadoPeople = resultado * people

    document.getElementById('totalPeople').value = resultadoPeople
  }
  //function que permite calcular el 25%
  const buttonTwentyFive = () => {
    let porcentaje = 25
    let cantidad = Number(document.getElementById('ct').value)
    let resultado = cantidad * (porcentaje / 100)

    document.getElementById('resul').value = resultado
    let people = Number(document.getElementById('people').value)
    let resultadoPeople = resultado * people

    document.getElementById('totalPeople').value = resultadoPeople
  }
  //function que permite calcular el 50%
  const buttonFifty = () => {
    let porcentaje = 50
    let cantidad = Number(document.getElementById('ct').value)
    let resultado = cantidad * (porcentaje / 100)

    document.getElementById('resul').value = resultado
    let people = Number(document.getElementById('people').value)
    let resultadoPeople = resultado * people

    document.getElementById('totalPeople').value = resultadoPeople
  }
  //funcion que permite hacer reset a los inputs
  const resetInputs = () => {
    document.getElementById('form').reset()
  }

  return (
    <div>
      <h1 className="title">
        SPLI
        <br />
        TTER
      </h1>
      <div className="container__calculator">
        <form id="form" className="container">
          <div className="content__calc">
            <label>
              Bill <br />
              <img src={dollar} alt="dollar" className="dollar" />
              <input
                id="ct"
                type="text"
                placeholder="0"
                onChange={calcular}
                className="form__input"
              />
            </label>
            <p>Select Tip %</p>
            <div className="content__button">
              <button
                type="button"
                className="button__percentage"
                onClick={buttonFive}
              >
                5%
              </button>
              <button
                type="button"
                className="button__percentage"
                onClick={buttonTen}
              >
                10%
              </button>
              <button
                type="button"
                className="button__percentage"
                onClick={buttonFifthen}
              >
                15%
              </button>
              <button
                type="button"
                className="button__percentage"
                onClick={buttonTwentyFive}
              >
                25%
              </button>
              <button
                type="button"
                className="button__percentage"
                onClick={buttonFifty}
              >
                50%
              </button>
              <input
                id="pt"
                type="text"
                placeholder="Custom"
                onChange={calcular}
                className="button__write"
              />
            </div>
            <p>Number of People</p>
            <label>
              <img src={people} alt="people" className="people" />
              <input
                type="text"
                placeholder="0"
                className="form__input"
                id="people"
                onChange={calcular}
              />
            </label>
          </div>
          <div className="content__result">
            <div>
              <p>
                Tip Amount
                <br />
                <span>/person</span>
              </p>
              <input
                id="resul"
                type="number"
                placeholder="$ 0.00"
                className="result__input"
                disabled
              />
            </div>
            <div>
              <p>
                Total
                <br />
                <span>/person</span>
              </p>
              <input
                type="number"
                placeholder="$ 0.00"
                className="result__input"
                id="totalPeople"
                onChange={calcular}
                disabled
              />
            </div>
            <button className="btn__reset" type="button" onClick={resetInputs}>
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default calculator
