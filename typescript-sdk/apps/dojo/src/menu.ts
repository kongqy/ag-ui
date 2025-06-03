import { MenuIntegrationConfig } from "./types/integration";

export const menuIntegrations: MenuIntegrationConfig[] = [
  {
    id: "starter",
    name: "Starter",
    features: ["agentic_chat"],
  },
  {
    id: "mastra",
    name: "Mastra",
    features: ["agentic_chat"],
  },
  {
    id: "vercel-ai-sdk",
    name: "Vercel AI SDK",
    features: ["agentic_chat"],
  },
  {
    id: "langgraph",
    name: "LangGraph",
    features: ["agentic_chat", "human_in_the_loop", "agentic_generative_ui", "tool_based_generative_ui", "predictive_state_updates", "shared_state"],
  },
];
