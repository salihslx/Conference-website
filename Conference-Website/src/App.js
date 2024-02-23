
import './App.css';


function App() {
  
  return (
    <div className="App">
      <main>
         
          <div className='eliptop1 absolute'>
            

          </div>
        {/* nava bar  */}
        <navbar className="navbar flex items-center justify-center" >
     
               <ul className='flex flex-row   justify-around  mt-10 mb-24'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Speakers</li>
                      <li>contact</li>
                      <li><button className='btn'>Get Ticket</button></li>
               </ul>
  
        </navbar>
        {/* section one landing page  */}
         <section className='s1_landing flex justify-center align-middle flex-col mt-32'>
          
         
                <h2>NATIONAL CONFERENCE</h2>
                 <h1>CYBER PHYSICSAL SYSTEMS</h1>
                 <p>April 18th-20th</p>
                 <div className='flex  justify-center  text-center  m-5'>
                  <div className='college_name flex justify-center'>
                  <img  src={require('./location (3).png')} alt='' className=' location_img'/>
                  <h4 className='mt-1'>College of Engineering Kallooppara</h4>
                  </div>
                

                </div>
                
            <div className=' absolute  top-60'>
             
              </div>
         </section>
         <div class="text-container  mt-24">
  <span class="animated-text">National Conference ...  <span className='scrool2'>CYBER PHYSICAL SYSTEM   .       . </span><span>April 18th -20th </span></span>


</div>

         <section className='about  mt-60  flex flex-col justify-center items-center' >
        <div className='elipabout absolute'></div>
         <h1 >About</h1>
              <p className=' w-2/3'>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

       The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by</p>
      

          
         </section>
         
        </main>
    </div>
  );
}

export default App;
