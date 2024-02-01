function Character(props){

    let {itemName, image, description} = props
   return(
       <div>
       <div>
           <h1>
               {itemName}
           </h1>
           <h2>
               {description}
           </h2>
           <img src={image}/>
       </div>



       </div>
   )



}














export default Character