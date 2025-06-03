import { AgentIntegrationConfig } from "./types/integration";
import { StarterAgent } from "@ag-ui/starter";
import { MastraClient } from "@mastra/client-js";
import { MastraAgent } from "@ag-ui/mastra";
import { VercelAISDKAgent } from "@ag-ui/vercel-ai-sdk";
import { openai } from "@ai-sdk/openai";
import { LangGraphAgent } from "@ag-ui/langgraph";

export const agentsIntegrations: AgentIntegrationConfig[] = [
  {
    id: "starter",
    agents: async () => {
      return {
        agentic_chat: new StarterAgent(),
      };
    },
  },
  {
    id: "mastra",
    agents: async () => {
      const mastraClient = new MastraClient({
        baseUrl: "http://localhost:4111",
      });

      return MastraAgent.getRemoteAgents({
        mastraClient,
      });
    },
  },
  {
    id: "vercel-ai-sdk",
    agents: async () => {
      return {
        agentic_chat: new VercelAISDKAgent({ model: openai("gpt-4o") }),
      };
    },
  },
  {
    id: 'langgraph',
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
  }
];
