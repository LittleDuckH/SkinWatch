
// 定义要显示的动态文字数组和对应的颜色数组
var dynamicTextArray = [
    { text: "紫外线辐射", color: "gray" },
    { text: "化学物质接触", color: "gray" },
    { text: "遗传因素", color: "gray" },
    { text: "免疫系统问题", color: "gray" },
    { text: "烟草使用", color: "gray" }
  ];
  
  // 获取要显示动态文字的元素
  var dynamicTextElement = document.getElementById("dynamic-text");
  
  // 定义一个变量用于追踪当前显示到的文字索引
  var currentIndex = 0;
  var currentLetterIndex = 0;
  var isDeleting = false;
  
  // 定义一个函数来逐个显示或删除动态文字
  function showDynamicText() {
    // 如果正在删除文字
    if (isDeleting) {
      // 删除动态文字元素中的最后一个字母
      var dynamicTextContent = dynamicTextElement.innerHTML;
      dynamicTextElement.innerHTML = dynamicTextContent.slice(0, -14);
      // 如果文字已全部删除，将 isDeleting 置为 false 并继续显示下一个文字
      if (dynamicTextElement.textContent === '') {
        isDeleting = false;
        currentIndex++;
        currentLetterIndex = 0;
        setTimeout(showDynamicText, 1000);
      } else {
        // 继续删除下一个字母
        setTimeout(showDynamicText, 200);
      }
    } else {
      // 如果当前索引未超出数组边界
      if (currentIndex < dynamicTextArray.length) {
        var currentText = dynamicTextArray[currentIndex].text;
        var currentColor = dynamicTextArray[currentIndex].color;
        // 如果当前字母索引未超出文字长度
        if (currentLetterIndex < currentText.length) {
          // 将下一个字母添加到动态文字元素中，并设置颜色
          dynamicTextElement.innerHTML += `<span style="color: ${currentColor};">${currentText[currentLetterIndex]}</span>`;
          currentLetterIndex++; // 增加字母索引以准备显示下一个字母
          // 每隔一段时间调用自身来显示下一个字母
          setTimeout(showDynamicText, 200);
        } else {
          // 当显示完当前文字后，将 isDeleting 置为 true 开始删除文字
          isDeleting = true;
          setTimeout(showDynamicText, 1000);
        }
      } else {
        // 循环结束后，重置索引以便再次循环
        currentIndex = 0;
        currentLetterIndex = 0;
        // 延迟2秒后重新开始循环
        setTimeout(showDynamicText, 2000);
      }
    }
  }
  
  // 延迟2秒后开始循环
  setTimeout(showDynamicText, 2000);
  