import React from 'react'
import styles from '../styles/slider.module.css'
import ProductTile from './ProductTile'



function Slider( {title , design_detail}) {
  console.log( design_detail.class )
  return (
    
    <div className = {styles.container}>
      <div className = {styles.slider} >
        <div className ={`pb-0 ${styles.slider_heading}`}>
          <h4>{title}</h4>
          <span>View all</span>
        </div>
      </div>

      <div className={styles.design_collection}>
        {
          design_detail.map( design =>{
            return <ProductTile
              key   = { design.id }
              title = { design.title} 
              symbol = { design.symbol}
              discount_price = { design.discount_price}
              discount_percent = {design.discount_percent}
              price = {design.price}
              image = { design.sizes}

            />;
          })
        }

      </div> 

    </div>
  )
}



export default Slider

