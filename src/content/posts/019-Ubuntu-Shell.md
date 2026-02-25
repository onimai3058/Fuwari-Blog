---
title: Ubuntu常用命令清单
published: 2026-02-10
description: '019-本文整理了 Ubuntu 系统中最常用的指令，涵盖文件管理、系统操作、高级操作、APT 包管理及常用软件包，适用于新手学习和日常查阅。'
image: ''
tags: [Ubuntu]
category: 'Linux'
draft: false 
lang: ''
---
## 一、文件管理类指令
### 1. 基础导航与查看
| 指令 | 作用 |
|------|------|
| `pwd` | 显示当前工作目录的绝对路径 |
| `ls` | 列出当前目录下的文件/文件夹 |
| `ls -l` | 以详细列表形式显示（包含权限、大小、修改时间等） |
| `ls -a` | 显示所有文件（包括隐藏文件，以 `.` 开头） |
| `ls -lh` | 人性化显示文件大小（KB/MB/GB） |
| `cd 目录路径` | 切换工作目录（如 `cd /home`、`cd ..` 回上级目录） |
| `cd ~` | 切换到当前用户的主目录 |
| `cd -` | 切换到上一次的工作目录 |
| `tree` | 以树形结构显示目录（需先安装：`sudo apt install tree`） |

### 2. 文件/文件夹操作
| 指令 | 作用 |
|------|------|
| `mkdir 目录名` | 创建空目录（如 `mkdir test`） |
| `mkdir -p dir1/dir2/dir3` | 递归创建多级目录 |
| `touch 文件名` | 创建空文件（如 `touch test.txt`） |
| `cp 源文件 目标路径` | 复制文件（如 `cp test.txt /home/user/`） |
| `cp -r 源目录 目标路径` | 递归复制目录（含子文件/目录） |
| `mv 源文件 目标路径` | 移动/重命名文件（如 `mv test.txt new.txt` 为重命名） |
| `rm 文件名` | 删除文件（直接删除，无确认） |
| `rm -i 文件名` | 删除前确认（推荐） |
| `rm -r 目录名` | 递归删除目录（含所有内容） |
| `rm -rf 目录名` | 强制递归删除（无确认，慎用！） |
| `cat 文件名` | 查看文件全部内容（适合小文件） |
| `more 文件名` | 分页查看大文件（按空格翻页，q 退出） |
| `less 文件名` | 更灵活的分页查看（支持上下键、搜索） |
| `head -n 10 文件名` | 查看文件前 10 行（默认前 10 行） |
| `tail -n 10 文件名` | 查看文件后 10 行（默认后 10 行） |
| `tail -f 文件名` | 实时监控文件内容（常用于日志） |
| `ln -s 源文件 软链接名` | 创建软链接（快捷方式） |
| `ln 源文件 硬链接名` | 创建硬链接 |
| `chmod 755 文件名` | 修改文件权限（755：所有者读写执行，其他读执行） |
| `chown user:group 文件名` | 修改文件所属用户和组 |

### 3. 文件搜索与筛选
| 指令 | 作用 |
|------|------|
| `find 搜索路径 -name 文件名` | 按名称搜索文件（如 `find / -name test.txt`） |
| `find / -size +100M` | 搜索大于 100MB 的文件 |
| `grep "关键词" 文件名` | 在文件中搜索关键词 |
| `grep -r "关键词" 目录` | 递归搜索目录下所有文件的关键词 |
| `sort 文件名` | 对文件内容排序 |
| `wc -l 文件名` | 统计文件行数 |

## 二、系统操作指令
### 1. 系统信息查看
| 指令 | 作用 |
|------|------|
| `uname -a` | 查看内核版本、系统架构等信息 |
| `cat /etc/os-release` | 查看 Ubuntu 版本信息 |
| `hostname` | 查看主机名 |
| `hostnamectl set-hostname 新主机名` | 修改主机名 |
| `date` | 查看当前系统时间 |
| `timedatectl` | 查看/设置系统时区（如 `timedatectl set-timezone Asia/Shanghai`） |
| `df -h` | 查看磁盘空间使用情况（人性化显示） |
| `du -sh 目录名` | 查看目录总大小（人性化显示） |
| `free -h` | 查看内存使用情况（人性化显示） |
| `top` | 实时监控系统进程、CPU、内存占用（按 q 退出） |
| `htop` | 更友好的系统监控工具（需安装：`sudo apt install htop`） |
| `lscpu` | 查看 CPU 信息 |
| `lsmem` | 查看内存信息 |
| `lsblk` | 查看磁盘分区信息 |
| `ip addr` | 查看网络接口和 IP 地址 |
| `ifconfig` | 查看/配置网络（需安装 net-tools：`sudo apt install net-tools`） |
| `ping 域名/IP` | 测试网络连通性（按 Ctrl+C 停止） |
| `netstat -tulpn` | 查看端口占用情况（需安装 net-tools） |
| `ss -tulpn` | 替代 netstat 的端口查看指令（系统自带） |

### 2. 用户与权限管理
| 指令 | 作用 |
|------|------|
| `whoami` | 查看当前登录用户 |
| `who` | 查看所有登录用户 |
| `useradd 用户名` | 创建新用户 |
| `useradd -m -s /bin/bash 用户名` | 创建用户并生成主目录、指定 shell |
| `userdel 用户名` | 删除用户（仅删除账号，保留主目录） |
| `userdel -r 用户名` | 删除用户并删除主目录 |
| `passwd 用户名` | 修改用户密码（无用户名则修改当前用户） |
| `usermod -aG sudo 用户名` | 将用户添加到 sudo 组（赋予管理员权限） |
| `su 用户名` | 切换到指定用户（需输入目标用户密码） |
| `su - 用户名` | 切换用户并加载其环境变量 |
| `sudo 指令` | 以管理员权限执行指令（当前用户需在 sudo 组） |
| `sudo -i` | 切换到 root 用户（管理员） |
| `groups 用户名` | 查看用户所属组 |
| `groupadd 组名` | 创建用户组 |
| `groupdel 组名` | 删除用户组 |

### 3. 进程管理
| 指令 | 作用 |
|------|------|
| `ps aux` | 查看所有进程（详细信息） |
| `ps -ef` | 查看进程树结构 |
| `pkill 进程名` | 按名称杀死进程 |
| `kill 进程ID` | 杀死指定 PID 的进程（如 `kill 1234`） |
| `kill -9 进程ID` | 强制杀死进程（无法拦截） |
| `nohup 指令 &` | 后台执行指令，断开终端不终止 |
| `jobs` | 查看后台运行的进程 |
| `fg %任务号` | 将后台进程调至前台 |
| `bg %任务号` | 将暂停的后台进程继续运行 |

### 4. 系统开关机与服务
| 指令 | 作用 |
|------|------|
| `sudo reboot` | 重启系统 |
| `sudo shutdown -h now` | 立即关机 |
| `sudo shutdown -h 20:00` | 定时关机（20:00） |
| `sudo shutdown -c` | 取消定时关机 |
| `systemctl status 服务名` | 查看服务状态（如 `systemctl status sshd`） |
| `systemctl start 服务名` | 启动服务 |
| `systemctl stop 服务名` | 停止服务 |
| `systemctl restart 服务名` | 重启服务 |
| `systemctl enable 服务名` | 设置服务开机自启 |
| `systemctl disable 服务名` | 关闭服务开机自启 |
| `systemctl list-unit-files --type=service` | 查看所有服务的自启状态 |

## 三、高级操作指令
### 1. 压缩与解压
| 指令 | 作用 |
|------|------|
| `tar -cvf 压缩包.tar 目录/文件` | 打包为 tar 文件（仅打包，不压缩） |
| `tar -xvf 压缩包.tar` | 解压 tar 文件 |
| `tar -zcvf 压缩包.tar.gz 目录/文件` | 打包并压缩为 gz 格式 |
| `tar -zxvf 压缩包.tar.gz` | 解压 gz 格式压缩包 |
| `tar -jcvf 压缩包.tar.bz2 目录/文件` | 打包并压缩为 bz2 格式 |
| `tar -jxvf 压缩包.tar.bz2` | 解压 bz2 格式压缩包 |
| `unzip 压缩包.zip` | 解压 zip 文件（需安装 unzip：`sudo apt install unzip`） |
| `zip 压缩包.zip 目录/文件` | 压缩为 zip 文件（需安装 zip：`sudo apt install zip`） |
| `7z x 压缩包.7z` | 解压 7z 文件（需安装 p7zip-full：`sudo apt install p7zip-full`） |

### 2. 网络操作
| 指令 | 作用 |
|------|------|
| `wget 下载链接` | 下载文件（如 `wget https://example.com/file.tar.gz`） |
| `wget -c 下载链接` | 断点续传下载 |
| `curl 网址` | 访问网址并输出内容（常用于接口测试） |
| `curl -O 下载链接` | 下载文件（替代 wget） |
| `scp 本地文件 用户名@远程IP:目标路径` | 本地文件上传到远程服务器 |
| `scp 用户名@远程IP:远程文件 本地路径` | 从远程服务器下载文件 |
| `ssh 用户名@远程IP` | 远程登录服务器 |
| `ssh -p 端口号 用户名@远程IP` | 指定端口登录远程服务器 |
| `rsync -av 源目录 目标目录` | 同步文件/目录（增量同步，比 cp 更高效） |

### 3. 磁盘与分区
| 指令 | 作用 |
|------|------|
| `fdisk -l` | 查看磁盘分区表（需 sudo 权限） |
| `mkfs.ext4 /dev/sda1` | 格式化分区为 ext4 格式（慎用！会清空数据） |
| `mount /dev/sda1 /mnt` | 挂载分区到 /mnt 目录 |
| `umount /mnt` | 卸载挂载的分区 |
| `dd if=/dev/zero of=/test.img bs=1G count=1` | 创建 1GB 的空文件（可用于测试） |
| `sync` | 同步内存数据到磁盘（避免数据丢失） |

### 4. 日志与系统排查
| 指令 | 作用 |
|------|------|
| `cat /var/log/syslog` | 查看系统日志 |
| `cat /var/log/auth.log` | 查看用户认证日志（登录/权限相关） |
| `dmesg` | 查看内核启动日志（硬件相关） |
| `journalctl` | 查看 systemd 日志（系统服务相关） |
| `journalctl -u 服务名` | 查看指定服务的日志 |
| `dmesg | grep error` | 筛选日志中的错误信息 |

## 四、APT 常用命令（包管理）
APT（Advanced Package Tool）是 Ubuntu 核心的包管理工具，以下是最常用指令：

### 1. 基础操作
| 指令 | 作用 |
|------|------|
| `sudo apt update` | 更新软件源列表（获取最新包信息） |
| `sudo apt upgrade` | 升级所有已安装的软件包（保留配置文件） |
| `sudo apt full-upgrade` | 升级软件包，必要时移除冲突包（更彻底） |
| `sudo apt install 包名` | 安装指定软件包（如 `sudo apt install nginx`） |
| `sudo apt install 包名=版本号` | 安装指定版本的软件包 |
| `sudo apt remove 包名` | 卸载软件包（保留配置文件） |
| `sudo apt purge 包名` | 彻底卸载软件包（删除配置文件） |
| `sudo apt autoremove` | 自动卸载无用的依赖包（清理空间） |
| `sudo apt clean` | 清理下载的软件包缓存（/var/cache/apt/archives） |
| `sudo apt autoclean` | 清理过期的软件包缓存（保留最新版本） |

### 2. 包信息查询
| 指令 | 作用 |
|------|------|
| `apt search 关键词` | 搜索软件包（如 `apt search python3`） |
| `apt show 包名` | 查看软件包详细信息（版本、依赖、描述等） |
| `dpkg -l` | 列出所有已安装的软件包 |
| `dpkg -l | grep 关键词` | 筛选已安装的指定包 |
| `dpkg -S 文件名` | 查看文件所属的软件包（如 `dpkg -S /bin/ls`） |
| `dpkg -L 包名` | 查看软件包安装的所有文件路径 |

### 3. 源管理
| 指令 | 作用 |
|------|------|
| `sudo nano /etc/apt/sources.list` | 编辑软件源列表（新手推荐用 nano 编辑器） |
| `sudo apt-add-repository ppa:源地址` | 添加 PPA 源（第三方软件源） |
| `sudo apt-add-repository --remove ppa:源地址` | 删除 PPA 源 |
| `sudo apt update` | 添加/删除源后必须执行，更新源列表 |

## 五、Ubuntu 常用软件包及作用
以下是 Ubuntu 系统中最常用的软件包，涵盖基础工具、开发、网络、系统管理等场景：

### 1. 基础工具类
| 包名 | 作用 |
|------|------|
| `net-tools` | 包含 ifconfig、netstat 等经典网络工具 |
| `iproute2` | 包含 ip、ss 等新一代网络工具（系统默认安装） |
| `tree` | 树形显示目录结构 |
| `htop` | 替代 top 的系统监控工具（更友好） |
| `iotop` | 监控磁盘 I/O 占用情况 |
| `ncdu` | 交互式查看磁盘空间使用（比 du 更直观） |
| `unzip/zip` | 处理 zip 压缩包 |
| `p7zip-full` | 处理 7z 压缩包 |
| `curl/wget` | 命令行下载工具、接口测试工具 |
| `nano/vim` | 命令行文本编辑器（nano 简单，vim 功能强） |
| `git` | 版本控制工具（开发必备） |
| `rsync` | 高效的文件同步工具 |

### 2. 开发类
| 包名 | 作用 |
|------|------|
| `python3/python3-pip` | Python3 解释器及包管理工具 |
| `python2/python2-pip` | Python2 解释器（部分老项目需要） |
| `openjdk-17-jdk` | Java 17 开发工具包（LTS 版本） |
| `nodejs/npm` | Node.js 运行时及包管理工具 |
| `gcc/g++` | C/C++ 编译器 |
| `make` | 编译构建工具（配合 gcc 使用） |
| `cmake` | 跨平台构建工具（大型项目常用） |
| `golang` | Go 语言编译器 |
| `php` | PHP 解释器（Web 开发） |
| `mysql-server` | MySQL 数据库服务端 |
| `postgresql` | PostgreSQL 数据库（开源企业级） |
| `redis-server` | Redis 内存数据库（缓存/消息队列） |

### 3. 网络服务类
| 包名 | 作用 |
|------|------|
| `nginx` | 高性能 Web 服务器/反向代理 |
| `apache2` | 经典 Web 服务器 |
| `ssh` | SSH 服务（远程登录） |
| `ufw` | 简易防火墙（系统默认安装） |
| `fail2ban` | 防止暴力破解 SSH 的工具 |
| `docker.io` | Docker 容器引擎（虚拟化） |
| `docker-compose` | Docker 容器编排工具 |
| `traceroute` | 追踪网络数据包路由路径 |
| `nmap` | 网络扫描工具（端口/主机探测） |

### 4. 系统管理类
| 包名 | 作用 |
|------|------|
| `aptitude` | 高级 APT 包管理工具（解决依赖冲突） |
| `htop` | 系统进程监控 |
| `lm-sensors` | 监控硬件温度（CPU/主板等） |
| `acpi` | 查看电池状态/硬件信息 |
| `logrotate` | 自动轮转系统日志（防止日志过大） |
| `cron` | 定时任务工具（系统默认安装） |
| `rsyslog` | 系统日志管理工具（默认安装） |
| `parted` | 磁盘分区管理工具 |
| `gparted` | 图形化磁盘分区工具 |

### 5. 多媒体/桌面工具类
| 包名 | 作用 |
|------|------|
| `ffmpeg` | 音视频处理工具（转码、剪辑） |
| `vlc` | 万能媒体播放器 |
| `gimp` | 开源图片编辑工具（替代 Photoshop） |
| `libreoffice` | 开源办公套件（替代 Office） |
| `chrome-browser` | Google Chrome 浏览器（需添加 PPA） |
| `firefox` | Firefox 浏览器（系统默认安装） |