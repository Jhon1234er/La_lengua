import './Header.css';

export default function Header() {
  return (
    <header className="header-home">
      {/* Logo */}
      <div className="logo">
        La Lengua 😜    
      </div>

      {/* Navegación */}
      <nav className="nav">
        <a href="#" className="active">Home</a>
        <a href="#">Info</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
