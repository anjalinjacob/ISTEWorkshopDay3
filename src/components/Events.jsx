import React from "react";
import "./Events.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Events = () => {
  return (
    <section className="events" id="events">
      <h2 className="events-title">
        Upcoming <span>Events</span>
      </h2>

      <p className="events-subtitle">
        Join our latest hackathons, workshops, and tech meetups crafted to
        inspire innovation and collaboration.
      </p>

      <div className="events-grid">
        <div className="event-card">
          <div className="event-badge">Hackathon</div>
          <h3>HASH HackFest 2026</h3>

          <div className="event-info">
            <span><FaCalendarAlt /> Feb 12–14, 2026</span>
            <span><FaMapMarkerAlt /> On Campus</span>
          </div>

          <p>
            A 48-hour coding marathon where teams build innovative solutions
            to real-world problems.
          </p>

          <button className="event-btn">
            Register <FaArrowRight />
          </button>
        </div>

        <div className="event-card">
          <div className="event-badge workshop">Workshop</div>
          <h3>Web Dev Bootcamp</h3>

          <div className="event-info">
            <span><FaCalendarAlt /> Mar 5, 2026</span>
            <span><FaMapMarkerAlt /> Hybrid</span>
          </div>

          <p>
            Hands-on workshop covering modern frontend tools, UI design,
            and best coding practices.
          </p>

          <button className="event-btn">
            Register <FaArrowRight />
          </button>
        </div>

        <div className="event-card">
          <div className="event-badge talk">Tech Talk</div>
          <h3>Future of AI</h3>

          <div className="event-info">
            <span><FaCalendarAlt /> Apr 10, 2026</span>
            <span><FaMapMarkerAlt /> Online</span>
          </div>

          <p>
            An expert-led session exploring trends, ethics, and opportunities
            in artificial intelligence.
          </p>

          <button className="event-btn">
            Register <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
