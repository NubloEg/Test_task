
import style from "../Main.module.css"



function Photo({hidden,id,selectPhotoId}) {

 
  const selectPhoto=()=>{
    selectPhotoId(id)
    hidden()
  }
  
  return (<div onClick={selectPhoto} className={style.main_photo}>
                  <img src={require(`../../../img/photo_item/${id}.jpg`)} alt="img"/>
                  <div className={style.main__photo__id}>{`id:${id}`}</div>
              </div>
       
   
  )
}

export default Photo;
