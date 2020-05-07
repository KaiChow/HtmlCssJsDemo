/**
 * 什么是NodeJS
 * JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。
 * 每一种解析器都是一个运行环境，不但允许JS定义各种数据结构，进行各种计算，还允许JS使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的JS的用途是操作DOM，
 * 浏览器就提供了document之类的内置对象。而运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。
 * 
 * 1,odeJS的作者说，他创造NodeJS的目的是为了实现高性能Web服务器，他首先看重的是事件机制和异步IO模型的优越性，而不是JS。
 */

function Hello() {
    console.log("Holle World!");
}
Hello();

/**
 * 1,require
        require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。
        模块名可使用相对路径（以./开头），或者是绝对路径（以/或C:之类的盘符开头）。另外，模块名中的.js扩展名可以省略。
 */

 const data = require('./data.json');//导入json数据
 console.log(data);
 
 /**
  * 2,exports
        exports对象是当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象。
  */

  exports.Log =function(){
    alert("Hello");
  }

  /**
   * 3,module
        通过module对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，
        如果想改成一个函数的话，可以使用以下方式。
   */

   modules.exports = function(){
       console.log('Hello World!')
   }
  