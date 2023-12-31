import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const [name, setName] = useState("")

  const reset = () => {
    setName("")
  }

  return (
    <div className="entire-content">
      <h1 className="title">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="buttons">
        <Button className="each-button" onClick={toggle}>Click Me</Button>
        <Button className="each-button" onClick={reset}>Reset</Button>
        </div>
        <ModalComponent modal={modal} toggle={toggle} name={name}/>
      </div>
    </div>
  )
}

export default App
