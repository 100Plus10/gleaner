/**
 * Created by ��ҹ on 2015/7/21.
 */




//ʵ��ģ��
function Template(contentId, groupName, noteTitle){

    //���ת���� html ���
    var resultHtml = [];

    var content = document.getElementById(contentId).textContent;

    //{i} ����ʹ��  �����б�
    var re =  /\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
    var result = re.exec(content);
    //alert("sdf");
    //���� {string} ��ʽ���ַ�������
    var re =  /\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
    var allResult = content.match(re);
 //   alert(allResult);

///////////////////////////////////////////////////////////////////



    var re =/\{\s*([a-hj-zA-Z\.\_0-9()]+)\s*\}/g;
    var str = re.exec(allResult[0]);

    //content = content.replace(allResult[0],1);

    this.render = function(model){
        //���� {string} ��ʽ���ַ�������
        var re =  /\{\s*([a-zA-Z\u4E00-\u9FA5\.\_0-9()]+)\s*\}/g;
        var allResult = content.match(re);
        //存储  内容
        var contentConOne = content;
       // alert(allResult);
        for(i = 0;i<allResult.length ; i++){

            if(allResult[i] == "{eachNoteBook}"){
                for(n = 0;n < model.length ;n++){
                    var contentCon = contentConOne;
                    if(n == 0){
                        content = content.replace(allResult[0],model[n].name);
                        if(content.indexOf("{NoteNum}") != -1){
                            content = content.replace("{NoteNum}",model[n].noteNum);
                        }
                    }else{
                        contentCon = contentCon.replace(allResult[0],model[n].name);
                        if(contentCon.indexOf("{NoteNum}") != -1){
                            contentCon = contentCon.replace("{NoteNum}",model[n].noteNum);
                        }
                        content = content +contentCon;
                    }
                }

                resultHtml.push(content);
                var html =resultHtml.join("");
               // alert(html);

                return html;
            }


            if(allResult[i].indexOf("{eachNote}") != -1){
                var re =  /\{\s*([a-zA-Z\u4E00-\u9FA5\.\_0-9()]+)\s*\}/g;
                //Note ���������
                var name = re.exec("{" + groupName + "}");

                //name = groupName;

                //�滻�� {eachNote} �� ����{���÷���}
                content = content.replace(allResult[0],"");
                content = content.replace(allResult[1],"");

                var contentforNext  = content;
                for(n = 0; n < model.length; n++){
                    if(model[n].name == name[1]){

                        if(model[n].noteStore.length == 0){
                            content = null;
                        }

                        for(var p = 0;p < model[n].noteStore.length;p++){
                            if(p == 0){
                                for(var a = 2;a < allResult.length ;a++){

                                    var re =/\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
                                    var str = re.exec(allResult[a]);

                                    content = content.replace(allResult[a],model[n].noteStore[p][str[1]]);
                                    /*else{
                                        content = content.replace(allResult[a],data[n].noteStore[p][str[1]].substring(0,100));
                                    }*/


                                  //  alert(content);

                                }

                            }else{

                                var contentfor = contentforNext;
                                for(a = 2;a < allResult.length ;a++){

                                    var re =/\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
                                    var str = re.exec(allResult[a]);

                                    contentfor = contentfor.replace(allResult[a],model[n].noteStore[p][str[1]]);
                                    //alert(model[n].noteStore[p][str[1]]);
                                    /*else{
                                     content = content.replace(allResult[a],data[n].noteStore[p][str[1]].substring(0,100));
                                     }*/


                                    //  alert(content);

                                }

                                content = content + contentfor;


                               /* var re =/\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
                                var str = re.exec(allResult[a]);
                                content = content  + content.replace(allResult[a],model[n].noteStore[p][str[1]]);
                           */ }
                        }

                    }
                }

                resultHtml.push(content);
                var html =resultHtml.join("");
                // alert(html);
                return html;
            }
            if(allResult[i] == "{content}"){
                var noteBook = null;
                content = content.replace(allResult[0],"");
                content = content.replace(allResult[1],"");

                for(var j = 1; j < allResult.length; j++){
                    var re =  /\{\s*([a-zA-Z\u4E00-\u9FA5\.\_0-9()]+)\s*\}/g;
                    var res = re.exec(allResult[j]);

                    for(var k = 0; k< model.length; k++){

                        if(model[k].name == groupName){
                            noteBook = model[k];
                        }
                    }
                }

               // alert(content);


                if(noteBook != null){
                    for(var c = 0;c < noteBook.noteStore.length;c++){

                        var re =  /\{\s*([a-zA-Z\u4E00-\u9FA5\.\_0-9()]+)\s*\}/g;
                        var res = re.exec(allResult[2]);

                        if(noteBook.noteStore[c].title == noteTitle){
                            content = content.replace(allResult[2],noteBook.noteStore[c].content);
                        }
                    }

                }

                resultHtml.push(content);

                var html =resultHtml.join("");
                // alert(html);

                return html;


            }








        }



            var demo = content.split(allResult[0]);

/////////////////////////////////////////////////////////////////////////////////////
            var re = /\{\s*([a-hj-zA-Z\.\_0-9()]+)\s*\}/g;
            var titleNme = re.exec(allResult[0]);


         //   alert(model[titleNme[1]][1][1]);
        //   alert(demo[1]);
            if(model[titleNme[1]].constructor != Array){
             //   alert(model[titleNme[1]][0][0]);
                resultHtml.push(demo[0]);
                resultHtml.push(model[titleNme[1]]);

                resultHtml.push(demo[1]);
            }else{
                for(var i = 0;i < model[titleNme[1]].length;  i++){

                    resultHtml.push(demo[0]);

                    resultHtml.push(model[titleNme[1]][i][i]);

                    resultHtml.push(demo[1]);
                }
            }


        var html =resultHtml.join("");

        return html;
    }
}


