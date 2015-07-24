/**
<<<<<<< HEAD
<<<<<<< HEAD
 * Created by Mask-W on 2015/7/22.
=======
 * Created by hywilliam on 7/21/15.
>>>>>>> hywilliam
 */
//=======
// * Created by Mask-W on 2015/7/22.
// */

window.onload = function(){
    //���ʵ�ֲ˵�����
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

    //��ӷ���
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
                    //��ӷ���
                    location.reload();
                }
            })
            addGroup.addBtn.addClass("add-btn-click-out");
        },
        addBtnClick: function(){
            addGroup.addBtn.click(function(){
                //���������Ѿ�����
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

    //ɾ�����
    var deleteGroup = {
        deleteState: false,
        deleteBtn: $("#delete-group-btn"),
        activeMenu: $("a.active"),
        deleteBtnClick: function(){
            //���ɾ���?��
            deleteGroup.deleteBtn.click(function(){
                if(!deleteGroup.deleteState){
                    deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button-ok.png')");
                    deleteGroup.deleteState = true;
                }else{
                    deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button.png')");
                    deleteGroup.deleteState = false;
                    deleteGroup.activeMenu = $("a.active").eq(0);

                    //ɾ�����Ĵ���
                    alert(deleteGroup.activeMenu.html());

                    menuLight.menuItems.eq(0).addClass("active");
                }
            });

            //ʧȥ��������ɾ��״̬
            deleteGroup.deleteBtn.mouseout(function(){
                deleteGroup.deleteBtn.css("background-image", "url('../images/delete-button.png')");
                deleteGroup.deleteState = false;
            });
        }
    }

    //ʵ��˵�������
    var menuLightObj = Object.create(menuLight);
    menuLightObj.lightDefaultItem();
    menuLightObj.clickMenu();

    //ʵ����ӷ�����
    var addGroupObj = Object.create(addGroup);
    addGroupObj.addBtnClick();

    //ʵ��ɾ�������
    var deleteGroupObj = Object.create(deleteGroup);
    deleteGroupObj.deleteBtnClick();


    //�ʼ��б���
    var noteList = {
        noteItems: $(".note-item"),
        lightDefaultItem: function(){
            if(noteList.noteItems.length > 0){
                noteList.noteItems.eq(0).addClass("list-item-active");
            }
        },
        noteItemsClick: function(){
            noteList.noteItems.click(function(){
                //����ʼ��б� ���ѡ����ʽ
                noteList.noteItems.removeClass("list-item-active");
                $(this).addClass("list-item-active");

                //����ʼ��б� �Ҳ���ʾ�ʼ�����
            });
        }
    }

    //ʵ��ʼǱ��б���
    var noteListObj = Object.create(noteList);
    noteListObj.lightDefaultItem();
    noteListObj.noteItemsClick();
}




//<<<<<<< HEAD
//=======
// * Created by hywilliam on 7/21/15.
// */
//var gleaner = new Data();
//var notebooks = gleaner.getNotebooks();
//>>>>>>> hywilliam
//=======
////>>>>>>> e8a9eff0e67ce7a4163f3dc4c43ff739ad9ca749
//>>>>>>> hywilliam

