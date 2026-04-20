# 时间胶囊 - Time Capsule Web

## Concept & Vision

一个充满仪式感的时间胶囊网页，让用户可以封存当下的思绪与情感，在遥远的未来重新打开。整体视觉采用深邃的星空感与温暖的金色光芒，营造"时光沉睡"的神秘氛围。页面动效模拟时间沙漏与星辰流转，传达时间流逝的诗意感受。

## Design Language

**Aesthetic Direction**: 深空星夜风格 - 深邃的紫蓝渐变背景中漂浮着微光粒子，如同宇宙中沉睡的星辰。暖金色作为点缀色，象征希望与记忆的光芒。

**Color Palette**:
- Primary Background: #0a0a1a (深空黑)
- Secondary Background: #1a1a3a (星夜蓝)
- Accent Gold: #d4af37 (时光金)
- Accent Warm: #f5a623 (暖光橙)
- Text Primary: #e8e8f0 (月光白)
- Text Secondary: #8888aa (星光灰)
- Capsule Glow: #7b68ee (胶囊紫)

**Typography**:
- 标题: "Ma Shan Zheng" (马上正楷), cursive fallback
- 正文: "Noto Sans SC", system-ui, sans-serif
- 数字/时间: "Orbitron", monospace

**Spatial System**:
- 基础单位: 8px
- 主要间距: 24px, 32px, 48px
- 圆角: 16px (卡片), 50% (按钮/胶囊)

**Motion Philosophy**:
- 背景粒子缓慢漂浮 (20-40s 周期) - 模拟时间静止感
- 胶囊打开动画 - 光芒绽放 + 文字浮现 (1.5s)
- 沙漏倒计时视觉 - 渐进式光效递减
- 所有过渡使用 cubic-bezier(0.4, 0, 0.2, 1)

**Visual Assets**:
- 粒子背景 (CSS/Canvas 实现)
- 沙漏图标 (内联 SVG)
- 胶囊/星星装饰 (CSS shapes)
- 发光边框效果 (box-shadow + gradient)

## Layout & Structure

**页面结构**:
1. **Hero 区域** - 全屏星空背景，中央标题"时间胶囊"，副标题"封存此刻，穿越未来"
2. **胶囊编辑区** - 浮动的毛玻璃卡片，包含：
   - 标题输入
   - 富文本内容编辑
   - 时间选择器 (2小时/一天/一个月/1年/5年/10年)
   - 保存/封存按钮
3. **已封存胶囊展示区** - 封存后的胶囊以 3D 卡片旋转展示，显示倒计时

**响应式策略**:
- Desktop (>768px): 居中双栏或单栏大卡片
- Mobile (<768px): 单栏堆叠，全屏编辑体验

## Features & Interactions

**核心功能**:

1. **撰写胶囊**
   - 标题输入 (必填，最多50字)
   - 内容编辑 (支持多行，最大5000字)
   - 自动保存草稿到 localStorage

2. **选择解锁时间**
   - 2小时 (体验版) - 蓝色标签
   - 1天 - 绿色标签
   - 1个月 - 橙色标签
   - 1年 - 紫色标签
   - 5年 - 深红标签
   - 10年 - 金色标签

3. **封存操作**
   - 点击"封存"后，胶囊进入倒计时状态
   - 封存时生成唯一胶囊ID
   - 显示精美的倒计时界面

4. **解锁查看**
   - 时间到达后，胶囊发光提示"可打开"
   - 点击展开胶囊，内容以动画形式呈现
   - 解锁后可选择"重新封存"或"删除"

**状态定义**:
- `draft` - 草稿状态，可编辑
- `sealed` - 已封存，等待解锁
- `unlocked` - 已解锁，可查看内容

**边界情况**:
- 草稿自动保存，无需确认
- 封存前验证标题和内容不为空
- 时间胶囊使用本地时间计算
- localStorage 存储所有胶囊数据

## Component Inventory

1. **星空背景** - 粒子漂浮动画，深色渐变
2. **标题组件** - 大号书法字体，金色光晕
3. **输入卡片** - 毛玻璃效果，边框发光
4. **时间选择按钮组** - 胶囊形状，选中时发光
5. **保存/封存按钮** - 渐变背景，悬停放大
6. **胶囊卡片(已封存)** - 3D翻转效果，显示倒计时
7. **倒计时显示** - 数字动画，渐进式光效
8. **解锁动画** - 光芒绽放，文字打字机效果

## Technical Approach

- **框架**: 纯 HTML5 + CSS3 + Vanilla JavaScript
- **存储**: localStorage (胶囊数据 JSON 序列化)
- **时间处理**: Date 对象 + setInterval 倒计时更新
- **动画**: CSS Keyframes + requestAnimationFrame
- **单文件**: 所有代码整合到一个 HTML 文件中
