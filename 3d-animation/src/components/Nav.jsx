import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/Search.svg";
import Store from "../assets/images/Store.svg";


function Nav() {
  return (
    <nav className="nav-wrapper">
        <div className="nav-content">
            <ul className="list-styled">
                <li>
                    <img src={Logo} alt="Apple"/>
                </li>
                <li>
                    <a className="link-styled">Store</a>
                </li>
                <li>
                    <a className="link-styled">Mac</a>
                </li>
                <li>
                    <a className="link-styled">Ipad</a>
                </li>
                <li>
                    <a className="link-styled">IPhone</a>
                </li>
                <li>
                    <a className="link-styled">Watch</a>
                </li>
                <li>
                    <a className="link-styled">Tablet</a>
                </li>
                <li>
                    <img src={Search} alt="" />
                </li>
                <li>
                    <img src={Store} alt="" />
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Nav