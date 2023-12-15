window.onload = function () {
    let divArray = document.getElementById("divArray");

    let editBox = document.createElement("textarea");
    editBox.className = "editBox";

    var title = document.createElement("div");
    title.className = "title";
    document.body.appendChild(title);

    var previewFrame = document.createElement("iframe");
    previewFrame.className = "previewFrame";
    document.body.appendChild(previewFrame);
    previewFrame.src = "about:blank";
    previewFrame.sandbox = "allow-same-origin"

    let divArrayY = 0;
    let devX = -50;

    var obj = JSON.parse(localStorage.getItem("links"));
    if (obj === null) {
        obj = {
            title: "示例",
            description: "有作用的字段: title (标题, 可缺省, 但不建议), iconUri (图标, 可缺省), uri (网址, 必填)",
            children: [
                {
                    "title": "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
                    "iconUri": "http://static.hdslb.com/mobile/img/512.png",
                    "uri": "https://www.bilibili.com/"
                },
                {
                    "title": "Bigjpg - AI人工智能图片无损放大 - 使用人工智能深度卷积神经网络(CNN)无损放大图片",
                    "iconUri": "https://bigjpg.com/static/css/touch-icon-iphone-retina.png",
                    "uri": "https://bigjpg.com/"
                },
                {
                    "title": "ChatGPT",
                    "iconUri": "https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png",
                    "uri": "https://chat.openai.com/"
                },
                {
                    "title": "GitHub",
                    "iconUri": "https://github.com/fluidicon.png",
                    // "iconUri": "https://github.githubassets.com/favicons/favicon-dark.svg",
                    "uri": "https://github.com/"
                },
                {
                    "title": "Hentai Haven | Watch free Hentai HD – Hentai Haven – Watch free hentai video stream HD in English subtitles to watch and download the best Hentaihaven in 720p/1080p uncensored hentai rape incest harem tentacle yuri",
                    "iconUri": "https://hentaihaven.xxx/www/2019/04/cropped-hentaihavenico-180x180.png",
                    "uri": "https://hentaihaven.xxx/"
                },
                {
                    "title": "Home | Iwara",
                    "iconUri": "https://www.iwara.tv/logo.png",
                    "uri": "https://www.iwara.tv/"
                },
                {
                    "title": "LookAE.com-大众脸影视后期特效",
                    "iconUri": "https://www.lookae.com/favicon.ico",
                    "uri": "https://www.lookae.com/"
                },
                {
                    "title": "LOFTER（乐乎） - 让兴趣，更有趣",
                    "iconUri": "https://www.lofter.com/favicon.ico",
                    "uri": "https://www.lofter.com/"
                },
                {
                    "title": "MidiShow - 领先的MIDI音乐交流与下载网站",
                    "iconUri": "https://www.midishow.com/favicon.ico",
                    "uri": "https://www.midishow.com/"
                },
                {
                    "title": "萌娘百科 万物皆可萌的百科全书 - zh.moegirl.org.cn",
                    // "iconUri": "https://img.moegirl.org.cn/favicon.ico",
                    "iconUri": "https://p1.ssl.qhimg.com/dr/270_500_/t01e411627a671e5255.png?size=268x265",
                    "uri": "https://zh.moegirl.org.cn/Mainpage"
                },
                {
                    "title": "pixiv",
                    "iconUri": "https://www.pixiv.net/favicon.ico",
                    "uri": "https://www.pixiv.net/"
                },
                {
                    "title": "搜图神器-一键搜索聚合，海量图片资源免费下载！",
                    "iconUri": "https://assets.soutushenqi.com/common/stsq_logo.ico",
                    "uri": "http://www.soutushenqi.com/home/"
                },
                {
                    "title": "Snapcraft - Snaps are universal Linux packages",
                    "iconUri": "https://snapcraft.io/static/snapcraft-favicon.png?v=055e94b",
                    "uri": "https://snapcraft.io/"
                },
                {
                    "title": "欢迎来到 Steam",
                    "iconUri": "https://store.steampowered.com/favicon.ico",
                    "uri": "https://store.steampowered.com/"
                },
                {
                    "title": "用户中心 — Tolink",
                    "iconUri": "https://tolink.pro/favicon.ico",
                    "uri": "https://tolink.pro/user"
                },
                {
                    "title": "Vocal Remover and Isolation [AI]",
                    "iconUri": "https://vocalremover.org/favicon.ico",
                    "uri": "https://vocalremover.org/"
                },
                {
                    "title": "下次一定 - 专门为白嫖怪开发的宝藏网站 丨 下次一定",
                    "iconUri": "https://www.iiice.cn//vite.svg",
                    "uri": "https://www.iiice.cn/#/"
                }
            ]
        }
        localStorage.setItem("links", JSON.stringify(obj));
    }
    addLink(obj);
    for (var i = 0; i < 3; i++) {
        var div = document.createElement("div");
        div.className = "linkDiv";
        div.style.opacity = "0";
        divArray.appendChild(div);
    }

    let scrollTimer; // 用于存储计时器的引用

    function handleScroll() {
        // 如果已经设置了计时器，清除它
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }

        // 设置一个新的计时器，在0.5秒后执行检查函数
        scrollTimer = setTimeout(checkScroll, 500);
    }

    function checkScroll() {
        divArray.style.scrollbarColor = "#ffffff00 #ffffff00";
        for (var y = 0; y <= divArray.scrollTop; y += scrollNum) {
            divArrayY = y;
        }
        divArray.scrollTop = divArrayY;
    }

    document.documentElement.addEventListener("wheel", function (e) {
        e.preventDefault();
        scrollNum = divArray.children[0].offsetHeight;
        if (e.deltaY < 0) {
            if (divArrayY > 0) divArrayY -= scrollNum;
        } else if (e.deltaY > 0) {
            if (divArrayY < divArray.scrollHeight - divArray.clientHeight) divArrayY += scrollNum;
        }

        divArray.scrollTop = divArrayY;
        divArray.style.scrollbarColor = "#00d9ffaa #ffffff00";
        handleScroll();
    });

    divArray.addEventListener("mousedown", function (e) {
        this.style.scrollbarColor = "#00d9ffff #ffffff00";
    });

    divArray.addEventListener("mouseup", function (e) {
        scrollNum = this.children[0].offsetHeight;
        for (var y = 0; y <= divArray.scrollTop; y += scrollNum) {
            divArrayY = y;
        }
        this.scrollTop = divArrayY;
        this.style.scrollbarColor = "#00d9ffaa #ffffff00";
        handleScroll();
    });

    function addLink(obj) {
        // 如果节点有uri字段，表示是一个书签
        if (obj.uri) {
            var div = document.createElement("div");
            div.className = "linkDiv";
            divArray.appendChild(div);
            div.addEventListener("mouseenter", function (e) {
                previewFrame.style.transition = "opacity 0.1s 0.5s, height 0.5s 0.5s";
                
                title.textContent = obj.title;
                title.style.width = "20vw";
                title.style.opacity = "1";
                previewFrame.src = obj.uri;
                previewFrame.style.opacity = "1";
                previewFrame.style.height = "100vh";
            });
            div.addEventListener("mousemove", function (e) {
                title.style.top = `${e.clientY + 20}px`;
                title.style.left = `${e.clientX + 20}px`;
                previewFrame.style.top = `${e.clientY + title.offsetHeight + 20}px`;
                previewFrame.style.left = `${e.clientX + 20}px`;
            });
            div.addEventListener("mouseleave", function (e) {
                previewFrame.style.transition = "opacity 0.1s, height 0.1s";

                title.style.opacity = "0";
                title.style.width = "0vw";
                previewFrame.style.opacity = "0";
                previewFrame.style.height = "0vh";
                previewFrame.src = "about:blank";
            });
            div.addEventListener("click", function (e) {
                window.location.href = obj.uri;
            });
            if (obj.iconUri && !obj.iconUri.startsWith("fake-favicon-uri:")) {
                div.style.backgroundImage = `url(${obj.iconUri})`;
            } else {
                div.style.backgroundImage = "url(res/defaultIcon.png)";
            }
        }

        // 如果节点有children字段，表示有子节点，递归处理子节点
        if (obj.children && obj.children.length > 0) {
            obj.children.forEach(function (childNode) {
                addLink(childNode);
            });
        }
    }

    document.addEventListener("mousemove", function (e) {
        devX = (document.documentElement.clientWidth / 2 - e.clientX) / 50 - 50;
        divArray.style.transform = `translateX(${devX}%)`;
    });

    document.addEventListener("keydown", function (e) {
        if (e.shiftKey && e.code === "KeyE") {
            e.preventDefault();
            this.body.appendChild(editBox);
            editBox.value = formatString(localStorage.getItem("links"));
            editBox.focus();
        }
        if (e.shiftKey && e.code === "Enter") {
            e.preventDefault();
            if (editBox.value.trim() === "") {
                localStorage.removeItem("links");
                this.body.removeChild(editBox);
            } else {
                console.log(editBox.value);
                editBox.value = removeSpacesAndNewlines(editBox.value);
                try {
                    var jsonData = JSON.parse(editBox.value);
                    // 如果 JSON 解析成功，您可以在这里继续处理 jsonData
                    localStorage.setItem("links", editBox.value);
                    var obj = jsonData;
                    divArray.innerHTML = ""
                    addLink(obj);
                    editBox.value = "";
                    this.body.removeChild(editBox);
                } catch (error) {
                    console.error('JSON 解析错误:', error.message);
                    // 在这里处理错误，可以输出错误信息或采取其他适当的措施
                    editBox.value = formatString(editBox.value);
                    insertTextAtCursor(editBox, '\n\nJSON 解析错误:' + error.message);
                }
            }
        }
    });

    function formatString(input) {
        let result = '';
        let indentation = 0;
        let insideQuotes = false;

        for (let i = 0; i < input.length; i++) {
            const char = input[i];

            if (char === '"') {
                // 切换引号状态
                insideQuotes = !insideQuotes;
                result += char;
            } else if ((char === '{' || char === '[') && !insideQuotes) {
                // 在 "{" 或 "[" 后添加换行符和缩进
                indentation++;
                result += char + '\n' + '    '.repeat(indentation);
            } else if ((char === '}' || char === ']') && !insideQuotes) {
                // 在 "}" 或 "]" 前添加换行符和缩进
                indentation = Math.max(0, indentation - 1); // 确保不为负数
                result += '\n' + '    '.repeat(indentation) + char;
            } else if (char === ',') {
                // 在非引号内的逗号后添加换行符
                result += insideQuotes ? char : ',\n' + '    '.repeat(indentation);
            } else {
                // 其他字符直接添加到结果中
                result += char;
            }
        }

        return result;
    }

    function removeSpacesAndNewlines(input) {
        let result = '';
        let insideQuotes = false;

        for (let i = 0; i < input.length; i++) {
            const char = input[i];

            if (char === '"') {
                // 切换引号状态
                insideQuotes = !insideQuotes;
                result += char;
            } else if (char === ' ' || char === '\n' || char === '\r' || char === '\t') {
                // 在引号外删除空格
                if (!insideQuotes || char === '\n' || char === '\r' || char === '\t') {
                    continue;
                } else {
                    result += char;
                }
            } else {
                // 其他字符直接添加到结果中
                result += char;
            }
        }

        return result;
    }

    editBox.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
            event.preventDefault();  // 阻止默认的 Tab 行为
            insertTextAtCursor(this, '    ');  // 插入四个空格
        }
        if (event.key === 'Enter') {
            event.preventDefault();  // 阻止默认的 Enter 行为
            insertNewLineAtCursor(editBox);
        }

        function insertNewLineAtCursor(textarea) {
            var cursorPos = textarea.selectionStart;
            var textBefore = textarea.value.substring(0, cursorPos);
            var textAfter = textarea.value.substring(cursorPos);

            // 计算光标前的 { 和 [ 的数量
            var openBracketsBefore = (textBefore.match(/\{/g) || []).length + (textBefore.match(/\[/g) || []).length;

            // 计算光标前的 } 和 ] 的数量
            var closeBracketsBefore = (textBefore.match(/\}/g) || []).length + (textBefore.match(/\]/g) || []).length;

            // 计算插入的空格数（四个空格）
            var spacesToInsert = Math.max(0, openBracketsBefore - closeBracketsBefore);

            // 如果光标后是'}'或']'，则添加新行和空格
            if (textAfter[0] === '}' || textAfter[0] === ']') {
                textAfter = '\n' + '    '.repeat(spacesToInsert - 1) + textAfter;
            }

            // 插入换行符和空格
            textarea.value = textBefore + '\n' + '    '.repeat(spacesToInsert) + textAfter;

            // 设置新的光标位置
            textarea.selectionStart = cursorPos + 1 + spacesToInsert * 4;
            textarea.selectionEnd = cursorPos + 1 + spacesToInsert * 4;

            // 让文本域保持焦点
            textarea.focus();
        }
    });

    function insertTextAtCursor(textarea, text) {
        var cursorPos = textarea.selectionStart;
        var textBefore = textarea.value.substring(0, cursorPos);
        var textAfter = textarea.value.substring(cursorPos);

        textarea.value = textBefore + text + textAfter;
        textarea.selectionStart = cursorPos + text.length;
        textarea.selectionEnd = cursorPos + text.length;
        textarea.focus();
    };

}