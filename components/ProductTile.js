import React from 'react' ;
import styles from '../styles/slider.module.css';


const ProductTile = ( { title , discount_percent ,inr_discount_price,inr_price,image } ) => {
  console.log( image.thumb)
  return(
    <div className={styles.design_detail}>
      <img className={styles.design_image} src={ `https://${image.large}` } style={{ width: '100%'}} />
      
      <div className={styles.design_specification}>
        <div className={styles.design_name}>{title}</div>
        <div className = {styles.design_price}>
          <span className={styles.discount_price}>Rs {inr_discount_price}</span>  
          <span className={styles.actual_price}>Rs {inr_price}</span>
          <span className={styles.discount_percent}>({discount_percent}% OFF)</span>
        </div>
      </div>

    </div>

  );
}


// export const getServerSideProps = async( {fetchUrl  })=> {
  
//   const result = await axios.get(fetchUrl);
  
//   console.log( "from server "+ result ) ;

//   const data = result.data ;

//   return{
//     props: {data}
//   }
// };

// export async function getServerSideProps( {params}) {
//   console.log( "from server slider ")
//   // const dummy = params.fetchUrl ;
//   // console.log( "from server "+ dummy ) ;
//   return {
//     props: 
//       {data : "Ruchi"}
    
//   }
// }







export default ProductTile ;