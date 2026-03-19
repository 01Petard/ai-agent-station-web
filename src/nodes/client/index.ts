import { nanoid } from 'nanoid';

import { WorkflowNodeType } from '../constants';
import { FlowNodeRegistry } from '../../typings';
import iconClient from '../../assets/icon-client.jpg';
import { formMeta } from './form-meta';
import clients from './clients.json';

let index = 0;
export const ClientNodeRegistry: FlowNodeRegistry = {
  type: WorkflowNodeType.Client,
  info: {
    icon: iconClient,
    description: '客户端',
  },
  meta: {
    defaultPorts: [{ type: 'input' }],
    // Condition Outputs use dynamic port
    useDynamicPort: true,
    expandable: false, // disable expanded
  },
  formMeta,
  onAdd() {
    return {
      id: `client_${nanoid(5)}`,
      type: 'client',
      data: {
        title: `Client_${++index}`,
        inputsValues: {
          clientName: [
            {
              key: `client_select_${nanoid(6)}`,
              value: clients[0].id,
            },
          ],
        },
        inputs: {
          type: 'object',
          properties: {
            clientName: {
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
}