import {Link, Outlet} from 'react-router-dom'

const Account = () => {
  return (
    <div className="p-4">
    <h1 className="text-2xl mb-4">My Account</h1>
    <nav className="space-x-4">
      <Link to="/account/login-register">LOGIN/REGISTER</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/account/orders">Orders</Link>
      <Link to="/account/saved-address">Saved Addresses</Link>
    </nav>
    <div className="mt-4">
      <Outlet />
    </div>
  </div>
  )
}

export default Account;