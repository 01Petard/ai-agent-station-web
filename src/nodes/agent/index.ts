import { nanoid } from 'nanoid';

import { WorkflowNodeType } from '../constants';
import { FlowNodeRegistry } from '../../typings';
import iconAgent from '../../assets/icon-agent.jpg';
import { formMeta } from './form-meta';
// import agents from './agents.json';

let index = 0;
export const AgentNodeRegistry: FlowNodeRegistry = {
  type: WorkflowNodeType.Agent,
  info: {
    icon: iconAgent,
    description: '智能体',
  },
  formMeta,
  meta: {
    defaultPorts: [{ type: 'input' }],
    // Condition Outputs use dynamic port
    useDynamicPort: true,
    expandable: false, // disable expanded
  },
  onAdd() {
    return {
      id: `agent_${nanoid(5)}`,
      type: 'agent',
      data: {
        title: `Agent_${++index}`,
        // inputsValues: {
        //   agentName: [
        //     {
        //       key: `agent_select_${nanoid(6)}`,
        //       value: agents[0].id,
        //     },
        //   ],
        // },
        inputs: {
          type: 'object',
          properties: {
            agentName: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  key: {
                    type: 'string',
                  },
                  value: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    };
  },
};
