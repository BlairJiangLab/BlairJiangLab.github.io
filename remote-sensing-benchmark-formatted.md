---
title: "Remote Sensing Benchmark"
slug: "remote-sensing-benchmark"
date: 2026-08-24
tags: ["remote sensing", "benchmark", "AI evaluation"]
summary: "关于如何从真实职业任务和专业交付物出发，设计端到端遥感 AI Benchmark的一些思考"
featured: true
---

## 1. 概述

现有遥感benchmark主要评估模型的影像理解、专业问答、空间推理和工具调用能力，但较少从真实职业出发，评价模型能否完成可直接交付的工作成果。

本文参考GDPval[1]，以遥感相关职业及其真实工作任务为基础，构建包含prompt、参考文件、专家交付物和评分标准的职业任务benchmark，评价模型完成遥感专业交付物的能力。

本文的核心目标是构建一个以遥感相关职业为入口、以真实工作交付物为评测对象、以职业专家评价为主要标准的端到端benchmark。

### 1.1 GDPval的构造原则

GDPval的核心是将AI评测从知识问答转向真实职业交付物，主要遵循以下原则[1]：

1. **经济价值导向**：根据行业GDP贡献、职业就业人数和工资水平筛选具有较高经济影响的职业。
2. **职业任务导向**：任务由对应职业的从业专家创建，并映射到O\*NET职业任务，以保证职业代表性。
3. **真实工作导向**：任务来源于专家的实际工作经验，输入包括真实情境、参考文件和必要背景信息。
4. **交付物导向**：模型需要生成文档、表格、演示文稿、图表等完整工作成果，而不是回答选择题或简短问题。
5. **专家质量控制**：任务经过模型初筛、通用审核、职业专项审核和最终审核，并由原作者根据反馈修改。
6. **相对质量评价**：同职业专家盲法比较模型与人类专家交付物，判断模型结果是优于、相当于还是差于专家结果。
7. **自动评分辅助**：自动grader用于降低重复评测成本，但人工专家评分仍是主要依据。

GDPval的基本评测单元可表示为：

<div className="evaluation-flow" role="img" aria-label="Prompt 与参考文件生成模型交付物，再与专家交付物进行盲法比较">
  <span>Prompt ＋ 参考文件</span>
  <span className="evaluation-flow-arrow" aria-hidden="true">→</span>
  <span>模型交付物</span>
  <span className="evaluation-flow-arrow" aria-hidden="true">→</span>
  <span>与专家交付物盲法比较</span>
</div>

这一方法适合迁移到遥感领域，但职业筛选不能简单照搬GDP贡献排序。遥感是跨行业使能技术，应同时考虑职业规模、遥感任务占比和应用代表性。

### 1.2 当前Remote Sensing相关Benchmark情况

传统遥感benchmark主要评价分类、检测、分割和变化检测等单项算法能力；近期benchmark逐渐扩展到多模态问答、工具调用和Agent工作流，但大多按算法、数据集或工具组织，较少依据真实职业任务评价完整工作成果。

| 类型 | 主要任务 | 代表Benchmark | 主要评价方式 | 局限 |
|---|---|---|---|---|
| 单任务感知 | 分类、目标检测、语义分割、变化检测 | BigEarthNet[9]、DOTA[10]、LoveDA[11]、LEVIR-CD[12] | Accuracy、F1、mAP、IoU | 只评价单个算法环节 |
| 基础模型 | 跨数据集分类、分割与迁移 | GEO-Bench[5]、PANGAEA[13] | 汇总多个下游任务的性能 | 仍以标准视觉任务为主 |
| 多模态理解 | 遥感问答、影像解释、空间推理 | GeoMMBench[14]、GEOBench-VLM[6] | 问答或选择题准确率 | 能回答问题不代表能完成工作 |
| 工具与Agent | 多步规划、工具调用、GIS或遥感处理 | ThinkGeo[7]、GISAgentBench[8] | 工具、过程及结果正确率 | 较少评价完整职业交付物 |

## 2. Task Creation

### 2.1 Prioritizing Occupations：Benchmark的维度和选取方法

不同于GDPval，遥感不是一个独立行业，而是一种跨行业的使能技术。

GDPval采用“行业—职业—任务”的组织逻辑：

```text
行业＝经济部门，如金融、医疗和制造
                  ↓
职业＝行业内的具体工作
                  ↓
任务＝职业人员完成的具体工作活动
```

遥感的特殊性在于：

```text
遥感不是独立行业，而是一种技术方法
                  ↓
同一个遥感职业可以服务于多个行业
                  ↓
农业监测、水资源评估、城市规划、灾害响应等
```

例如，Remote Sensing Scientists可能同时从事农业监测、水资源评估、城市规划和灾害响应；Precision Agriculture Technicians在进行农业监测时也会使用遥感技术，二者在职业技能和工作任务上存在交叉。

职业优先级综合考虑以下三个维度：

| 维度 | 判断依据 |
|---|---|
| 遥感相关性 | 遥感、摄影测量或GIS是否构成主要工作内容 |
| 任务代表性 | 是否能够覆盖主要技术环节和应用方向 |
| 职业规模 | 就业人数、工资和劳动报酬规模 |

职业纳入需满足两项基本条件：一是遥感、摄影测量或GIS构成主要工作内容；二是具有可由计算机完成并形成明确交付物的代表性任务。在此基础上，优先选择能够共同覆盖数据处理、科学分析、摄影测量、GIS分析和测绘生产等主要环节的职业。

职业规模统一采用BLS 2025年5月OEWS全国职业就业与工资数据[3]，以就业人数与平均年薪的乘积作为劳动报酬规模代理。该指标用于辅助排序，不单独决定职业取舍。对于缺少独立OEWS统计的O\*NET细分职业，母职业数据仅作为规模上限参考[4]。

#### 2.1.1 核心遥感与摄影测量职业

| O\*NET代码 | 职业名称 | OEWS就业人数 | OEWS平均年薪 | 规模代理值（人数×平均年薪） | 数据性质 |
|---|---|---:|---:|---:|---|
| 19-4099.03 | [Remote Sensing Technicians](https://www.onetonline.org/link/details/19-4099.03) | 73,910 | $66,280 | $4.90B | 19-4099母职业代理 |
| 19-2099.01 | [Remote Sensing Scientists and Technologists](https://www.onetonline.org/link/details/19-2099.01) | 22,300 | $129,230 | $2.88B | 19-2099母职业代理 |
| 17-1021.00 | [Cartographers and Photogrammetrists](https://www.onetonline.org/link/details/17-1021.00) | 14,260 | $86,690 | $1.24B | 独立OEWS职业 |
| **表面合计** |  | **110,470** |  | **$9.02B** | **包含母职业代理** |

其中，19-4099.03使用“Life, Physical, and Social Science Technicians, All Other”的统计数据，19-2099.01使用“Physical Scientists, All Other”的统计数据。

#### 2.1.2 地理空间职业

| O\*NET代码 | 职业名称 | OEWS就业人数 | OEWS平均年薪 | 规模代理值（人数×平均年薪） | 数据性质 |
|---|---|---:|---:|---:|---|
| 15-1299.02 | [Geographic Information Systems Technologists and Technicians](https://www.onetonline.org/link/details/15-1299.02) | 435,370 | $122,230 | $53.22B | 15-1299母职业代理 |
| 17-1022.00 | [Surveyors](https://www.onetonline.org/link/details/17-1022.00) | 50,830 | $80,570 | $4.10B | 独立OEWS职业 |
| 17-3031.00 | [Surveying and Mapping Technicians](https://www.onetonline.org/link/details/17-3031.00) | 58,010 | $58,000 | $3.36B | 独立OEWS职业 |
| **表面合计** |  | **544,210** |  | **$60.68B** | **包含母职业代理** |

其中，15-1299.02使用“Computer Occupations, All Other”的统计数据；435,370人不能解释为GIS技术人员的实际就业人数。

#### 2.1.3 专业应用职业

| O\*NET代码 | 职业名称 | OEWS就业人数 | OEWS平均年薪 | 规模代理值（人数×平均年薪） | 应用领域 | 数据性质 |
|---|---|---:|---:|---:|---|---|
| 19-2041.00 | [Environmental Scientists and Specialists, Including Health](https://www.onetonline.org/link/details/19-2041.00) | 89,250 | $91,680 | $8.18B | 环境监测 | 独立OEWS职业 |
| 19-1031.00 | [Conservation Scientists](https://www.onetonline.org/link/details/19-1031.00) | 25,950 | $77,130 | $2.00B | 保护区规划 | 独立OEWS职业 |
| 19-4071.00 | [Forest and Conservation Technicians](https://www.onetonline.org/link/details/19-4071.00) | 30,410 | $59,060 | $1.80B | 森林监测 | 独立OEWS职业 |
| 19-1013.00 | [Soil and Plant Scientists](https://www.onetonline.org/link/details/19-1013.00) | 15,730 | $87,720 | $1.38B | 土壤监测 | 独立OEWS职业 |
| 19-4012.01 | [Precision Agriculture Technicians](https://www.onetonline.org/link/details/19-4012.01) | 15,130 | $53,840 | $0.81B | 精准农业 | 19-4012母职业代理 |
| 19-2043.00 | [Hydrologists](https://www.onetonline.org/link/details/19-2043.00) | 5,850 | $103,600 | $0.61B | 水资源监测 | 独立OEWS职业 |
| **表面合计** |  | **182,320** |  | **$14.78B** |  | **包含母职业代理** |

其中，19-4012.01使用“Agricultural Technicians”的统计数据。

综合职业规模、遥感相关性和任务代表性，首期benchmark选择以下5个职业：

1. 19-2099.01 Remote Sensing Scientists and Technologists；
2. 19-4099.03 Remote Sensing Technicians；
3. 17-1021.00 Cartographers and Photogrammetrists；
4. 15-1299.02 Geographic Information Systems Technologists and Technicians；
5. 17-3031.00 Surveying and Mapping Technicians。

五个职业分别覆盖科学分析、数据生产、摄影测量、GIS工作流和测绘更新，形成互补的职业任务结构。农业、林业、水文、环境、灾害、城市和自然资源作为应用场景标签，不再作为独立职业重复抽样。

### 2.2 Expert Recruitment

#### 2.2.1 招募标准

每个职业招募不少于5名专家。专家应具有至少4年相关工作经验，并且近2年内仍从事相关工作。

任务作者应覆盖不同机构类型、应用领域和资历水平。任务作者不得担任自己任务的最终评分员。

#### 2.2.2 招募渠道

| 类型 | 招募渠道 |
|---|---|
| 专业协会 | 测绘学会等专业协会及邮件列表 |
| 政府机构 | 自然资源、环境、规划、林业和农业等部门 |
| 研究机构 | 大学遥感、摄影测量、GIS及相关院系 |
| 商业机构 | 地理信息、遥感数据和测绘技术企业 |

#### 2.2.3 专家验证流程

##### 电话履历审查

- 确认工作年限；
- 验证遥感技术的实际使用情况。

##### 视频面试或访谈

- Q1：描述日常工作任务；
- Q2：说明遥感技术使用深度，包括数据源和问题解决方式；
- Q3：分享实际项目案例，包括客户、目标、方法和挑战；
- Q4：确认时间可用性。

##### 培训

- 项目简介和目标；
- 专家角色说明；
- 流程和时间线；
- 评分标准介绍；
- 签署参与协议。

### 2.3 Task Creation

#### 2.3.1 任务结构

严格对应GDPval公开数据[2]，每项任务由以下部分组成：

| 部分 | 内容 |
|---|---|
| 任务元数据 | `task_id`、`sector`和`occupation` |
| 任务输入 | `prompt`及可选的`reference_files` |
| 专家交付物 | 任务作者完成的`deliverable_files` |
| 评分标准 | 任务专用的`rubric_pretty`和`rubric_json` |

职业角色、业务情境、工作要求和交付说明均写入`prompt`，不是与Prompt并列的独立字段。模型评测时接收Prompt和参考文件并生成交付物；专家交付物和Rubric用于后续评分。

职业专家另行评价任务的难度、代表性、预计完成时间和整体质量。任务价值可结合预计完成时间与对应职业工资进行估算，但不属于模型输入。

#### 2.3.2 任务设计原则

| 原则 | 具体要求 |
|---|---|
| 有代表性 | 能够代表该职业的日常核心工作，并映射到O\*NET occupation task[4] |
| Computer-based | 主要步骤可以通过计算机完成 |
| End-to-end | 不是单一知识问答，而是包含可交付产品的完整工作任务 |
| 真实性 | 输入是真实工作文件，输出是可以用于实际生产的专业成果 |
| Gradable | 可以自动检查或由专家可靠判断 |
| Self-contained | 另一名同职业专家仅使用所给资料即可完成 |
| Non-sensitive | 不包含涉密和隐私数据 |

#### 2.3.3 职业核心任务

| 职业 | 核心任务 |
|---|---|
| Remote Sensing Scientists and Technologists | 设计遥感分析方案；处理和分析卫星、航空及地面遥感数据；开展分类、变化检测和定量分析；融合GIS、气象与现场数据；评价算法并解释结果 |
| Remote Sensing Technicians | 检查和准备影像；进行辐射、几何和噪声处理；完成配准、镶嵌和裁剪；执行分类和变化提取；维护元数据、处理日志和质量报告 |
| Cartographers and Photogrammetrists | 汇集航片、控制点和测量资料；开展空三、影像定向和地理定位；生产DOM、DEM和DSM；制作地图；检查摄影测量与制图成果 |
| Geographic Information Systems Technologists and Technicians | 建立和维护空间数据库；完成格式和坐标转换；开展拓扑检查和空间分析；生成地图、表格和报告；编写GIS模型、脚本或应用 |
| Surveying and Mapping Technicians | 整理测量、GPS、航片和地图资料；计算坐标、面积、闭合差和高程；更新地形图和地籍图；检查测量及地图成果；编写生产记录和报告 |

#### 2.3.4 应用场景覆盖

| 标签 | 应用场景 |
|---|---|
| A1 | 基础测绘、城市与基础设施 |
| A2 | 土地与自然资源 |
| A3 | 农业与林业 |
| A4 | 水资源、生态与环境 |
| A5 | 灾害与应急管理 |
| A6 | 海洋、交通与公共安全 |

#### 2.3.5 任务规模与抽样

首期建议构建100项任务，每个职业20项。该数量用于验证流程和评分稳定性，后续根据职业内部差异和评分方差扩充。

| 抽样维度 | 首期建议 |
|---|---|
| 职业 | 5个职业各20项，避免结果被单一职业主导 |
| 难度 | 基础30%、中等50%、复杂20%，由预计完成时间、步骤数和专业判断共同确定 |
| 应用场景 | 每个职业覆盖至少3类场景；全数据集覆盖A1—A6 |
| 交付物 | 每个职业至少覆盖空间数据、表格和报告三类成果 |
| 数据来源 | 优先采用可公开再分发的数据；公开示例集与保密测试集按项目、区域和数据源分组隔离 |

同一项目、同一区域或由同一原始数据派生的任务不得跨数据划分，以降低信息泄漏和重复记忆风险。

#### 2.3.6 任务案例

GDPval公开数据中的主要字段为[2]：

```text
occupation
prompt
reference_files
deliverable_files
rubric_pretty
rubric_json
```

Prompt通常在一段完整任务说明中包含以下信息：

```text
模型担任什么岗位
        ↓
收到哪些参考材料
        ↓
需要解决什么业务问题
        ↓
成果提供给谁使用
        ↓
必须提交哪些文件
```

以下案例是参照设计原则构造的遥感任务案例：

| 职业 | 任务样例 |
|---|---|
| Surveying and Mapping Technicians | 根据GNSS测量点、新一期正射影像和上一版地形图，更新道路、建筑物、高程点和水系，检查测点异常和图层拓扑，提交更新后的GIS数据、异常清单、地图和更新记录 |
| Remote Sensing Scientists and Technologists | 利用灾前、灾后Sentinel-1影像及辅助数据提取新增洪水范围，统计淹没面积、受影响建筑和道路，提交空间成果、统计表、方法说明和应急简报 |
| Cartographers and Photogrammetrists | 根据像控点、检查点、空三报告、DOM和DSM，计算平面与高程精度，识别影像缺陷，提交质检报告、精度计算表和缺陷图斑 |
| Geographic Information Systems Technologists and Technicians | 根据道路、居民地、DEM、洪水风险区和保护区等数据开展应急仓库选址，提交候选区数据、指标表、专题地图和可复现脚本 |
| Remote Sensing Technicians | 对多景光学影像进行波段检查、投影转换、NoData处理、配准、镶嵌和质量检查，提交标准化影像、处理日志、质量统计和异常说明 |

以下是每个样例的完整的任务包示例。

##### 案例1：Surveying and Mapping Technicians

**Task：地形图更新与测量数据检查**

**Prompt**

> 你是市政测绘项目组的测量与制图技术员。项目经理要求你依据最新无人机正射影像和补充GNSS测量数据，更新项目区1:2000地形图。
>
> 请检查GNSS测点中的重复点、坐标异常和高程异常；依据正射影像更新新增及拆除建筑物、道路中心线、水系和高程点；修复图层中的重叠、自相交、未闭合及属性缺失问题。
>
> 更新成果将用于工程设计，因此必须保留原始要素编号，并在更新记录中说明每项修改的数据来源和依据。

**参考文件**

| 文件名 | 说明 |
|---|---|
| `previous_topographic_map.gpkg` | 上一期1:2000地形图，包含建筑物、道路、水系和高程点等图层及原始要素ID |
| `latest_orthophoto.tif` | 项目区最新无人机正射影像，用于判读地物新增、拆除和位置变化 |
| `gnss_survey_points.xlsx` | 补充GNSS测量点，包含点号、平面坐标、高程、采集时间和要素代码 |
| `feature_code_dictionary.xlsx` | 地形要素编码、图层归属、属性名称和允许值对照表 |
| `mapping_specification.pdf` | 项目测图规范，规定坐标系、精度、拓扑、制图和交付要求 |
| `project_boundary.gpkg` | 本次更新工作的项目范围边界 |

**要求交付**

| 文件名 | 说明 |
|---|---|
| `updated_topographic_map.gpkg` | 更新后的地形图数据库，保留规定图层、属性结构和原始要素ID |
| `survey_data_issues.xlsx` | 重复点、坐标异常、高程异常及其他测量数据问题清单 |
| `topographic_map.pdf` | 用于检查和汇报的1:2000地形图版面成果 |
| `update_log.docx` | 逐项记录新增、删除、修改内容及其数据来源和判断依据 |

**关键Rubric**

- GeoPackage包含规定的建筑物、道路、水系和高程点图层；
- 所有图层采用指定坐标系；
- 正确识别重复和异常测点；
- 新增及拆除建筑物更新正确；
- 不存在明显无效几何或违规重叠；
- 保留原始要素ID；
- 更新日志能逐项说明变化类型、数据源和判断依据；
- PDF地图包含标题、图例、比例尺、坐标信息和数据日期。

##### 案例2：Remote Sensing Scientists and Technologists

**Task：基于SAR的洪水范围与影响评估**

**Prompt**

> 你是为州应急管理部门提供技术支持的遥感科学家。一次强降雨事件后，管理部门需要了解三个县的洪水范围及其对建筑物和道路的影响。
>
> 请利用灾前和灾后Sentinel-1 SAR影像提取新增洪水范围。分析时应排除永久水体，并考虑SAR阴影、叠掩、斑点噪声和不同地表覆盖造成的误判。
>
> 请统计各县新增淹没面积、受影响建筑物数量和受影响道路长度，说明采用的方法、阈值、验证结果及主要不确定性。最终简报面向不具备遥感背景的应急管理人员。

**参考文件**

| 文件名 | 说明 |
|---|---|
| `sentinel1_pre_event.tif` | 灾前Sentinel-1 SAR影像，作为正常地表后向散射基准 |
| `sentinel1_post_event.tif` | 灾后Sentinel-1 SAR影像，用于识别新增低后向散射及变化区域 |
| `permanent_water.gpkg` | 河流、湖泊等常年水体范围，用于从结果中排除永久水面 |
| `county_boundaries.gpkg` | 三个县的行政边界及县名、县代码，用于分区统计 |
| `buildings.gpkg` | 研究区建筑物轮廓，用于统计受影响建筑物数量 |
| `roads.gpkg` | 道路中心线及道路等级，用于计算受影响道路长度 |
| `validation_points.csv` | 已判定为洪水或非洪水的验证样点及坐标，用于独立精度评价 |
| `data_description.pdf` | 数据日期、极化方式、分辨率、坐标系、字段及使用限制说明 |

**要求交付**

| 文件名 | 说明 |
|---|---|
| `flood_extent.tif` | 新增洪水范围栅格，按规定编码洪水、非洪水和NoData |
| `flood_extent.gpkg` | 新增洪水范围矢量，包含县代码、面积和必要的质量字段 |
| `impact_statistics.xlsx` | 分县汇总淹没面积、受影响建筑物数量和道路长度 |
| `methodology.docx` | 说明预处理、洪水提取、阈值、后处理、验证和不确定性 |
| `emergency_briefing.pdf` | 面向应急管理人员的简报，展示重点受灾区域和主要统计结果 |
| `analysis_script.py` | 可复现主要洪水提取和影响统计过程的分析脚本 |

**关键Rubric**

- 洪水栅格和矢量成果采用指定CRS和分辨率；
- 永久水体被正确排除；
- 洪水范围相对于参考数据达到规定IoU/F1；
- 各县面积统计误差在允许范围内；
- 建筑物和道路影响统计与空间成果一致；
- 方法说明包含预处理、阈值、后处理和验证步骤；
- 正确说明SAR阴影、叠掩和斑点噪声的影响；
- 应急简报能够清楚回答“哪里受灾最严重”和“结果有多可靠”。

##### 案例3：Cartographers and Photogrammetrists

**Task：无人机摄影测量成果验收**

**Prompt**

> 你是负责无人机测绘成果验收的摄影测量师。外包单位提交了项目区DOM、DSM和空中三角测量报告，项目要求成果满足附件中的1:2000测图精度标准。
>
> 请利用独立检查点计算DOM平面RMSE和DSM高程RMSE，检查空间范围、分辨率、接边、空洞、拉花、重影、建筑物倾斜和明显地形异常。
>
> 请判断成果是否合格，对每个缺陷标注位置、类型、严重程度和建议处理措施。不要修改原始DOM和DSM。

**参考文件**

| 文件名 | 说明 |
|---|---|
| `submitted_dom.tif` | 外包单位提交的数字正射影像成果，用于平面精度与影像质量检查 |
| `submitted_dsm.tif` | 外包单位提交的数字表面模型，用于高程精度和异常检查 |
| `control_points.xlsx` | 空中三角测量使用的像控点坐标及点位信息，仅用于核查控制条件 |
| `independent_checkpoints.xlsx` | 未参与空三解算的独立检查点，用于计算平面和高程RMSE |
| `aerial_triangulation_report.pdf` | 外包单位提交的空三处理过程、参数和精度报告 |
| `project_boundary.gpkg` | 验收项目的有效空间范围 |
| `acceptance_standard.pdf` | 1:2000成果精度、完整性、缺陷等级和验收判定标准 |

**要求交付**

| 文件名 | 说明 |
|---|---|
| `accuracy_calculation.xlsx` | 检查点误差、平面RMSE、高程RMSE及限差判定计算表 |
| `photogrammetry_defects.gpkg` | 缺陷点或图斑，记录缺陷类型、严重程度和处理建议 |
| `acceptance_map.pdf` | 展示项目范围、检查点和缺陷空间分布的验收地图 |
| `quality_inspection_report.docx` | 汇总精度计算、质量问题、合格性结论和返工建议的质检报告 |

**关键Rubric**

- 平面RMSE和高程RMSE计算正确；
- 明确区分像控点与独立检查点；
- 缺陷图斑位置与实际影像问题相符；
- 缺陷类型和严重程度字段完整；
- 正确判断成果是否满足精度要求；
- 报告中的数值与Excel一致；
- 能区分系统性精度问题与局部影像缺陷；
- 返工建议具有可执行性；
- 验收地图能够清楚显示缺陷分布。

##### 案例4：GIS Technologists and Technicians

**Task：应急物资仓库选址分析**

**Prompt**

> 你是县政府应急管理部门的GIS技术人员。部门计划在研究区建设新的应急物资仓库，需要筛选并排序三个候选区域。
>
> 候选区必须位于坡度不超过8度的建设用地内，距主干道不超过2公里，避开洪水高风险区、保护区和水体500米缓冲区，并能覆盖尽可能多的人口。每个候选区的连续可用面积不得小于5公顷。
>
> 请建立可复现的GIS分析流程，生成所有合格候选区，计算面积、道路距离、覆盖人口和风险指标，并推荐排名前三的区域。

**参考文件**

| 文件名 | 说明 |
|---|---|
| `dem.tif` | 数字高程模型，用于计算地形坡度 |
| `land_use.gpkg` | 土地利用图层，用于筛选允许建设的用地类型 |
| `major_roads.gpkg` | 主干道路中心线，用于计算候选地的道路可达距离 |
| `population_grid.tif` | 栅格化人口数据，用于估算各候选地可覆盖的人口 |
| `flood_risk.gpkg` | 洪水高风险区，属于选址硬性排除范围 |
| `protected_areas.gpkg` | 自然保护区等限制建设区域，属于硬性排除范围 |
| `water_bodies.gpkg` | 河流、湖泊等水体，用于建立500米避让缓冲区 |
| `study_area.gpkg` | 仓库选址分析的研究区边界 |
| `site_selection_rules.pdf` | 坡度、距离、面积、排除条件和候选地排序规则 |

**要求交付**

| 文件名 | 说明 |
|---|---|
| `eligible_sites.gpkg` | 满足全部硬约束的连续候选区域及其指标属性 |
| `site_ranking.xlsx` | 候选地面积、道路距离、覆盖人口、风险指标和综合排名表 |
| `recommended_sites_map.pdf` | 展示约束条件、全部合格区域和前三名推荐地的专题地图 |
| `workflow.py` | 可在给定数据上复现筛选、统计和排序过程的GIS脚本 |
| `method_note.docx` | 说明数据处理、约束条件、排序方法、推荐理由和局限性 |

**关键Rubric**

- 正确计算坡度并使用规定阈值；
- 道路和水体距离计算使用适当的投影坐标系；
- 正确排除洪水风险区和保护区；
- 所有候选区满足最小连续面积；
- 覆盖人口计算方法合理；
- 排名表中的数值与GIS成果一致；
- 前三名推荐符合全部硬约束；
- 脚本可以在给定数据上复现结果；
- 地图清楚表达约束条件、合格区域和推荐结果。

##### 案例5：Remote Sensing Technicians

**Task：多景光学卫星影像标准化生产**

**Prompt**

> 你是遥感数据生产团队的遥感技术员。分析团队需要一套覆盖项目区的标准化光学底图，用于后续土地覆盖变化分析。
>
> 请按照附件中的生产规范，对六景卫星影像进行完整性检查、波段核对、投影统一、NoData设置、影像配准、镶嵌、裁剪和质量检查。镶嵌成果应保持原始有效空间分辨率，不得使用会明显改变光谱值的显示增强作为分析数据。
>
> 请记录每景影像的处理状态、发现的问题、使用的参数以及最终质量检查结果。无法满足要求的影像不得静默丢弃，必须在异常清单中说明。

**参考文件**

| 文件名 | 说明 |
|---|---|
| `scene_01.tif`至`scene_06.tif` | 六景待处理光学卫星影像，可能存在投影、波段、NoData或配准差异 |
| `scene_metadata.xlsx` | 各景影像的产品ID、获取日期、传感器、波段、分辨率和投影信息 |
| `project_boundary.gpkg` | 最终标准化影像需要覆盖和裁剪的项目范围 |
| `reference_image.tif` | 已验证位置精度的参考影像，用于配准和误差检查 |
| `production_specification.pdf` | 投影、分辨率、数据类型、NoData、配准精度和质量检查要求 |
| `expected_band_schema.xlsx` | 目标波段顺序、波段名称、数据类型和允许值范围 |

**要求交付**

| 文件名 | 说明 |
|---|---|
| `standardized_mosaic.tif` | 完成投影统一、配准、镶嵌和裁剪的标准化多波段影像 |
| `scene_processing_log.xlsx` | 逐景记录输入状态、处理步骤、参数、异常及处理决定 |
| `quality_control.xlsx` | 输出范围、波段、分辨率、NoData、配准误差和覆盖完整性检查表 |
| `processing_script.py` | 可复现主要影像标准化与镶嵌步骤的处理脚本 |
| `production_report.docx` | 汇总生产过程、最终成果质量、异常影像和使用限制的报告 |

**关键Rubric**

- 正确核对所有输入影像和波段；
- 输出影像采用指定CRS、分辨率和数据类型；
- NoData设置正确；
- 镶嵌成果完整覆盖项目区；
- 配准误差在规定范围内；
- 未对分析数据实施不允许的光谱拉伸；
- 处理日志覆盖全部输入影像；
- 异常影像和处理决定均有记录；
- 脚本可以复现主要处理过程；
- 报告、Excel与GeoTIFF元数据之间保持一致。

#### 2.3.7 统一运行条件

所有模型在相同脚手架中运行，获得相同的prompt、参考文件和固定版本的Python、GDAL、Rasterio、GeoPandas、QGIS命令行工具及文档处理软件。

评测分为两种运行轨道：基础轨道采用封闭环境，模型只能读取任务附件并向指定目录写入结果；开放工具轨道用于需要检索数据或调用在线服务的任务，仅允许访问预先规定的数据源和API。两类结果分别统计，不直接混合比较。

每次运行统一限制时间、计算资源和最大重试次数，并记录模型版本、提示词、工具调用、网络请求、运行日志、生成文件及成本。任务若依赖专有软件，应提供等价的公开工具，或从公开评测集中排除。

任务可以概括为：

> 在明确的职业场景中，使用一组参考文件，完成一项能够在真实工作中交付的完整任务。

### 2.4 Task Quality Control Pipeline

任务质量控制参考GDPval的多阶段审核方法[1]，由模型辅助筛查、通用审核、职业专项审核和最终审核组成。

所有任务均由目标职业领域专家创建，并在进入评测集前经过自动检查和多轮人工审核。审核发现的问题反馈给原任务作者修改，任务只有在最终审核通过后方可入库。

#### 模型辅助筛查

检查：

- 职业相关性；
- 任务复杂度；
- 输入文件是否完整；
- 交付物是否明确；
- 是否存在明显遗漏或矛盾。

模型只提供建议，不修改任务或决定是否通过。

#### 通用审核

检查任务描述是否清晰、输入是否充分、交付要求是否明确。

每位专家创建的首个任务进入沙盒。任务作者根据审核意见修改任务，审核者对修改结果进行复核，直至任务满足基本创建标准。

#### 职业专项审核

同领域专家检查：

- 任务是否具有职业代表性；
- 技术内容是否正确；
- 任务是否能够完成；
- 另一名同职业专家能否仅凭所给材料完成任务。

#### 最终审核

检查任务、参考答案和评分标准是否一致、完整且可执行。

审核者持续提出反馈，任务作者根据意见修改。任务通过最终审核后进入评测集。

任务作者负责创建和修改任务，审核者负责提出意见并决定是否通过。模型仅辅助发现问题，最终责任由人工专家承担。

#### 遥感任务质控示例

以“城市新增建设用地监测”为例：

| 阶段 | 审核内容 | 示例 |
|---|---|---|
| 任务创建 | 编写prompt，准备影像、边界、分类标准、专家成果和rubric | 利用两期影像识别新增建设用地 |
| 模型筛查 | 检查附件遗漏、要求矛盾和任务难度 | 发现未规定输出格式 |
| 通用审核 | 检查任务是否清晰、完整 | 补充坐标系和GPKG、XLSX、PDF、DOCX要求 |
| 职业审核 | 检查数据、方法和变化定义是否合理 | 明确施工用地与普通裸地的区别 |
| 最终审核 | 检查prompt、附件、参考结果和rubric是否一致 | 核验面积结果、最小制图单元及评分阈值 |
| 最终签署 | 确认任务能够稳定执行和评分 | 任务进入正式评测集 |

该流程可以概括为：

> 第一轮检查基本合规，第二轮检查职业真实性，第三轮检查可执行性和可评分性，并完成最终验收。

### 2.5 Human Expert Grading and Automated Grading

人工专家盲评是主要评价方式[1]。本方案进一步规定，每项任务由3名相同职业的专家独立评分，评分者不知道交付物由模型还是人类完成，最终以多数意见确定优于、相当于或差于专家成果的结论。

实际实施时可综合考虑成本，对任务进行分层抽样后开展3名专家独立评分。抽样应覆盖不同职业、应用场景和难度，其余任务可由1名专家评分；出现争议或属于关键任务时，再增加专家复核。抽样结果同时用于估计评分者一致性。

评分者依据任务专用Rubric比较模型与专家交付物，给出评语和整体排序，并将模型结果判定为优于、相当于或差于专家成果。不同任务的文件格式、数值精度、空间结果和专业要求均由各自的Rubric规定，不另设统一的跨任务评分维度。评分者需说明主要理由。

最终报告胜率和胜平率，并按职业、场景和难度分别汇总。正式评测前可通过试评分统一判断尺度，并报告评分者一致性。

自动grader在整体pipeline跑通后提升评估效率，可暂不考虑。后续自动grader应在专家已评分样本上校准，并报告与专家评分的一致性；职业判断、结果解释和实际可用性仍由专家评价。

## 3. Limitations

1. **职业覆盖范围有限**  
   有较多使用遥感技术、但不以遥感为主要工作内容的岗位没有覆盖。

2. **偏向内业工作**  
   任务主要是在计算机上完成的工作，不涉及测量、无人机飞行等外业操作。

3. **任务为单轮且信息较完整**  
   模型一次性获取任务说明和参考文件，未充分模拟实际任务中的需求澄清、数据补充、专家协作和多轮修改。

4. **数据与区域代表性有限**  
   遥感任务容易涉及敏感数据，且人工成本较高，可获取的数据和区域代表性受限。

5. **参考答案具有不确定性**  
   受样本、算法和专家判断等因素影响，同一任务可能存在多种方法，参考答案不一定是唯一正确结果。

6. **缺少过程评估**  
   当前主要评价最终结果，没有评价实现路径和方法优劣。

7. **数据泄漏与工具依赖风险**  
   公开影像和标准案例可能进入模型训练数据；软件版本、算力和工具可用性也可能影响结果，需要通过分组划分、运行日志和统一环境控制。

## 参考资料

1. Patwardhan et al. [GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks](https://arxiv.org/abs/2510.04374).
2. OpenAI. [GDPval公开任务数据](https://huggingface.co/datasets/openai/gdpval).
3. U.S. Bureau of Labor Statistics. [May 2025 National Occupational Employment and Wage Estimates](https://www.bls.gov/news.release/ocwage.t01.htm).
4. O\*NET OnLine. [Occupation Database](https://www.onetonline.org/).
5. Lacoste et al. [GEO-Bench: Toward Foundation Models for Earth Monitoring](https://github.com/servicenow/geo-bench).
6. Danish et al. [GEOBench-VLM: Benchmarking Vision-Language Models for Geospatial Tasks](https://openaccess.thecvf.com/content/ICCV2025/html/Danish_GEOBench-VLM_Benchmarking_Vision-Language_Models_for_Geospatial_Tasks_ICCV_2025_paper.html).
7. [ThinkGeo: Evaluating Tool-Augmented Agents for Remote Sensing Tasks](https://arxiv.org/abs/2505.23752).
8. [GISAgentBench: A Practitioner-Sourced Benchmark for Evaluating LLM Agents on GIS Tasks](https://arxiv.org/abs/2608.01645).
9. Sumbul et al. [BigEarthNet: A Large-Scale Benchmark Archive for Remote Sensing Image Understanding](https://arxiv.org/abs/1902.06148).
10. Xia et al. [DOTA: A Large-Scale Dataset for Object Detection in Aerial Images](https://openaccess.thecvf.com/content_cvpr_2018/html/Xia_DOTA_A_Large-Scale_Dataset_CVPR_2018_paper.html).
11. Wang et al. [LoveDA: A Remote Sensing Land-Cover Dataset for Domain Adaptive Semantic Segmentation](https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/hash/4e732ced3463d06de0ca9a15b6153677-Abstract-round2.html).
12. Chen and Shi. [A Spatial-Temporal Attention-Based Method and a New Dataset for Remote Sensing Image Change Detection](https://levir.buaa.edu.cn/datasets/).
13. Marsocci et al. [PANGAEA: A Global and Inclusive Benchmark for Geospatial Foundation Models](https://arxiv.org/abs/2412.04204).
14. Xiao et al. [GeoMMBench and GeoMMAgent: Toward Expert-Level Multimodal Intelligence in Geoscience and Remote Sensing](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiao_GeoMMBench_and_GeoMMAgent_Toward_Expert-Level_Multimodal_Intelligence_in_Geoscience_and_CVPR_2026_paper.pdf).
