/**
<<<<<<< HEAD
 * Created by Mask-W on 2015/7/22.
 */

window.onload = function(){

    //点击实现菜单高亮
    var menuLight = {
        menuItems: $(".group-item"),
        menuList: $("#group-list"),
        lightDefaultItem: function(){
            menuLight.menuItems.eq(0).addClass("active");
            $("#group-name").text(menuLight.menuItems.eq(0).text());
        },
        clickMenu: function() {
            menuLight.menuItems.click(function(){
                menuLight.menuItems.removeClass("active");
                $(this).addClass("active");
                $("#group-name").text($(this).text());
            });
        }
    };

    //添加分组
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
                    //添加分组
                    location.reload();
                }
            })
            addGroup.addBtn.addClass("add-btn-click-out");
        },
        addBtnClick: function(){
            addGroup.addBtn.click(function(){
                //如果输入框已经弹出
                if(addGroup.inputState){
                    addGroup.addBtn.removeClass("add-btn-click-in");
                    addGroup.fadeOut();
                    addGroup.inputState = false;
                }else{
                    addGroup.addBtn.removeClass("add-btn-click-out");
                    addGroup.fadeIn();
                    addGroup.inputState = true;
                }
            })
        }
    }

    //删除分组
    var deleteGroup = {
        deleteState: false,
        deleteBtn: $("#delete-group-btn"),
        activeMenu: $("a.active"),
        deleteBtnClick: function(){
            //点击删除处理函数
            deleteGroup.deleteBtn.click(function(){
                if(!deleteGroup.deleteState){
                    deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button-ok.png')");
                    deleteGroup.deleteState = true;
                }else{
                    deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button.png')");
                    deleteGroup.deleteState = false;
                    deleteGroup.activeMenu = $("a.active").eq(0);

                    //删除分组的代码
                    alert(deleteGroup.activeMenu.html());

                    menuLight.menuItems.eq(0).addClass("active");
                }
            });

            //失去焦点重置删除状态
            deleteGroup.deleteBtn.mouseout(function(){
                deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button.png')");
                deleteGroup.deleteState = false;
            });
        }
    }

    //实例化菜单高亮类
    var menuLightObj = Object.create(menuLight);
    menuLightObj.lightDefaultItem();
    menuLightObj.clickMenu();

    //实例化添加分组类
    var addGroupObj = Object.create(addGroup);
    addGroupObj.addBtnClick();

    //实例化删除分组类
    var deleteGroupObj = Object.create(deleteGroup);
    deleteGroupObj.deleteBtnClick();


    //笔记列表类
    var noteList = {
        noteItems: $(".note-item"),
        lightDefaultItem: function(){
            if(noteList.noteItems.length > 0){
                noteList.noteItems.eq(0).addClass("list-item-active");
            }
        },
        noteItemsClick: function(){
            noteList.noteItems.click(function(){
                //点击笔记列表 添加选中样式
                noteList.noteItems.removeClass("list-item-active");
                $(this).addClass("list-item-active");

                //点击笔记列表 右侧显示笔记内容
            });
        }
    }

    //实例化笔记本列表类
    var noteListObj = Object.create(noteList);
    noteListObj.lightDefaultItem();
    noteListObj.noteItemsClick();
}




=======
 * Created by hywilliam on 7/21/15.
 */
var gleaner = new Data();
var notebooks = gleaner.getNotebooks();
>>>>>>> hywilliam

