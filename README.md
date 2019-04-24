# Templeter
更好的组织静态页面，只需导入一个文件
### WHY  
项目开发初期，如果多个页面上的公共部分要改，一般我们会把它抽取出来，目前的做法主要有这几种：  
- 使用gulp等工具，要把写好的公共部分先编译  
- 使用模板引擎， 也要先编译
- 用jQuery的load()方法，或者iframe标签，或者用document.write('标签'),再使用script标签插到页面相应位置  

**这些都不方便**
### WHAT  
我希望有个js文件，只要在某个页面引用一下，就能调用共通页面的代码，不需要额外的js工具，不用自己搭脚手架环境，也没有什么跨域问题，最好共通部分能用自定义标签，见名知意，我只想在本地环境下打开文件，就能引用到公通代码,就像下面这样。(这是已经实现好了的,写完common.html,在浏览器里预览一下，之后在其它页面引用就能看到效果)

*common.html*
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>common 共通</title>
    <script src="js/Templeter.js" tag="common"></script>
</head>
<body>
    <first-ele>
        <span>我是第一个自定义标签</span>
    </first-ele>
    <hr>
    <second-ele>
        <span>我是第二个自定义标签</span>
    </second-ele>
    <hr>
</body>
</html>
```

*test1.html*
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test1</title>
    <script src="js/Templeter.js"></script>
</head>
<body>
    <first-ele></first-ele>
</body>
</html>
```

*test2.html*
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test2</title>
    <script src="js/Templeter.js"></script>
</head>
<body>
    <second-ele></second-ele>
</body>
</html>
```

### HOW 


