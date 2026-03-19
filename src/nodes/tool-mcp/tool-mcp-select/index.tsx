import { useEffect, useState } from 'react';

import { Field } from '@flowgram.ai/free-layout-editor';
import { Select } from '@douyinfe/semi-ui';

import toolMcps from '../toolMcp.json';
import { useIsSidebar } from '../../../hooks';
import { FormItem } from '../../../form-components';
import { ToolMcpPort } from './styles';

interface ToolMcpValue {
  key: string;
  value: string;
}

export function ToolMcpSelect() {
  const readonly = !useIsSidebar();
  const [toolMcpOptions, setToolMcpOptions] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    // 转换toolMcps数据为Select组件需要的格式
    const options = toolMcps.map(toolMcp => ({
      label: toolMcp.mcp_name,
      value: toolMcp.id,
    }));
    setToolMcpOptions(options);
  }, []);

  return (
    <Field<ToolMcpValue> name="inputsValues.toolMcpName.0">
      {({ field, fieldState }) => (
        <FormItem name="MCP工具" type="string" required={true} labelWidth={80}>
          <Select
            placeholder="请选择MCP工具"
            style={{ width: '100%' }}
            value={field.value?.value || ''}
            onChange={(value) => field.onChange({ key: field.value?.key || '', value: String(value || '') })}
            disabled={readonly}
            optionList={toolMcpOptions}
          />
          {/* 添加输出端口标记，使节点可以从右侧连线 */}
          <ToolMcpPort data-port-id={field.value?.key} data-port-type="output" />
        </FormItem>
      )}
    </Field>
  );
}