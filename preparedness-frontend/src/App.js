import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const [name, setName] = useState("")

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <Button onClick={toggle}>Click Me</Button>
        <Button>Reset</Button>
        <ModalComponent modal={modal} toggle={toggle} name={name}/>
      </div>
    </div>
  )
}

export default App
