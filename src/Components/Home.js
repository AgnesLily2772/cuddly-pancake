<<<<<<< Updated upstream
import React from 'react'
import hieee from './Imgs/hieee.png'
import './Styles.css'
const Home = () => {
  return (
    <>
        <section className='container' id='home'>
            <h1 className="sign">Results Speak Louder than Words</h1>
            <div className='home'>
                <img className='hieee' src={hieee} alt='...'/>
                <div className='quotation'>
                  Hello all,<br/> My name is AGNES LILY. I love building websites with cool features and feasible user interfaces. Iam more into solving problems with different kinds of approaches. Still an energetic student interested in -<ul>
                    <li>Learning</li>
                    <li>Experimenting</li>
                    <li>Analyzing</li>
                    <li>Understanding</li>
                  </ul>
                </div>
            </div>
        </section>
    </>
  )
}

=======
import React from 'react'
import hieee from './Imgs/hieee.png'
import './Styles.css'
const Home = () => {
  let anotherArray = [0,1,2,3]
  let techStack = ["Arrays","Sorting","Queues","Backend","Linked Lists","OOPS","JavaScript","Data Structures","Graph","Node JS",
  "Trees","TensorFlow","HashMap","Recursion","Dynamic Programming","Computer Networks","Operating System","Database Management","Heap","Searching",
  "Stack","Sets","Matrix","Frontend","Netlify","Render","MERN","HTML,CSS","MongoDB","SQL",
"Sliding Window","Computer Architecture"]
  return (
    <>
        <section className='container' id='home'>
        <div className='typewriter'>
                  <h2>Results Speak Louder than Words...</h2>
                </div>
            <div className='parent'>

                    <div className='rows row'>
                        {anotherArray && anotherArray.map((item,ind)=>{
                          return (
                            <>
                              <div className='col black box'>
                                <h4 className='ChessContent'>{techStack[item]}</h4>
                              </div>
                              <div className='col white box'>
                              <h4 className='ChessContent'>{techStack[item+4]}</h4>
                              </div>
                            </>
                          )
                        })}
                    </div>
                    <div className='rows row'>
                        {anotherArray && anotherArray.map((item,ind)=>{
                          return (
                            <>
                         <div className='col white box'>
                         <h4 className='ChessContent'>{techStack[item+8]}</h4>

                         </div>
                        <div className='col black box'>
                        <h4 className='ChessContent'>{techStack[item+12]}</h4>
                        </div>
                            </>
                          )
                        })}

                    </div>
                    <div className='rows row'>
                        {anotherArray && anotherArray.map((item,ind)=>{
                          return (
                            <>
                              <div className='col black box'>
                              <h4 className='ChessContent'>{techStack[item+16]}</h4>
                              </div>
                              <div className='col white box'>
                              <h4 className='ChessContent'>{techStack[item+20]}</h4>
                              </div>
                            </>
                          )
                        })}
                    </div>
                    <div className='rows row'>
                        {anotherArray && anotherArray.map((item,ind)=>{
                          return (
                            <>
                         <div className='col white box'>
                         <h4 className='ChessContent'>{techStack[item+24]}</h4>

                         </div>
                        <div className='col black box'>
                        <h4 className='ChessContent'>{techStack[item+28]}</h4>
                        </div>
                            </>
                          )
                        })}

                    </div>
            </div>
            <img className='hieee' src={hieee} alt="..."/>
            <div className='anotherParent'>
                <div className='anotherRows row'>
                  <div className='col white box'>
                  <h4 className='ChessContent'>I'm a Student</h4>

                  </div>
                  <div className='col black box'>
                  <h4 className='ChessContent'>I'm a Developer</h4>
                  </div>
                </div>
                <div className='anotherRows row'>
                  <div className='col black box'>
                  <h4 className='ChessContent'>I'm an Engieer</h4>
                  </div>
                  <div className='col white box'>
                  <h4 className='ChessContent'>I'm a Coder</h4>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

>>>>>>> Stashed changes
export default Home