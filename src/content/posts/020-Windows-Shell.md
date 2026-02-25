---
title: Windows常用命令清单
published: 2026-02-14
description: '020-涵盖：文件管理、系统操作、高级操作、软件管理、网络、服务、用户、磁盘、常用工具'
image: ''
tags: ["Windows 11","Windows 10"]
category: 'Windows'
draft: false 
lang: ''
---
## 一、文件目录管理
| 命令 | 作用 |
|------|------|
| `dir` | 列出当前目录文件 |
| `dir /a` | 显示所有文件（含隐藏） |
| `dir /s` | 递归显示子目录文件 |
| `cd` | 显示当前路径 |
| `cd 目录名` | 进入目录 |
| `cd..` | 返回上一级 |
| `cd \` | 返回根目录 |
| `md 文件夹名` | 创建文件夹 |
| `mkdir 文件夹名` | 创建文件夹 |
| `rd 文件夹名` | 删除空文件夹 |
| `rd /s /q 文件夹名` | 强制删除文件夹及内容 |
| `copy 源 目标` | 复制文件 |
| `xcopy 源 目标 /e /h` | 复制目录（含子目录、隐藏文件） |
| `move 源 目标` | 移动/重命名文件 |
| `del 文件名` | 删除文件 |
| `del /f /s /q *` | 强制删除当前目录所有文件 |
| `type 文件名` | 查看文本文件内容 |
| `ren 旧名 新名` | 文件重命名 |
| `tree` | 树形显示目录结构 |
| `tree /f` | 显示文件+目录树 |
| `fc 文件1 文件2` | 对比两个文件内容 |

## 二、系统信息与基础操作
| 命令 | 作用 |
|------|------|
| `ver` | 查看系统版本 |
| `systeminfo` | 详细系统信息 |
| `hostname` | 查看计算机名 |
| `time` | 查看/设置系统时间 |
| `date` | 查看/设置系统日期 |
| `cls` | 清屏 |
| `shutdown /s /t 0` | 立即关机 |
| `shutdown /r /t 0` | 立即重启 |
| `shutdown /l` | 注销 |
| `shutdown /a` | 取消关机/重启 |
| `logoff` | 注销 |
| `taskmgr` | 任务管理器 |
| `msconfig` | 系统配置 |
| `regedit` | 注册表 |
| `gpedit.msc` | 组策略编辑器 |
| `control` | 控制面板 |
| `services.msc` | 服务管理器 |
| `ncpa.cpl` | 网络连接 |
| `compmgmt.msc` | 计算机管理 |
| `diskmgmt.msc` | 磁盘管理 |
| `eventvwr` | 事件查看器 |
| `winver` | 查看Windows版本 |

## 三、进程与任务管理
| 命令 | 作用 |
|------|------|
| `tasklist` | 列出所有进程 |
| `tasklist | findstr 关键字` | 查找进程 |
| `taskkill /f /im 进程名` | 强制结束进程 |
| `taskkill /f /pid PID` | 按PID结束进程 |
| `start 程序名` | 启动程序 |
| `start /max 程序` | 最大化启动 |
| `start /min 程序` | 最小化启动 |

## 四、网络常用命令
| 命令 | 作用 |
|------|------|
| `ipconfig` | 查看IP地址 |
| `ipconfig /all` | 详细网络信息 |
| `ipconfig /flushdns` | 刷新DNS缓存 |
| `ping IP/域名` | 测试网络连通 |
| `ping -t IP` | 持续ping |
| `tracert IP/域名` | 路由追踪 |
| `nslookup 域名` | 查询域名解析 |
| `netstat -ano` | 查看所有端口占用 |
| `netstat -ano | findstr 端口` | 查找指定端口占用 |
| `arp -a` | 查看ARP缓存表 |
| `getmac` | 查看MAC地址 |

## 五、用户与账户管理
| 命令 | 作用 |
|------|------|
| `net user` | 查看所有用户 |
| `net user 用户名 密码` | 修改用户密码 |
| `net user 用户名 /add` | 创建用户 |
| `net user 用户名 /del` | 删除用户 |
| `net localgroup administrators 用户名 /add` | 添加到管理员组 |
| `net localgroup administrators 用户名 /del` | 移出管理员组 |

## 六、服务管理
| 命令 | 作用 |
|------|------|
| `net start` | 查看已启动服务 |
| `net start 服务名` | 启动服务 |
| `net stop 服务名` | 停止服务 |
| `sc query` | 列出所有服务状态 |
| `sc query 服务名` | 查询服务状态 |
| `sc config 服务名 start= auto` | 设置服务自动启动 |
| `sc config 服务名 start= demand` | 设置服务手动启动 |
| `sc config 服务名 start= disabled` | 禁用服务 |

## 七、共享与网络资源
| 命令 | 作用 |
|------|------|
| `net share` | 查看本机共享 |
| `net share 共享名=路径` | 创建共享 |
| `net share 共享名 /del` | 删除共享 |
| `net use` | 查看网络映射 |
| `net use Z: \\IP\共享` | 映射网络共享到Z盘 |
| `net use Z: /del` | 删除映射 |

## 八、磁盘与系统修复
| 命令 | 作用 |
|------|------|
| `chkdsk` | 检查磁盘错误 |
| `chkdsk C: /f` | 修复C盘文件系统错误 |
| `sfc /scannow` | 扫描并修复系统文件 |
| `dism /online /cleanup-image /restorehealth` | 修复系统映像 |
| `format 盘符:` | 格式化磁盘 |
| `defrag 盘符:` | 磁盘碎片整理 |

## 九、PowerShell 常用命令
| 命令 | 作用 |
|------|------|
| `Get-ChildItem` | 列出文件 |
| `Remove-Item 文件` | 删除文件/文件夹 |
| `Copy-Item 源 目标 -Recurse` | 复制目录 |
| `Get-Process` | 查看进程 |
| `Stop-Process -Name 进程名 -Force` | 结束进程 |
| `Get-Service` | 查看服务 |
| `Restart-Service 服务名` | 重启服务 |
| `Test-Connection 域名` | ping |
| `Get-NetIPAddress` | 查看IP |
| `Clear-DnsClientCache` | 刷新DNS |

## 十、winget 软件包管理
| 命令 | 作用 |
|------|------|
| `winget search 软件名` | 搜索软件 |
| `winget install 软件名` | 安装软件 |
| `winget uninstall 软件名` | 卸载软件 |
| `winget upgrade` | 查看可更新软件 |
| `winget upgrade --all` | 更新所有软件 |
| `winget list` | 列出已安装软件 |

## 十一、Windows 常用小工具
| 命令 | 作用 |
|------|------|
| `notepad` | 记事本 |
| `calc` | 计算器 |
| `mspaint` | 画图 |
| `mstsc` | 远程桌面 |
| `dxdiag` | DirectX诊断工具 |
| `cleanmgr` | 磁盘清理 |
| `resmon` | 资源监视器 |