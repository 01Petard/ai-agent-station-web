import { nanoid } from 'nanoid';

import { FlowNodeRegistry } from '../../typings';
import iconClient from '../../assets/icon-client.jpg'; // 暂时使用客户端图标
import toolMcps from './toolMcp.json';
import { formMeta } from './form-meta';
import { WorkflowNodeType } from '../constants';

let index = 0;
export const ToolMcpNodeRegistry: FlowNodeRegistry = {
  type: WorkflowNodeType.ToolMcp,
  info: {
    icon: iconClient,
    description: 'MCP工具',
  },
  meta: {
    defaultPorts: [{ type: 'input' }],
    // 使用动态端口
    useDynamicPort: true,
    expandable: false, // 禁用展开
  },
  formMeta,
  onAdd() {
    return {
      id: `tool_mcp_${nanoid(5)}`,
      type: 'tool-mcp',
      data: {
        title: `ToolMcp_${++index}`,
        inputsValues: {
          toolMcpName: [
            {
              key: `tool_mcp_select_${nanoid(6)}`,
              value: toolMcps[0].id,
            },
          ],
        },
        inputs: {
          type: 'object',
          properties: {
            toolMcpName: {
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