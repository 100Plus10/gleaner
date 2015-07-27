/**
 * Created by Mask-W on 2015/7/26.
 */

var notes = {
    tag: 0,
    title: "",
    time: "",
    content: "",
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
}

var Book = {
    name: "",
    noteNum: 0,
    noteStore: [],
    getName: function(){
        return this.name;
    },
    setName: function(name){
        this.name = name;
    },
    size: function () {
        return this.noteNum;
    },
    toJSON   : function() {
        return {
            name: this.name,
            noteNum: this.noteNum,
            noteStore: this.noteStore,
            //newNote: this.newNote
        }
    },
    // 新建笔记
    newNote    : function (note) {
        if(note == null){
            return null;
        }
        // name = string
        //var note = Object.create(notes);
        // 将新增的笔记加入noteStore末尾，并写入tag标记
        note.tag = this.noteNum;
        ++this.noteNum;
        this.noteStore.push(note);
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
}



if(localStorage.getItem("books") == null){
    var note1 = Object.create(notes);
    note1.setTitle("我的第一个笔记");
    note1.setContent("#测试的笔记有时候我们在github上看到一些比较好的项目，我们都会fork一下它，然后在本地进行操作，但是fork之后，项目是不会跟源项目保持同步的，需要我们自己进行一些操作让其同步。" +
        "我们以最近Nutz成员正在开发的QA系统为例，假如我们clone自己fork过来的项目的保存路径为：~/ngqa_gevinhjy" +
        "具体操作如下：" +
        "1、打开Git Bash" +
        "2、进入~/ngqa_gevinhjy" +
        "3、为了让项目与源项目同步，我们首先要将源项目pull到本地");
    note1.time = "2012-07-12";

    var bookInit = Object.create(Book);
    bookInit.setName("常用分组");
    bookInit.newNote(note1);
    var booksInit = [bookInit];
    localStorage.setItem("books", JSON.stringify(booksInit));
}

