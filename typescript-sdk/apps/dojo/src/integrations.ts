import { configureIntegration } from "./types/integration";
import { StarterAgent } from "@ag-ui/starter";
import { VercelAISDKAgent } from "@ag-ui/vercel-ai-sdk";
import { openai } from '@ai-sdk/openai';
import { LangGraphAgent } from "@ag-ui/langgraph";

export const integrations = [
  configureIntegration({
    id: "starter",
    name: "Starter",
    features: ["agentic_chat"],
    agents: async () => {
      return {
        agentic_chat: new StarterAgent(),
      };
    },
  }),
  configureIntegration({
    id: "vercel-ai-sdk",
    name: "Vercel AI SDK",
    features: ["agentic_chat"],
    agents: async () => {
      return {
        agentic_chat: new VercelAISDKAgent({ model: openai('gpt-4o') }),
      };
    },
  }),
  configureIntegration({
    id: "langgraph",
    name: "LangGraph",
    features: ["agentic_chat", "agentic_generative_ui", "human_in_the_loop", "predictive_state_updates", "shared_state", "tool_based_generative_ui"],
    agents: async () => {
      return {
        agentic_chat: new LangGraphAgent({ deploymentUrl: 'http://localhost:2024', graphId: 'agentic_chat' }),
        agentic_generative_ui: new LangGraphAgent({ deploymentUrl: 'http://localhost:2024', graphId: 'agentic_generative_ui' }),
        human_in_the_loop: new LangGraphAgent({ deploymentUrl: 'http://localhost:2024', graphId: 'human_in_the_loop' }),
        predictive_state_updates: new LangGraphAgent({ deploymentUrl: 'http://localhost:2024', graphId: 'predictive_state_updates' }),
        shared_state: new LangGraphAgent({ deploymentUrl: 'http://localhost:2024', graphId: 'shared_state' }),
        tool_based_generative_ui: new LangGraphAgent({ deploymentUrl: 'http://localhost:2024', graphId: 'tool_based_generative_ui' }),
      };
    },
  }),
];
