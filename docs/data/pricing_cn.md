# 定价数据

本文说明价格的录入和展示规则。字段定义见 [`schema_cn.md`](schema_cn.md)，计费单位见 `@providerlist/shared/pricing/units`。

## 记录价格

- 按来源记录价格、币种、单位和条件；未知价格用 `null`，确认免费才用 `"0"`。金额使用十进制字符串。
- 保留来源币种和原价。汇率换算只作参考，不用于推算或替换原价。

## 价格字段

Offering 和独立服务能力都通过 `pricing` 保存价格。每组价格包含币种及费率：

```json
{
  "pricing": [
    {
      "currency": "USD",
      "rates": [
        { "metric": "input", "unit": "per_1m_tokens", "value": "3" },
        { "metric": "output", "unit": "per_1m_tokens", "value": "12" },
        { "metric": "cache_read", "ttl": "5min", "unit": "per_1m_tokens", "value": "0.5" }
      ]
    }
  ]
}
```

- `metric`：收费项目，如输入、输出或缓存读取。
- `unit`：计费单位，按每条费率记录。图片、音频和视频价格应使用对应单位，不要记作 Token 价格。
- `value`：现价，使用十进制字符串。

### 适用范围与价格档位

- 部署范围填在 `deployment`，具体地点填在 `region`。来源未说明时省略。
- 服务等级等其他价格条件填在 `conditions`，只记录来源明确的条件。它限定整组价格的适用情况。
- `context` 表示输入 Token 的价格档位，例如 `">0 & <=256000"`，只作用于对应费率。边界不明确时保留来源说法，不自行推算。
- 缓存价格可用 `ttl` 标注时长，例如 `5min` 或 `1h`；来源未说明时省略。
- 只有来源明确说明不支持时，才填入 `unsupported_metrics`。没有价格记录不代表不支持。
- 价格组顺序仅用于展示，不能据此判断适用价格。条件重叠且来源未说明处理方式时，保留待审阅。

### 促销价

- `value` 记录现价；来源给出原价时，用 `list_value` 记录。
- 套餐价格保存在 Plan 的 `billing_options`，不从套餐费用推算 Token 单价。

## 展示价格

- 页面金额最多显示三位小数，去掉末尾的零；小于 `0.0005` 的正数显示为 `<0.001`。确认免费时显示“免费”或 “Free”。
- 展示精度不改变源数据、公开 JSON 或计算精度。
- 价格应同时显示计费单位；有条件时显示条件，无条件时不额外标注。
- 原币、汇率参考价及套餐价格共用 `frontend/src/composables/format.ts` 中的 `displayPriceAmount()` 和 `formatRule()`。
