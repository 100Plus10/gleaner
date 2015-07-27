/**
 * Created by hywilliam on 7/21/15.
 */

window.onload = function(){

    //localStorage Handle
    var localStorageClass = {
        booksJson: "",
        getLocalStorage: function(){
            return eval(localStorage.getItem("books"));
        },
        setLocalStorage: function(books){
            this.booksJson = JSON.stringify(books);
            return localStorage.setItem("books", this.booksJson);
        }
    }

    // 分组列表模板赋值
    var groupTem = new Template("group");
    var g = groupTem.render(localStorageClass.getLocalStorage());
    $("#group-list").html(g);

    // 笔记列表模板赋值
    var noteList = new Template("note-list-temp", "常用分组");
    var nl = noteList.render(eval(JSON.parse(localStorage.getItem("books"))));
    $("#note-list").html(nl);

    //click to menu light
    var menuLight = {
        menuItems: $(".group-item"),
        menuList: $("#group-list"),
        lightDefaultItem: function(){
            menuLight.menuItems.eq(0).addClass("active");
            $("#group-name").text(menuLight.menuItems.eq(0).text());
        },
        clickMenu: function() {
            menuLight.menuList.on("click", ".group-item", function(){
                menuLight.menuItems.removeClass("active");
                $(this).addClass("active");
                $("#group-name").text($(this).text());

                // 笔记列表模板赋值
                var noteList = new Template("note-list-temp", $(this).text().split('(')[0]);
                var nl = noteList.render(eval(JSON.parse(localStorage.getItem("books"))));
                $("#note-list").html(nl);

                //设置笔记列表默认第一个高亮
                if($(".note-item").length > 0){
                    $(".note-item").eq(0).addClass("list-item-active")
                }

                //清空内容
                $("#note-content-title").val("");
                $("#text-input").val("");
                $("#preview").html("");
            });
        }
    };

    //add group
    var addGroup = {
        inputState: false,
        addBtn: $("#add-btn"),
        nameInput: $("#new-group-name"),
        fadeIn: function(){
            addGroup.nameInput.animate({
                width: "120px",
                border: "1px solid #aaa"
            });
            addGroup.addBtn.addClass("add-btn-click-in");
            addGroup.nameInput.focus();
        },
        fadeOut: function(){
            addGroup.nameInput.animate({
                width: "0px",
                border: "0px solid #aaa"
            }, function(){
                if(addGroup.nameInput.val() != null && addGroup.nameInput.val() != ""){
                    location.reload();
                }
            })
            addGroup.addBtn.addClass("add-btn-click-out");
        },
        addBtnClick: function(){
            addGroup.addBtn.click(function(){
                //if input out
                if(addGroup.inputState){
                    //add group
                    var arr = localStorageClass.getLocalStorage();
                    var book = Object.create(Book);
                    book.setName(addGroup.nameInput.val());
                    book.newNote(null);
                    //判断分组名称是否存在 存在则不能添加
                    for(var i = 0; i < arr.length; i++){
                        if(arr[i].name == addGroup.nameInput.val()){
                            addGroup.nameInput.css("color", "#f00");
                            addGroup.nameInput.animate({
                                margin: "5px 5px 5px 10px",
                            }, 100);
                            addGroup.nameInput.animate({
                                margin: "5px"
                            }, 100);
                            addGroup.nameInput.animate({
                                margin: "5px 5px 5px 10px"
                            }, 100);
                            addGroup.nameInput.animate({
                                margin: "5px"
                            }, 100);
                            addGroup.nameInput.animate({
                                margin: "5px 5px 5px 10px",
                            }, 100);
                            addGroup.nameInput.animate({
                                margin: "5px",
                            }, 100, function(){
                                addGroup.nameInput.css("color", "#555");
                            });
                            return;
                        }
                    }

                    arr.push(book);
                    localStorageClass.setLocalStorage(arr);

                    addGroup.addBtn.removeClass("add-btn-click-in");
                    addGroup.fadeOut();
                    addGroup.inputState = false;
                }else{
                    //弹出分组名称输入框
                    addGroup.addBtn.removeClass("add-btn-click-out");
                    addGroup.fadeIn();
                    addGroup.inputState = true;
                }
            })
        }
    }

    //delete group
    var deleteGroup = {
        deleteState: false,
        deleteBtn: $("#delete-group-btn"),
        activeMenu: $("a.active"),
        deleteBtnClick: function(){
            //click delete handle function
            deleteGroup.deleteBtn.click(function(){
                if(!deleteGroup.deleteState){
                    deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button-ok.png')");
                    deleteGroup.deleteState = true;
                }else{
                    deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button.png')");
                    deleteGroup.deleteState = false;
                    deleteGroup.activeMenu = $("a.active").eq(0);

                    // 按名称删除分组
                    var arr = localStorageClass.getLocalStorage();
                    var deleteGroupName = deleteGroup.activeMenu.text().split('(')[0];
                    for(var i = 0; i< arr.length; i++){
                        if(arr[i].name == deleteGroupName){
                            arr.splice(i, 1);
                        }
                    }
                    localStorageClass.setLocalStorage(arr);

                    menuLight.menuItems.eq(0).addClass("active");
                    location.reload();
                }
            });

            //lost focus reset delete state
            deleteGroup.deleteBtn.mouseout(function(){
                deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button.png')");
                deleteGroup.deleteState = false;
            });
        }
    }

    //menu light
    var menuLightObj = Object.create(menuLight);
    menuLightObj.lightDefaultItem();
    menuLightObj.clickMenu();

    //add group
    var addGroupObj = Object.create(addGroup);
    addGroupObj.addBtnClick();

    //delete group
    var deleteGroupObj = Object.create(deleteGroup);
    deleteGroupObj.deleteBtnClick();


    //note list class
    var noteList = {
        noteLists: $("#note-list"),
        noteItems: $(".note-item"),
        noteContentTitle: $("#note-content-title"),
        textInput: $("#text-input"),
        noteTitle: "",
        currentContent: "",
        currentIndex: 0,
        lightDefaultItem: function(){
            if(noteList.noteItems.length > 0){
                noteList.noteItems.eq(0).addClass("list-item-active");
                //初始化笔记内容
                noteList.noteContentTitle.val(noteList.noteTitle);
                noteList.textInput.val(noteList.currentContent);
                /*noteList.noteTitle = noteList.noteItems.eq(0).find(".note-item-title").html();
                noteList.noteContentTitle.val(noteList.noteTitle)

                noteList.currentContent = noteList.noteItems.find(".note-item-content").html();
                var before = noteList.currentContent.substr(0, 20);
                var after = noteList.currentContent.substr(20, noteList.currentContent.length);
                before = before.replace(/\s+/g, "");
                noteList.currentContent = before + after;
                noteList.textInput.val(noteList.currentContent);*/
            }
        },
        noteItemsClick: function(){
            noteList.noteLists.on("click", ".note-item", function(){
                //click note list to add selected style
                noteList.noteItems = $(".note-item");
                noteList.noteItems.removeClass("list-item-active");
                $(this).addClass("list-item-active");

                //click note list to show right note content
                noteList.noteTitle = $(this).find(".note-item-title").html();
                noteList.noteContentTitle.val(noteList.noteTitle)

                noteList.currentContent = $(this).find(".note-item-content").html();
                var before = noteList.currentContent.substr(0, 20);
                var after = noteList.currentContent.substr(20, noteList.currentContent.length);
                before = before.replace(/\s+/g, "");
                noteList.currentContent = before + after;
                noteList.textInput.val(noteList.currentContent);

                //设置当前笔记的索引位置
                noteList.currentIndex = $(".note-item").index(this);
            });
        }
    }

    //note list
    var noteListObj = Object.create(noteList);
    noteListObj.lightDefaultItem();
    noteListObj.noteItemsClick();

    // 笔记本操作类
    var noteItem = {
        newNoteBtn: $("#new-note-btn"), // 新建按钮
        textInput: $("#text-input"), //内容输入框
        noteContentTitle: $("#note-content-title"), //标题输入框
        noteContentSave: $("#note-content-save"),
        noteContentEdit: $("#note-content-edit"),
        noteContentDelete: $("#note-content-delete"),
        newNoteBtnClick: function(){
            noteItem.newNoteBtn.click(function(){
                //清空右侧笔记输入框
                noteList.noteContentTitle.val("");
                noteList.textInput.val("");
                $("#preview").html("");
            });
        },

        //保存按钮点击事件
        noteContentSaveClick: function(){
            noteItem.noteContentSave.click(function(){
                var arr = localStorageClass.getLocalStorage();
                for(var i = 0; i < arr.length; i++){
                    if($(".active").text().split('(')[0] == arr[i].name){
                        var newNote = Object.create(notes);
                        newNote.setTitle(noteItem.noteContentTitle.val());
                        newNote.setContent(noteItem.textInput.val());
                        var date = new Date();
                        newNote.time = date.toLocaleDateString();
                        arr[i].noteStore.push(newNote);
                        arr[i].noteNum++;
                        localStorageClass.setLocalStorage(arr);
                        location.reload();
                    }
                }
            });
        },

        //删除按钮点击事件
        noteContentDeleteClick: function(){
            noteItem.noteContentDelete.click(function(){
                if($(".note-item").length == 0){
                    return;
                }

                var arr = localStorageClass.getLocalStorage();
                for(var i = 0; i < arr.length; i++){
                    if($(".active").text().split('(')[0] == arr[i].name){
                        arr[i].noteStore.splice(noteList.currentIndex, 1);
                        arr[i].noteNum--;
                        localStorageClass.setLocalStorage(arr);
                        location.reload();
                    }
                }
            });
        },
    }

    // 笔记本操作类实例化
    var noteItemObj = Object.create(noteItem);
    noteItemObj.newNoteBtnClick();
    noteItemObj.noteContentSaveClick();
    noteItemObj.noteContentDeleteClick();

}

// Created by hywilliam on 7/21/15.
//var gleaner = new Data();
//var notebooks = gleaner.getNotebooks();
