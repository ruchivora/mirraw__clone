import React from 'react' ;
import Slider from '../components/Slider';

const Index = ({design_detail}) => {
  console.log( design_detail )
  return (
  <div>
    <Slider title = "More From Cotton Saree" design_detail = {design_detail}></Slider>
  </div>
  )
}

export async function getServerSideProps() {
  
  var result =  await fetch(`https://api.mirraw.com/api/v1/designs/3030919/similar_designs_unbxd`,{
    headers: {  'Device-ID':'e47e310e9d303784',
                'app_source':'Android',
                'Sub-App':'',
                'app_version':'2.0.0',
                'COUNTRY':'IN',
                'Token':'a2487f5de1a4c4e5d99e459f7b8a4bc577238ff11792499235bfa86e71443a43'
              }
  })

  var design_detail = await result.json();
  design_detail = design_detail.designs ;

  return {
    props: 
      {design_detail }
  }
}

export default Index