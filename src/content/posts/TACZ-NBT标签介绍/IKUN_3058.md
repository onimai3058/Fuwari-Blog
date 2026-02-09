---
title: TACZ(永恒枪械工坊)枪械NBT标签介绍
published: 2025-12-05
description: '通过NBT标签在TACZ中如何获取超越常规、突破限制的特殊枪械'
image: ''
tags: [MC-MOD]
category: 'MC'
draft: false 
lang: ''
---

## 如何获取物品ID

使用F3+H打开的高级显示框后，显示的ID还需要NBT标签，所以使用这条指令：

```
/data get entity @s SelectedItem
```
获取手中物品ID

格洛克17大概是这样的：![P1](./img/P1.png)

同理，使用这条指令也可以获取配件的ID，便与后文给枪械加上想要的配件

## 枪械标签GunId

该标签用于决定用指令获得的枪械是哪种类型的

tacz:modern_kinetic_gun是枪械ID，获取的时候需要附加上NBT标签

参考这样的格式（没有附加发射模式，不能直接使用）

/give @s tacz:modern_kinetic_gun{GunId:"枪械型号"}

例如：获得一把格洛克17（没有附加发射模式，不能直接使用）

```
/give @s tacz:modern_kinetic_gun{GunId:"tacz:glock_17"}
```

## 枪械发射模式标签GunFireMode

该标签用于控制枪械的发射模式，一共有3种模式：AUTO(自动)、SEMI(单发)

任何枪械都可以设置任意发射模式

例如：获取一把连发格洛克17

```
/give @s tacz:modern_kinetic_gun{GunId:"tacz:glock_17",GunFireMode:"AUTO"}
```

## 枪械子弹标签GunCurrentAmmoCount

该标签用于设置获得的枪械的子弹数量

任何枪械都可以设置任意子弹数量，最高2147483647

例如：获取一把子弹数量为2147483647连发模式的格洛克17

```
/give @s tacz:modern_kinetic_gun{GunId:"tacz:glock_17",GunCurrentAmmoCount:2147483647,GunFireMode:"AUTO"}
```

## 枪械配件

握把：AttachmentGRIP

枪口组件：AttachmentMUZZLE

瞄具：AttachmentSCOPE

枪托：AttachmentSTOCK

例如：获取一把子弹数量为2147483647开连发模式装上“斯坦纳德5-10x光学瞄具”的格洛克17

```
/give @s tacz:modern_kinetic_gun{GunId:"tacz:glock_17",GunCurrentAmmoCount:2147483647,GunFireMode:"AUTO",AttachmentSCOPE:{id:"tacz:attachment",Count:1b,tag:{AttachmentId:"tacz:scope_standard_8x"}}}
```

![P2](./img/P2.png)

有点滑稽

## 使用命令方块给予

使用命令方块就很简单了，首先给自己一组命令方块：

```
/give @s command_block 64
```

当使用命令方块时就有给予对象：

@a：所有玩家

@e：所有实体

@p：距离最近的玩家

@r：随机玩家

@s：当前实体（当使用命令方块时，会以System的形式运行所以@s不可用）

然后像在对话框中输入命令那样去完成命令方块就好了
