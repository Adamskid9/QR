import "./App.css"

function App() {
  return (
    <>
    <div className="container">
    <div className="qr_container">
      <img src="/image-qr-code.png" alt="" className="qr_image" />
      <div className="qr_text">
        <div className="block">Improve your front-end</div>
        <div className="block last">skills by building projects</div>
         
        <div className="inline first">Scan the QR code to visit Frontend Mentor and take</div>
        <div className="inline">your coding skills to</div>
        <div className="inline">the next level</div>
      </div>
    </div>
  </div>
  

  
  
  <div className="attribution">
    Challenge by <a className="decorate" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a className="decorate" href="#">Ajani Adam</a>.
  </div>
  </>
  )
}

export default App
