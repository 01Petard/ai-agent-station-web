import { FlowDocumentJSON } from './typings';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: "start_0",
      type: "start",
      meta: {
        position: {
          x: -480,
          y: 61.5
        }
      },
      data: {
        title: "Start",
        outputs: {
          type: "object",
          required: []
        }
      }
    },
    {
      id: "client_StsKn",
      type: "client",
      meta: {
        position: {
          x: 344,
          y: 279.5
        }
      },
      data: {
        title: "Client_1",
        inputsValues: {
          clientName: [
            {
              key: "client_select_sVimUM",
              value: "1"
            }
          ]
        },
        inputs: {
          type: "object",
          properties: {
            clientName: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string"
                  },
                  value: {
                    type: "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      id: "agent_QyqMj",
      type: "agent",
      meta: {
        position: {
          x: -89,
          y: 421
        }
      },
      data: {
        title: "Agent_1",
        inputsValues: {
          agentName: [
            {
              key: "agent_select_N03umk",
              value: "11"
            }
          ]
        },
        inputs: {
          type: "object",
          properties: {
            agentName: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string"
                  },
                  value: {
                    type: "string"
                  }
                }
              }
            }
          }
        },
        outputs: {
          type: "object",
          properties: {
            result: {
              type: "string"
            }
          }
        }
      }
    },
    {
      id: "client_v0KBu",
      type: "client",
      meta: {
        position: {
          x: 344,
          y: 431
        }
      },
      data: {
        title: "Client_2",
        inputsValues: {
          clientName: [
            {
              key: "client_select_MiVJjf",
              value: "2"
            }
          ]
        },
        inputs: {
          type: "object",
          properties: {
            clientName: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string"
                  },
                  value: {
                    type: "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      id: "client_xQKrI",
      type: "client",
      meta: {
        position: {
          x: 344,
          y: 605.75
        }
      },
      data: {
        title: "Client_3",
        inputsValues: {
          clientName: [
            {
              key: "client_select_T26mcH",
              value: "3"
            }
          ]
        },
        inputs: {
          type: "object",
          properties: {
            clientName: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string"
                  },
                  value: {
                    type: "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      id: "task_onL7f",
      type: "task",
      meta: {
        position: {
          x: -89,
          y: 144.5
        }
      },
      data: {
        title: "Task_1",
        inputsValues: {
          taskName: "CSDN自动发帖",
          description: "编写八股文章",
          cronExpression: "* * * * * * ?",
          taskParam: "生成技术文章"
        },
        inputs: {
          type: "object",
          required: [
            "taskName",
            "description",
            "cronExpression",
            "taskParam"
          ],
          properties: {
            taskName: {
              type: "string"
            },
            description: {
              type: "string"
            },
            cronExpression: {
              type: "string"
            },
            taskParam: {
              type: "string"
            }
          }
        },
        outputs: {
          type: "object",
          properties: {
            result: {
              type: "string"
            }
          }
        }
      }
    },
    {
      id: "tool_mcp_0I9IW",
      type: "tool-mcp",
      meta: {
        position: {
          x: 763,
          y: 442
        }
      },
      data: {
        title: "ToolMcp_1",
        inputsValues: {
          toolMcpName: [
            {
              key: "tool_mcp_select_uIMF8s",
              value: "1"
            }
          ]
        },
        inputs: {
          type: "object",
          properties: {
            toolMcpName: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string"
                  },
                  value: {
                    type: "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      id: "tool_mcp_7eSEm",
      type: "tool-mcp",
      meta: {
        position: {
          x: 763,
          y: 605.75
        }
      },
      data: {
        title: "ToolMcp_2",
        inputsValues: {
          toolMcpName: [
            {
              key: "tool_mcp_select_FQ28wM",
              value: "2"
            }
          ]
        },
        inputs: {
          type: "object",
          properties: {
            toolMcpName: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string"
                  },
                  value: {
                    type: "string"
                  }
                }
              }
            }
          }
        }
      }
    }
  ],
  edges: [
    {
      sourceNodeID: "start_0",
      targetNodeID: "task_onL7f"
    },
    {
      sourceNodeID: "agent_QyqMj",
      targetNodeID: "client_StsKn",
      sourcePortID: "agent_select_N03umk"
    },
    {
      sourceNodeID: "task_onL7f",
      targetNodeID: "agent_QyqMj"
    },
    {
      sourceNodeID: "agent_QyqMj",
      targetNodeID: "client_v0KBu",
      sourcePortID: "agent_select_N03umk"
    },
    {
      sourceNodeID: "agent_QyqMj",
      targetNodeID: "client_xQKrI",
      sourcePortID: "agent_select_N03umk"
    },
    {
      sourceNodeID: "client_v0KBu",
      targetNodeID: "tool_mcp_0I9IW",
      sourcePortID: "client_select_MiVJjf"
    },
    {
      sourceNodeID: "client_v0KBu",
      targetNodeID: "tool_mcp_7eSEm",
      sourcePortID: "client_select_MiVJjf"
    }
  ]
};
