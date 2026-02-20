import os
import sys
from PIL import Image

def compress_png_images_recursive(root_directory, quality=85, optimize=True):
    """
    递归压缩指定根目录下所有子文件夹中的PNG图片（如img/001/P1.png）
    保持原文件名、原路径不变，无需修改Markdown中的图片链接
    
    Args:
        root_directory (str): 根目录（比如存放所有img子文件夹的目录）
        quality (int): PNG压缩质量（1-95）
        optimize (bool): 是否启用PNG优化
    """
    # 检查根目录是否存在
    if not os.path.isdir(root_directory):
        print(f"❌ 错误：根目录 {root_directory} 不存在！")
        return

    # 统计变量
    processed_count = 0
    total_original_size = 0
    total_compressed_size = 0

    # 递归遍历所有子目录和文件
    for root, dirs, files in os.walk(root_directory):
        for filename in files:
            # 只处理PNG文件
            if not filename.lower().endswith('.png'):
                continue
            
            # 拼接完整文件路径（如 img/001/P1.png）
            file_path = os.path.join(root, filename)
            
            try:
                # 获取原始文件大小
                original_size = os.path.getsize(file_path)
                total_original_size += original_size

                # 打开并压缩PNG图片（直接覆盖原文件，路径/名称不变）
                with Image.open(file_path) as img:
                    img.save(
                        file_path,
                        format='PNG',
                        quality=quality,
                        optimize=optimize,
                        compress_level=9  # PNG最高压缩级别
                    )

                # 获取压缩后的文件大小
                compressed_size = os.path.getsize(file_path)
                total_compressed_size += compressed_size
                
                # 计算压缩率
                compression_ratio = (1 - compressed_size / original_size) * 100
                
                # 输出压缩信息（显示相对路径，更清晰）
                relative_path = os.path.relpath(file_path, root_directory)
                print(f"✅ 已压缩：{relative_path}")
                print(f"   原大小：{original_size/1024:.2f} KB → 压缩后：{compressed_size/1024:.2f} KB")
                print(f"   压缩率：{compression_ratio:.2f}%\n")
                
                processed_count += 1

            except Exception as e:
                relative_path = os.path.relpath(file_path, root_directory)
                print(f"❌ 处理 {relative_path} 失败：{str(e)}\n")

    # 输出汇总信息
    print("="*60)
    print(f"📊 递归压缩完成！共处理 {processed_count} 个PNG文件")
    if processed_count > 0:
        total_ratio = (1 - total_compressed_size / total_original_size) * 100
        print(f"📈 总原始体积：{total_original_size/1024:.2f} KB")
        print(f"📉 总压缩体积：{total_compressed_size/1024:.2f} KB")
        print(f"🎯 整体压缩率：{total_ratio:.2f}%")

if __name__ == "__main__":
    # 方式1：命令行传参指定根目录（比如存放img文件夹的目录）
    if len(sys.argv) > 1:
        root_dir = sys.argv[1]
    # 方式2：默认使用当前目录（脚本所在目录）
    else:
        root_dir = os.getcwd()
        print(f"ℹ️  未指定目录，处理当前目录：{root_dir}\n")
    
    # 执行递归压缩（quality=85适配博客场景）
    compress_png_images_recursive(root_dir, quality=85)
    
    # ========== 关键新增：让窗口停留 ==========
    print("\n" + "="*60)
    print("✅ 所有操作完成！按回车键关闭窗口...")
    # 等待用户输入（按回车才会关闭）
    input()