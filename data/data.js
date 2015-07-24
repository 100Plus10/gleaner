/**
 *
 * Created by hywilliam on 7/21/15.
 */
function Data() {
    // all of the data is an obj
    this.data = {
        // notebooks is an array
        'notebooks': [
            // every notebook is an obj
            {
                'name': 'HTML',
                'total': 136,
                // articles is an array, 利于新增和排序
                'articles': [
                    // every article is an obj
                    {
                        'title': '图片排版与字体排版',
                        'date': '7/21/2015 3:12:58 PM',
                        'content': '**广义上说**，目标格式为[CSS](http://www.baidu.com)的预处理器是CSS预处理器，但本文特指以最终生成CSS为目的的领域特定语言。 Sass、LESS、Stylus 是目前最主流的 CSS 预处理器。  CSS 后处理器 是对 CSS 进行处理，并最终生成 CSS 的 预处理器，它属于广义上的 CSS 预处理器。 我们很久以前就在用 CSS 后处理器 了，最典型的例子是 CSS 压缩工具（如 clean-css），只不过以前没单独拿出来说过。 还有最近比较火的 Autoprefixer，以 Can I Use 上的 浏览器支持数据 为基础，自动处理兼容性问题。'
                    },
                    {
                        'title': '用户响应去中心化',
                        'date': '7/20/2015 9:40:27 AM',
                        'content': '比如 Autoprefixer 只做语法 Prefix 层面的兼容，还需要一些专门处理如 IE 滤镜兼容 这些问题的小模块配合使用。  比如可以针对 CSS 中单独使用的 *图片* 自动做 CSS Sprites 归类与合并 的工作。 比如可以根据项目对 图标字体 字形的实际使用情况自动对字体进行 体积优化。'
                    }
                ]
            },
            {
                'name': 'CSS',
                'total': '80',
                'article': [
                    {
                        'title': '图片排版与字体排版',
                        'date': '7/21/2015 3:12:58 PM',
                        'content': '**广义上说**，目标格式为[CSS](http://www.baidu.com)的预处理器是CSS预处理器，但本文特指以最终生成CSS为目的的领域特定语言。 Sass、LESS、Stylus 是目前最主流的 CSS 预处理器。  CSS 后处理器 是对 CSS 进行处理，并最终生成 CSS 的 预处理器，它属于广义上的 CSS 预处理器。 我们很久以前就在用 CSS 后处理器 了，最典型的例子是 CSS 压缩工具（如 clean-css），只不过以前没单独拿出来说过。 还有最近比较火的 Autoprefixer，以 Can I Use 上的 浏览器支持数据 为基础，自动处理兼容性问题。'
                    },
                    {
                        'title': '用户响应去中心化',
                        'date': '7/20/2015 9:40:27 AM',
                        'content': '比如 Autoprefixer 只做语法 Prefix 层面的兼容，还需要一些专门处理如 IE 滤镜兼容 这些问题的小模块配合使用。  比如可以针对 CSS 中单独使用的 *图片* 自动做 CSS Sprites 归类与合并 的工作。 比如可以根据项目对 图标字体 字形的实际使用情况自动对字体进行 体积优化。'
                    }
                ]
            },
            {
                'name': 'CSS',
                'total': '80',
                'article': [
                    {
                        'title': '图片排版与字体排版',
                        'date': '7/21/2015 3:12:58 PM',
                        'content': '**广义上说**，目标格式为[CSS](http://www.baidu.com)的预处理器是CSS预处理器，但本文特指以最终生成CSS为目的的领域特定语言。 Sass、LESS、Stylus 是目前最主流的 CSS 预处理器。  CSS 后处理器 是对 CSS 进行处理，并最终生成 CSS 的 预处理器，它属于广义上的 CSS 预处理器。 我们很久以前就在用 CSS 后处理器 了，最典型的例子是 CSS 压缩工具（如 clean-css），只不过以前没单独拿出来说过。 还有最近比较火的 Autoprefixer，以 Can I Use 上的 浏览器支持数据 为基础，自动处理兼容性问题。'
                    },
                    {
                        'title': '用户响应去中心化',
                        'date': '7/20/2015 9:40:27 AM',
                        'content': '比如 Autoprefixer 只做语法 Prefix 层面的兼容，还需要一些专门处理如 IE 滤镜兼容 这些问题的小模块配合使用。  比如可以针对 CSS 中单独使用的 *图片* 自动做 CSS Sprites 归类与合并 的工作。 比如可以根据项目对 图标字体 字形的实际使用情况自动对字体进行 体积优化。'
                    }
                ]
            },
            {
                'name': 'JavaScript',
                'total': '280',
                'article': [
                    {
                        'title': '图片排版与字体排版',
                        'date': '7/21/2015 3:12:58 PM',
                        'content': '**广义上说**，目标格式为[CSS](http://www.baidu.com)的预处理器是CSS预处理器，但本文特指以最终生成CSS为目的的领域特定语言。 Sass、LESS、Stylus 是目前最主流的 CSS 预处理器。  CSS 后处理器 是对 CSS 进行处理，并最终生成 CSS 的 预处理器，它属于广义上的 CSS 预处理器。 我们很久以前就在用 CSS 后处理器 了，最典型的例子是 CSS 压缩工具（如 clean-css），只不过以前没单独拿出来说过。 还有最近比较火的 Autoprefixer，以 Can I Use 上的 浏览器支持数据 为基础，自动处理兼容性问题。'
                    },
                    {
                        'title': '用户响应去中心化',
                        'date': '7/20/2015 9:40:27 AM',
                        'content': '比如 Autoprefixer 只做语法 Prefix 层面的兼容，还需要一些专门处理如 IE 滤镜兼容 这些问题的小模块配合使用。  比如可以针对 CSS 中单独使用的 *图片* 自动做 CSS Sprites 归类与合并 的工作。 比如可以根据项目对 图标字体 字形的实际使用情况自动对字体进行 体积优化。'
                    }
                ]
            },
            {
                'name': 'BootStrap',
                'total': '8',
                'article': [
                    {
                        'title': '图片排版与字体排版',
                        'date': '7/21/2015 3:12:58 PM',
                        'content': '**广义上说**，目标格式为[CSS](http://www.baidu.com)的预处理器是CSS预处理器，但本文特指以最终生成CSS为目的的领域特定语言。 Sass、LESS、Stylus 是目前最主流的 CSS 预处理器。  CSS 后处理器 是对 CSS 进行处理，并最终生成 CSS 的 预处理器，它属于广义上的 CSS 预处理器。 我们很久以前就在用 CSS 后处理器 了，最典型的例子是 CSS 压缩工具（如 clean-css），只不过以前没单独拿出来说过。 还有最近比较火的 Autoprefixer，以 Can I Use 上的 浏览器支持数据 为基础，自动处理兼容性问题。'
                    },
                    {
                        'title': '用户响应去中心化',
                        'date': '7/20/2015 9:40:27 AM',
                        'content': '比如 Autoprefixer 只做语法 Prefix 层面的兼容，还需要一些专门处理如 IE 滤镜兼容 这些问题的小模块配合使用。  比如可以针对 CSS 中单独使用的 *图片* 自动做 CSS Sprites 归类与合并 的工作。 比如可以根据项目对 图标字体 字形的实际使用情况自动对字体进行 体积优化。'
                    }
                ]
            },
            {
                'name': 'Angular',
                'total': '82',
                'article': [
                    {
                        'title': '图片排版与字体排版',
                        'date': '7/21/2015 3:12:58 PM',
                        'content': '**广义上说**，目标格式为[CSS](http://www.baidu.com)的预处理器是CSS预处理器，但本文特指以最终生成CSS为目的的领域特定语言。 Sass、LESS、Stylus 是目前最主流的 CSS 预处理器。  CSS 后处理器 是对 CSS 进行处理，并最终生成 CSS 的 预处理器，它属于广义上的 CSS 预处理器。 我们很久以前就在用 CSS 后处理器 了，最典型的例子是 CSS 压缩工具（如 clean-css），只不过以前没单独拿出来说过。 还有最近比较火的 Autoprefixer，以 Can I Use 上的 浏览器支持数据 为基础，自动处理兼容性问题。'
                    },
                    {
                        'title': '用户响应去中心化',
                        'date': '7/20/2015 9:40:27 AM',
                        'content': '比如 Autoprefixer 只做语法 Prefix 层面的兼容，还需要一些专门处理如 IE 滤镜兼容 这些问题的小模块配合使用。  比如可以针对 CSS 中单独使用的 *图片* 自动做 CSS Sprites 归类与合并 的工作。 比如可以根据项目对 图标字体 字形的实际使用情况自动对字体进行 体积优化。'
                    }
                ]
            }
        ]
    };
}

Data.prototype.getNotebooks = function () {
    return this.notebooks;
};

Data.prototype.addNotebook = function (newNotebook) {
    this.notebooks.push(newNotebook);
};
