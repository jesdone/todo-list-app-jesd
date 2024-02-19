import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "./page";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

<App tasks={DATA} />;
