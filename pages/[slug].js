import React from 'react'
import { useRouter } from "next/router" ;
import { useEffect ,useState } from "react" ;

//https://api.mirraw.com/api/v1/designs/beige-printed-art-silk-saree-with-blouse-printed-saree--4156aa20-ea04-4d0f-81ce-13652385e886

function ProductDescription({}) {

  console.log() ;

  // const router = useRouter() ;
  // const params   = router.query.slug ;
  
  // const[slug , setslug] = useStat;

  useEffect( () => {

    async function fetchDesignFromSlug(){

        var result =  await fetch(`https://staging-api.mirraw.com/api/v1/designs/490967/similar_designs_unbxd`,{
        headers: {  'Device-ID':'b961c2dae6ae0bbd',
                    'app_source':'Android',
                    'Sub-App':'',
                    'app_version':'2.0.0',
                    'COUNTRY':'IN',
                    'Token':'3a2780a9fed0519108d6880f842921fa888b372cecddd385bf94fae74565a51f'
                  }
      })
      var design_detail = await result.json();
      design_detail = design_detail.designs ;
      console.log("from use effect "+ design_detail);
    }
    fetchDesignFromSlug();

  },[])

  return (
    <div>
      From Slug
    </div>
  )
}



export default ProductDescription;
