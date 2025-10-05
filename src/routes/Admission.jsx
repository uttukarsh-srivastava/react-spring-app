import React from 'react'

import AdmissionInfo from '../components/AdmissionInfo'
import AdMoreInfo from '../components/AdMoreInfo'
import ApplyNow from '../components/ApplyNow'
import Footer from '../components/Footer';

const Admission = () => {
  return (
    <>
      <div className="pages admission">
        <h2 className="title">Admission</h2>
      </div>
      <AdmissionInfo />
      <AdMoreInfo />
      <ApplyNow />
      <Footer />
    </>
  )
}

export default Admission