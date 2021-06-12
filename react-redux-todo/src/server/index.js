import { createServer } from "miragejs";

const runMirage = () =>
  createServer({
    routes() {
      this.get("/api/todos", () => [
        { title: "Cooking", isComplete: false },
        { title: "marketing", isComplete: false },
        { title: "working", isComplete: false },
      ]);
    },
  });

export default runMirage;
