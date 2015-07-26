/**
 * Created by 永夜 on 2015/7/21.
 */
function showCategory(){
    this.showCate = function(content){

        return content;
    }

}



//实现模板
function Template(contentId){

    //最后转换的 html 结果
    var resultHtml = [];


    var content = document.getElementById(contentId).textContent;

    //{i} 不能使用  用于列表
    var re =  /\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
    var result = re.exec(content);
    //alert("sdf");
    //符合 {string} 格式的字符串数组
    var re =  /\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
    var allResult = content.match(re);
 //   alert(allResult);

///////////////////////////////////////////////////////////////////



    var re =/\{\s*([a-hj-zA-Z\.\_0-9()]+)\s*\}/g;
    var str = re.exec(allResult[0]);

    //content = content.replace(allResult[0],1);

    this.render = function(model){
        //符合 {string} 格式的字符串数组
        var re =  /\{\s*([a-zA-Z\u4E00-\u9FA5\.\_0-9()]+)\s*\}/g;
        var allResult = content.match(re);
       // alert(allResult);
        for(i = 0;i<allResult.length ; i++){


            if(allResult[i] == "{eachNoteBook}"){

                for(n = 0;n < data.length ;n++){
                    if(n == 0){

                        content = content.replace(allResult[0],data[i].getName());
                        if(content.contains("{NoteNum}")){
                            content = content.replace("{NoteNum}",data[i].noteNum);
                        }

                    }else{
                        content = content + content.replace(allResult[0],data[i].getName());
                        if(content.contains("{NoteNum}")){
                            content = content.replace("{NoteNum}",data[i].noteNum);
                        }
                    }

                }



                resultHtml.push(content);

                var html =resultHtml.join("");
               // alert(html);

                return html;
            }


            if(allResult[i].contains("{eachNote}")){


                var re =  /\{\s*([a-zA-Z\u4E00-\u9FA5\.\_0-9()]+)\s*\}/g;

                //Note 分类 的名字
                var name = re.exec(allResult[i + 1]);


                //替换掉 {eachNote} 与 分类{常用分组}
                content = content.replace(allResult[0],"");
                content = content.replace(allResult[1],"");


                for(n = 0;n < data.length ;n++){
                    if(data[n].name == name[1]){
                        for(var p = 0;p < data[n].noteStore.length;p++){


                            if(p == 0){
                                for(var a = 2;a < allResult.length ;a++){

                                    var re =/\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
                                    var str = re.exec(allResult[a]);
                                    if(data[n].noteStore[p][str[1]].length <= 100){
                                        content = content.replace(allResult[a],data[n].noteStore[p][str[1]]);
                                    }else{
                                        content = content.replace(allResult[a],data[n].noteStore[p][str[1]].substring(0,100));
                                    }


                                  //  alert(content);

                                }

                            }else{
                                var re =/\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/g;
                                var str = re.exec(allResult[a]);
                                if(data[n].noteStore[p][str[1]].length <= 100){
                                    content = content  + content.replace(allResult[a],data[n].noteStore[p][str[1]]);
                                }else{
                                    content = content  + content.replace(allResult[a],data[n].noteStore[p][str[1]].substring(0,100));
                                    content = content.replace(allResult[a],data[n].noteStore[p][str[1]].substring(0,100));
                                }


                            }



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

                for(var j = 1;j < allResult.length ;j++){
                    var re =  /\{\s*([a-zA-Z\u4E00-\u9FA5\.\_0-9()]+)\s*\}/g;
                    var res = re.exec(allResult[j]);

                    for(var k = 0;k< data.length;k++){

                        if(data[k].name == res[1]){
                            noteBook = data[k];
                        }
                    }
                }

               // alert(content);


                if(noteBook != null){
                    for(var c = 0;c < noteBook.noteStore.length;c++){

                        var re =  /\{\s*([a-zA-Z\u4E00-\u9FA5\.\_0-9()]+)\s*\}/g;
                        var res = re.exec(allResult[2]);

                        if(noteBook.noteStore[c].title == res[1]){
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


