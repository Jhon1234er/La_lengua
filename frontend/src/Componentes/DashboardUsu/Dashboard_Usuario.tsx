import { useEffect } from "react";
import "./Dashboard.css";

export default function LingoLearn() {
  useEffect(() => {
    // Progress bar inicial
    setTimeout(() => {
      const progressFill = document.querySelector<HTMLElement>(".progress-fill");
      if (progressFill) progressFill.style.width = "35%";

      const challengeFill = document.querySelector<HTMLElement>(
        ".challenge-progress-fill"
      );
      if (challengeFill) challengeFill.style.width = "60%";
    }, 500);

    // Avatar color picker
    document.querySelectorAll<HTMLElement>(".color-option").forEach((option) => {
      option.addEventListener("click", function () {
        document
          .querySelectorAll<HTMLElement>(".color-option")
          .forEach((opt) => opt.classList.remove("active"));
        this.classList.add("active");

        const avatar = document.querySelector<HTMLElement>(".avatar-preview");
        const colorClass = this.className.split(" ")[1];
        if (!avatar) return;

        switch (colorClass) {
          case "color-red":
            avatar.style.background = "#fecaca";
            avatar.style.color = "#dc2626";
            break;
          case "color-green":
            avatar.style.background = "#bbf7d0";
            avatar.style.color = "#059669";
            break;
          case "color-purple":
            avatar.style.background = "#ddd6fe";
            avatar.style.color = "#7c3aed";
            break;
          case "color-yellow":
            avatar.style.background = "#fef3c7";
            avatar.style.color = "#d97706";
            break;
        }
      });
    });

    // Hover en botones
    document.querySelectorAll<HTMLButtonElement>("button").forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-1px)";
      });
      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });

    // Misiones: click en botón
    document.querySelectorAll<HTMLButtonElement>(".mission-button").forEach((btn) => {
      if (!btn.disabled) {
        btn.addEventListener("click", function () {
          const card = this.closest(".mission-card");
          const title = card?.querySelector(".mission-title")?.textContent;
          alert(`¡Iniciando misión: ${title}!`);
        });
      }
    });

    // Nueva clase
    const newClassBtn = document.querySelector<HTMLButtonElement>(".new-class-btn");
    newClassBtn?.addEventListener("click", () => {
      alert("¡Programar nueva clase!");
    });

    // Editar clase
    document.querySelectorAll<HTMLButtonElement>(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const row = this.closest(".table-row");
        const teacher = row?.querySelector(".teacher-name")?.textContent;
        alert(`Reprogramar clase con ${teacher}`);
      });
    });

    // Eliminar clase
    document.querySelectorAll<HTMLButtonElement>(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const row = this.closest(".table-row");
        const teacher = row?.querySelector(".teacher-name")?.textContent;
        if (confirm(`¿Cancelar clase con ${teacher}?`)) {
          row?.remove();
        }
      });
    });
  }, []);

  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>¡Ayuda a Lingo a migrar mientras aprendes inglés!</h1>
          <p>
            Acompaña a Lingo el flamingo en su viaje migratorio mientras mejoras
            tu inglés con lecciones divertidas y desafíos emocionantes.
          </p>
          <button className="btn-adventure">¡Comenzar aventura!</button>
        </div>
        <div className="hero-image">
          <div className="flamingo">
            <img
              src="/flamingo.png"
              alt="Flamingo"
              className="flamingo-img"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <div className="cards-grid">
        {/* Avatar Card */}
        <div className="card avatar-card">
          <div className="card-header">
            <div className="card-icon">
              <img src="./usuario.png" alt="User Avatar" className="icon-img" />
            </div>
            <h3>Tu Avatar</h3>
          </div>
          <div className="card-description">
            Personaliza tu avatar para acompañar a Lingo en su viaje migratorio.
          </div>

          <div className="avatar-preview">👤</div>

          <div className="color-palette">
            <div className="color-option color-red active"></div>
            <div className="color-option color-green"></div>
            <div className="color-option color-purple"></div>
            <div className="color-option color-yellow"></div>
          </div>
          <button className="btn-primary personalizar">Personalizar</button>
        </div>

        {/* Progress Card */}
        <div className="card progress-card">
          <div className="card-header">
            <div className="card-icon">
              <img src="./grafico-de-barras.png" className="icon-img" />
            </div>
            <h3>Tu Progreso</h3>
          </div>
          <div className="level-info">
            <div className="level-text">Nivel actual: Principiante</div>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="progress-percentage">35%</div>
            </div>
          </div>
          <ul className="skills-list">
            <li>
              <span>Vocabulario</span>
              <div className="stars">☆⭐⭐</div>
            </li>
            <li>
              <span>Gramática</span>
              <div className="stars">☆☆⭐</div>
            </li>
            <li>
              <span>Conversación</span>
              <div className="stars">⭐⭐⭐</div>
            </li>
          </ul>
          <button className="btn-primary detalles">Ver detalles</button>
        </div>

        {/* Daily Challenge Card */}
        <div className="card challenge-card">
          <div className="star large"></div>
          <div className="star medium"></div>
          <div className="star small-left"></div>
          <div className="star small-right"></div>

          <div className="card-header">
            <div className="card-icon">
              <img src="./fuego.png" className="icon-img" />
            </div>
            <h3>Reto Diario</h3>
          </div>

          <div className="challenge-badge">¡En racha!</div>
          <div className="challenge-day">Día 3 de racha</div>
          <div className="challenge-desc">
            Completa el reto de hoy para mantener tu racha invicta.
          </div>

          <div className="challenge-progress-container">
            <div className="challenge-segment completed"></div>
            <div className="challenge-segment completed"></div>
            <div className="challenge-segment current"></div>
            <div className="challenge-segment"></div>
            <div className="challenge-segment"></div>
            <div className="challenge-segment"></div>
            <div className="challenge-segment"></div>
          </div>

          <div className="challenge-reward">
            Próxima recompensa: 50 puntos
          </div>
          <button className="btn-challenge">Completar reto de hoy</button>
        </div>
      </div>

      {/* Missions */}
      <div className="Seccion_2">
        <h1 className="section-title">Misiones Actuales</h1>
        <a href="#" className="view-all">
          Ver todas ›
        </a>
      </div>

      <div className="missions-grid">
        {/* Vocabulario de Viaje */}
        <div className="mission-card vocabulary-card">
          <div className="mission-content">
            <h2 className="mission-title">Vocabulario de Viaje</h2>
            <div className="progress-info">
              <div className="progress-text">
                <span>Progreso: 2/5</span>
                <span className="status-badge">En progreso</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill vocabulary-progress"></div>
              </div>
            </div>
            <p className="mission-description">
              Aprende palabras esenciales para ayudar a Lingo a comunicarse
              durante su viaje.
            </p>
          </div>
          <button className="mission-button">Continuar</button>
        </div>

        {/* Gramática Básica */}
        <div className="mission-card grammar-card">
          <div className="mission-content">
            <h2 className="mission-title">Gramática Básica</h2>
            <div className="progress-info">
              <div className="progress-text">
                <span>Progreso: 1/5</span>
                <span className="status-badge status-new">Nuevo</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill grammar-progress"></div>
              </div>
            </div>
            <p className="mission-description">
              Domina los tiempos verbales para ayudar a Lingo a planificar su
              ruta migratoria.
            </p>
          </div>
          <button className="mission-button">Continuar</button>
        </div>

        {/* Conversación Práctica */}
        <div className="mission-card conversation-card">
          <div className="mission-content">
            <h2 className="mission-title">Conversación Práctica</h2>
            <div className="progress-info">
              <div className="progress-text">
                <span>Progreso: 0/5</span>
                <span className="status-badge status-blocked">Bloqueado</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill conversation-progress"></div>
              </div>
            </div>
            <p className="mission-description">
              Practica diálogos para que Lingo pueda interactuar con otros
              durante su viaje.
            </p>
          </div>
          <button className="mission-button" disabled>
            Desbloquear
          </button>
        </div>
      </div>

      {/* Classes Section */}
      <div className="classes-section">
        <div className="section-header">
          <h2 className="section-title">Programa tus Clases</h2>
          <button className="new-class-btn">+ Nueva clase</button>
        </div>

        <div className="classes-table">
          <div className="table-header">
            <div>Fecha</div>
            <div>Hora</div>
            <div>Profesor</div>
            <div>Tema</div>
            <div>Acciones</div>
          </div>

          <div className="table-row">
            <div className="date-cell">
              15/06/2023
              <div className="date-day">Jueves</div>
            </div>
            <div className="time-cell">10:00 - 11:00</div>
            <div className="teacher-info">
              <div className="teacher-avatar avatar-blue">JD</div>
              <div className="teacher-details">
                <span className="teacher-name">John Doe</span>
                <span className="teacher-role">Profesor Nativo</span>
              </div>
            </div>
            <div className="topic-cell">
              <span className="topic-badge">Conversación básica</span>
            </div>
            <div className="actions">
              <button className="action-btn edit-btn">✏️</button>
              <button className="action-btn delete-btn">🗑️</button>
            </div>
          </div>

          <div className="table-row">
            <div className="date-cell">
              18/06/2023
              <div className="date-day">Domingo</div>
            </div>
            <div className="time-cell">15:30 - 16:30</div>
            <div className="teacher-info">
              <div className="teacher-avatar avatar-green">MS</div>
              <div className="teacher-details">
                <span className="teacher-name">Maria Smith</span>
                <span className="teacher-role">Especialista</span>
              </div>
            </div>
            <div className="topic-cell">
              <span className="topic-badge">Vocabulario de viajes</span>
            </div>
            <div className="actions">
              <button className="action-btn edit-btn">✏️</button>
              <button className="action-btn delete-btn">🗑️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
