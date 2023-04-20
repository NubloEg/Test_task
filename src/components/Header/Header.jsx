
import style from "./Header.module.css"

import background from "../../img/Banner image.png";
import mail from "../../img/Mail.svg"
import phone from "../../img/Phone.svg"

function Header() {
  return ( <header className={style.header}>
  <img className={style.header__background} src={background} alt="background"/>
  <div className={style.header__content}>
      <img className={style.header__avatar} src={require("../../img/Avatar profile.png")} alt=""/>
      <div className={style.header__info}>
      <h1 className={style.header__name}>Ricardo Cooper</h1>
      <div className={style.header__actions}>
          <button   className={`${style.header__button} ${style.header__message}` }>
              <img src={mail} alt=""/>
              <span>Message</span>
          </button>
          <button  className={`${style.header__button} ${style.header__call}` }>
              <img src={phone} alt=""/>
              <span>Call</span>
          </button>
      </div>
      </div>
     
      
  </div>
</header>
   
  )
}

export default Header;
