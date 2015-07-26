/**
 *
 * Created by hywilliam on 7/24/15.
 */

/**
 * ==================================================
 *                   数据处理层
 * ==================================================
 * 与数据相关的处理操作都在这里啦，
 * 注意：
 * 不要在此文件内涉及任何view视图层操作
 * */

/**
 * ==================================================
 *                   Data Structure
 * ==================================================
 * 笔记本为对象，每篇笔记也为对象，每篇笔记存储在笔记本的noteStore中，noteStore为数组，
 * 每篇笔记有一个tag来标识自己在noteStore中的位置，方便笔记本对其进行查找。
 * */

function Notebook(name) {
    this.noteStore = [];    // 用来存放笔记
    this.name = name || '';         // 笔记本分类名
    this.noteNum = 0;       // 笔记本中笔记数量
}

function Note(title) {
    this.tag = 0;           // 在当前笔记本中的位置
    this.title = title || '';        // 笔记标题
    this.time = new Date().toLocaleDateString();    // 新建笔记的时间
    this.content = '';      // 笔记内容---为markdown格式的字符串
}

/**
 * ==================================================
 *               Notebook Class Method
 * ==================================================
 * */

Notebook.prototype = {
    constructor: Notebook,
    // 笔记本大小
    size       : function () {
        return this.noteNum;
    },
    // 拿笔记本名
    getName    : function () {
        return this.name;
    },
    // 设置笔记本名
    setName    : function (newName) {
        this.name = newName;
    },
    // 删除笔记本
    abandon    : function () {
        delete this.noteStore;
        this.noteStore = [];
        this.noteNum = 0;
    },

    // 新建笔记
    newNote    : function (name) {
        // name = string
        var note = new Note(name);
        // 将新增的笔记加入noteStore末尾，并写入tag标记
        note.tag = this.noteNum;
        this.noteStore[this.noteNum++] = note;
        return note;
    },
    // 查找某个笔记
    findNote   : function (position) {
        return position < this.noteStore.length ? this.noteStore[position] : null;
    },
    // 删除某个笔记
    removeNote : function (position) {
        // 将位置为position的笔记从noteStore中删除
        this.noteStore.splice(position, 1);
        // 将position之后的笔记的tag标记减一
        this.noteStore.forEach(function (val, i) {
            if (i > position) {
                --val.tag;
            }
        });
        --this.noteNum;
    }
};

/**
 * ==================================================
 *               Notebook operate Method
 * ==================================================
 * */
$('button').on('click', newNotebook($('input').val()));
$('button').on('click',function(){
    $('div').html('<li>'+val+'</li>').appendTo($());
});
setInterval(function(){
    localStorage[data] = data;
}, 3000);
// 新增笔记本的便捷方法
function newNotebook(name) {
    return data[data.push(new Notebook(name)) - 1];
}
// 拿到笔记本

/**
 * ==================================================
 *                 Every Note Method
 * ==================================================
 * */

Note.prototype = {
    constructor: Note,
    getTitle   : function () {
        return this.title;
    },
    setTitle   : function (newTitle) {
        this.title = newTitle;
    },
    getContent : function () {
        return this.content;
    },
    setContent : function (newContent) {
        this.content = newContent;
    }
};

//var note1 = newNote();

