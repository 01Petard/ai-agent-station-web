import { useEffect, useState } from 'react';

import { Field } from '@flowgram.ai/free-layout-editor';
import { Select } from '@douyinfe/semi-ui';

import agents from '../agents.json';
import { useIsSidebar } from '../../../hooks';
import { FormItem } from '../../../form-components';
import { AgentPort } from './styles';

interface AgentValue {
  key: string;
  value: string;
}

export function AgentSelect() {
  const readonly = !useIsSidebar();
  const [agentOptions, setAgentOptions] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    // 转换agents数据为Select组件需要的格式
    const options = agents.map(agent => ({
      label: agent.value,
      value: agent.id,
    }));
    setAgentOptions(options);
  }, []);

  return (
    <Field<AgentValue> name="inputsValues.agentName.0">
      {({ field, fieldState }) => (
        <FormItem name="智能体" type="string" required={true} labelWidth={80}>
          <Select
            placeholder="请选择智能体"
            style={{ width: '100%' }}
            value={field.value?.value || ''}
            onChange={(value) => field.onChange({ key: field.value?.key || '', value: String(value || '') })}
            disabled={readonly}
            optionList={agentOptions}
          />
          {/* 添加输出端口标记，使节点可以从右侧连线 */}
          <AgentPort data-port-id={field.value?.key} data-port-type="output" />
        </FormItem>
      )}
    </Field>
  );
}