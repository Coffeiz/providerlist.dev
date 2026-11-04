# 第三方依赖许可证清单

仓库用 pnpm 管理依赖，并维护可审阅的许可证清单。

## 生成清单

安装依赖后，在根目录运行：

```bash
pnpm licenses:generate
```

脚本生成以下文件：

- `licenses/javascript.json`：依赖及许可证信息，版本由 `pnpm-lock.yaml` 锁定。
- `licenses/manifest.json`：清单索引。
- `licenses/THIRD-PARTY-NOTICES.md`：第三方依赖声明，可随发行物提供。

不要手动编辑生成文件。依赖或锁文件变化后，重新生成并审阅差异。平台可选依赖可能因生成环境不同而变化。

## CI 检查

```bash
pnpm licenses:check
```

CI 检查已提交清单、直接依赖是否齐全，以及许可证策略是否通过。策略文件为 `licenses/policy.json`：

- **`blockedPatterns`**：阻止受限许可证通过检查。SPDX `OR` 至少有一个可接受选项即可通过；`AND` 的所有选项都须可接受。
- **`reviewLicenses`**：标记发布前需人工确认的许可证，包括无法识别的条目。
- **`exceptions`**：按包名和许可证表达式记录例外，并说明理由。

许可证检查不替代法律审查，也不会修改依赖。
