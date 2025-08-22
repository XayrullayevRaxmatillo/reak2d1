import  './App.css'

function App() {
   
  const btn=document.getElementById("bos")
    
  function salom(){
    document.body.style.backgroundColor="blue"
  }
  function bos(){
    document.body.style.backgroundColor="yellowgreen"
  }
  function bosma(){
    document.body.style.backgroundColor="red"
  }
 





  return (

    <div className='ad'>
      <button onClick={salom} className='salom'>bos</button>
      <button onClick={bos} className='bos'>bos</button>
      <button onClick={bosma} className='bosma'>bos</button>
    </div>
  )
}

export default App
