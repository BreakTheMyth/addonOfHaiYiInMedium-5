# 写个未来的自己的使用说明

## 简述

1. 该项目为Firefox扩展，仅支持 **Firefox** ，不支持以 **Chromium** 为内核的浏览器

2. 此扩展替换了 **网页的背景图** 和 **新标签页** ，极大的延缓了 **网页的加载速度**

3. 此扩展设计十分 **阴间** ，用不惯不要来受罪

4. 此扩展暂不兼容 **Firefox移动端** 

## 安装

在 [Firefox 附加组件](https://addons.mozilla.org/zh-CN/firefox/addon/addonofhaiyiinmedium-5/) 安装

## 使用

* **新标签耶** 中按 `Shift + E` 在弹出的文本域中编辑自定义 **快捷链接** 
  
  * 使用 **JSON** 格式手动 *添加* 、 *删除* 、 *修改* **快捷链接** 的 *标题*  、 *图标* 、 *网址*
    
    ```json
    {
        "title": "示例",
        "children": [
            {
                "title": "快捷链接标题，选填",
                "iconUri": "快捷链接图标地址，选填，缺省后由默认图标代替",
                "uri": "快捷链接网址，必填"
            },
            {
                "title": "example",
                "iconUri": "https://www.example.com/favicon.ico",
                "uri": "https://www.example.com/"
            }
        ]
    }
    ```
  
  * 也可以导入 **Firefox收藏夹的备份** 
    
    * 按 `Ctrl + Shift + O` 打开 **我的足迹**  > **导入和备份** > **备份** > 选择一个位置 **保存** 
    
    * 在 **资源管理器** 中找到刚刚保存的 **bookmarks-\*-\*-\*.json** 文件，使用 **文本编辑器** （[Visual Studio Code](https://code.visualstudio.com/)等）打开并编辑
      
      * 按 `Shift + Alt + F` **格式化文档** 
      
      * 删除不需要导入的 **快捷链接** ，例如：
        
        ```json
        {
            "guid": "sRrs11tRn2Sf",
            "title": "新手上路",
            "index": 0,
            "dateAdded": 1702568267980000,
            "lastModified": 1702568910000000,
            "id": 148,
            "typeCode": 1,
            "type": "text/x-moz-place",
            "uri": "https://www.mozilla.org/zh-CN/firefox/central/"
        },
        {
            "guid": "fpoLwIOSEzdP",
            "title": "Getting Started",
            "index": 1,
            "dateAdded": 1702481968513000,
            "lastModified": 1702568910000000,
            "id": 12,
            "typeCode": 1,
            "iconUri": "fake-favicon-uri:https://www.mozilla.org/firefox/?utm_medium=firefox-desktop&utm_source=bookmarks-toolbar&utm_campaign=new-users&utm_content=-global",
            "type": "text/x-moz-place",
            "uri": "https://www.mozilla.org/firefox/?utm_medium=firefox-desktop&utm_source=bookmarks-toolbar&utm_campaign=new-users&utm_content=-global"
        },
        {
            "guid": "DuVJjW1dQvmp",
            "title": "参与进来",
            "index": 2,
            "dateAdded": 1702480126107000,
            "lastModified": 1702568910000000,
            "id": 137,
            "typeCode": 1,
            "type": "text/x-moz-place",
            "uri": "https://www.mozilla.org/contribute/?utm_medium=firefox-desktop&utm_source=bookmarks-toolbar&utm_campaign=new-users-nightly&utm_content=-global"
        },
        {
            "guid": "qV-s5Q8pXeYY",
            "title": "新手上路",
            "index": 3,
            "dateAdded": 1694618381586000,
            "lastModified": 1702568910000000,
            "id": 138,
            "typeCode": 1,
            "iconUri": "fake-favicon-uri:https://www.mozilla.org/firefox/?utm_medium=firefox-desktop&utm_source=bookmarks-toolbar&utm_campaign=new-users&utm_content=-global",
            "type": "text/x-moz-place",
            "uri": "https://www.mozilla.org/firefox/?utm_medium=firefox-desktop&utm_source=bookmarks-toolbar&utm_campaign=new-users&utm_content=-global"
        }
        ```
      
      * 补充：
        
        * **有"uri"属性的对象** 才会被识别为快捷链接
        
        * **有"children"属性的数组** 会被识别为文件夹
    
    * 完成编辑后将内容复制到 **新标签耶的文本域** 中

* **新标签耶** 中按 `Shift + Enter` 完成编辑

## 关于搜索框

- **没有搜索框** ，firefox默认的搜索框很好用，多用用，快捷键： `Ctrl + K`
