import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
        <div className='search-container'>
            <input type='text' placeholder='start typing' className='searchbar' />
        </div>
        <table className='fl-table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Job Name</th>
                    <th>Job Link</th>
                    <th>Company Name</th>
                    <th>Company Location</th>
                    <th>Job Description</th>
                    <th>Salary</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default Home