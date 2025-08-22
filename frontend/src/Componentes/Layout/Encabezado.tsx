export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        La Lengua 😜    
    </div>

      {/* Navegación */}
      <nav className="nav">
        <a href="#" className="active">Inicio</a>
        <a href="#">Misiones</a>
        <a href="#">Progreso</a>
        <a href="#">Programar Clases</a>
      </nav>

      {/* User Stats */}
      <div className="user-stats">
        <div className="points">
          <span>🍬</span>
          <span>250</span>
        </div>
      </div>
    </header>
  );
}
