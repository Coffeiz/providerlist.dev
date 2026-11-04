# ADR-0053 · 市场网站与文档链接归属 Service

> 状态：已接受 · 日期：2026-11-02

## 背景

同一 Provider 在不同市场可能使用不同的平台入口和文档。把单个 `website` 或 `docs` 放在 Provider 根对象，会让页面无法明确展示当前市场的信息，也可能错误地把一个市场的链接套用到其他市场。

## 决策

1. Provider 根对象不包含 `website` 和 `docs`。
2. 市场级网站和文档链接记录在对应 Service 的 `website` 与 `docs` 字段；页面只读取当前市场的 Service，不回退到 Provider 级链接。
3. Feed 地址候选从 first-party Service 的 HTTPS `website` 按精确 origin 生成；不同市场的 origin 分别形成候选。同源 Service 可以共用一个候选。
4. 采集器只有在来源能明确关联市场时才写入 Service.website；Provider 级通用站点地址不自动复制到各市场。

## 后果

- Provider 源数据只保留厂商身份和全局集成信息；页面链接由市场 Service 管理。
- Feed 候选发现粒度与市场网站数据一致。
- Provider Schema、TypeScript 类型、语义校验、公开 Feed 示例、数据投影和页面读取需保持这一归属。

## 取代关系

本 ADR 调整 ADR-0035 中“从 Provider 主档网站生成一个候选”的来源规则。Feed 候选仍不代表域名验证或授权。
