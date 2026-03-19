export enum WorkflowNodeType {
  Start = 'start',
  End = 'end',
  LLM = 'llm',
  Task = 'task',
  Agent = 'agent',
  Model = 'model',
  Condition = 'condition',
  Loop = 'loop',
  Comment = 'comment',
  ToolMcp = 'tool-mcp',
  Client = 'client',
}
