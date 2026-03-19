import { useEffect, useState } from 'react';

import { Field } from '@flowgram.ai/free-layout-editor';
import { Select } from '@douyinfe/semi-ui';

import clients from '../clients.json';
import { useIsSidebar } from '../../../hooks';
import { FormItem } from '../../../form-components';
import { ClientPort } from './styles';

interface ClientValue {
  key: string;
  value: string;
}

export function ClientSelect() {
  const readonly = !useIsSidebar();
  const [clientOptions, setClientOptions] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    // 转换clients数据为Select组件需要的格式
    const options = clients.map(client => ({
      label: client.client_name,
      value: client.id,
    }));
    setClientOptions(options);
  }, []);

  return (
    <Field<ClientValue> name="inputsValues.clientName.0">
      {({ field, fieldState }) => (
        <FormItem name="客户端" type="string" required={true} labelWidth={80}>
          <Select
            placeholder="请选择客户端"
            style={{ width: '100%' }}
            value={field.value?.value || ''}
            onChange={(value) => field.onChange({ key: field.value?.key || '', value: String(value || '') })}
            disabled={readonly}
            optionList={clientOptions}
          />
          {/* 添加输出端口标记，使节点可以从右侧连线 */}
          <ClientPort data-port-id={field.value?.key} data-port-type="output" />
        </FormItem>
      )}
    </Field>
  );

}