/*
 * @Author: huang
 * @Date: 2024-04-11 16:22:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-29 23:25:56
 * @FilePath: \Home_Web\main.js
 */
document.addEventListener('DOMContentLoaded', function () {
    const enButton = document.getElementById("button");
    const enButton1 = document.getElementById("button1");
    const enButton2 = document.getElementById("button2");
    
    function redirectToWeb() { // gpt
        // window.location.href = "https://medgpt.streamlit.app/";
        window.location.href = "https://www.modelscope.cn/studios/zzy2002/SkinGLM/";
    }
    function redirectToWeb1() { // 分割
        window.location.href = "https://skinsegment.streamlit.app/";
    }
    function redirectToWeb2() { // 分类
        window.location.href = "https://skinclassify.streamlit.app/";
    }
    enButton.addEventListener("click", redirectToWeb);
    enButton1.addEventListener("click", redirectToWeb1);
    enButton2.addEventListener("click", redirectToWeb2);
});


