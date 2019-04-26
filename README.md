#  Overlay reveal effect react-component.
 ________________________________________________________
 ________________________________________________________

#### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **children** | `node` | | *The content node to be showed.* |
| **direction** | `string` | *top-right* | *Direction the child node will enter from.* |
| **isOpen** | `boolean` | *false* | *If `true`, the component will transition in.* |
| **mainFon** | `string` | *#90caf9* | *The main background color.* |
| **secondaryFon** | `string` | *#ec407a* | *The secondary background color of overlay.* |
 ________________________________________________________
 ________________________________________________________
 
 ### Example
 [DEMO](https://sakalx.github.io/overlay-reveal-effect/)

  ```javascript
  import React, {useState} from 'react';
  import OverlayEffect from 'overlay-reveal-effect';
  
  class App extends React.Component {
    render() {
      const [open, setOpen] = useState(false);
      
      const handleOpen = () => {
        setOpen(true);
      };
      
      const handleClose = () => {
        setOpen(false);
      }

      return (
        <div>
          <button onClick={handleOpen}>OPEN</button>
          
          <OverlayEffect isOpen={open}>
            <h1>Overlay Effect</h1>
            <button onClick={handleClose}>CLOSE</button>
          </OverlayEffect>
        </div>
      )
    }
  }
  ```