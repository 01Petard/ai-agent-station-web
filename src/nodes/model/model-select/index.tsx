import { useEffect, useState } from 'react';

import { Field } from '@flowgram.ai/free-layout-editor';
import { Select } from '@douyinfe/semi-ui';

import models from '../models.json';
import { useIsSidebar } from '../../../hooks';
import { FormItem } from '../../../form-components';
import { ModelPort } from './styles';

interface ModelValue {
  key: string;
  value: string;
}

export function ModelSelect() {
  const readonly = !useIsSidebar();
  const [modelOptions, setModelOptions] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    // 转换models数据为Select组件需要的格式
    const options = models.map(model => ({
      label: model.model_name,
      value: model.id,
    }));
    setModelOptions(options);
  }, []);

  return (
    <Field<ModelValue> name="inputsValues.modelName.0">
      {({ field, fieldState }) => (
        <FormItem name="模型" type="string" required={true} labelWidth={80}>
          <Select
            placeholder="请选择模型"
            style={{ width: '100%' }}
            value={field.value?.value || ''}
            onChange={(value) => field.onChange({ key: field.value?.key || '', value: String(value || '') })}
            disabled={readonly}
            optionList={modelOptions}
          />
          {/* 添加输出端口标记，使节点可以从右侧连线 */}
          <ModelPort data-port-id={field.value?.key} data-port-type="output" />
        </FormItem>
      )}
    </Field>
  );
}