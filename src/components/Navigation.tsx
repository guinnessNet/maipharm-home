import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="hidden md:block bg-white border-b">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8 py-3">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `py-2 px-1 text-gray-700 hover:ezpharm-text-blue ${isActive ? 'navigator-active' : ''}`
              }
              end
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `py-2 px-1 text-gray-700 hover:ezpharm-text-blue ${isActive ? 'navigator-active' : ''}`
              }
            >
              회사소개
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `py-2 px-1 text-gray-700 hover:ezpharm-text-blue ${isActive ? 'navigator-active' : ''}`
              }
            >
              제품소개
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/customer" 
              className={({ isActive }) => 
                `py-2 px-1 text-gray-700 hover:ezpharm-text-blue ${isActive ? 'navigator-active' : ''}`
              }
            >
              고객센터
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
