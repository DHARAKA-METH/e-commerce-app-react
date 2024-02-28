import menuimg from '../../img/menu-svgrepo-com.svg'
import searchimg from '../../img/search-svgrepo-com.svg'
import cartimg from '../../img/full-shoping-cart-svgrepo-com.svg'

const Header = () => {
  return <header>
  {/* header left */}

  <div>
    <img src={menuimg} alt='menu'/>
    <h2>DMD</h2>
    <div>
      <input type="text" placeholder="Search"/>
      <img src={cartimg} alt='cart'/>
    </div>
  </div>




  {/* header right */}
  <img src={searchimg} alt='search'/>
  </header>;
};

export default Header;
