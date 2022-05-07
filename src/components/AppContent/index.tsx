import React from "react";
import Title from "../Title";
import TicketList from "../TicketList";
import Board from "../Board";
import "./styles.scss";

const AppContent = () => {
  return (
    <main className="main">
      <div className="container">
        <Title text="Ticket list" />
        <TicketList />
        <Title text="Board" />
        <Board />
      </div>
    </main>
  );
};

export default AppContent;
