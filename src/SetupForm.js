import React from 'react'
import {useGlobalContext} from './context'


const SetupForm = () => {
    const {quiz} = useGlobalContext()
    return (
        <main>
            <section className="quiz quiz-section">
                <form className="clarusway-quiz">
                    <h2>Clarusway Quiz</h2>

                    <div className="form-control">
                        <label htmlFor="amount">Number of Questions</label>
                        <input 
                            type='number'
                            name="amount"
                            id="amount"
                            value={quiz.amount}
                            onChange={handleChange}
                        />
                    </div>

                </form>
            </section>
        </main>
    )
}